import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';
// import PropTypes from 'prop-types';

import './picker.scss';
import { Mask } from '../mask';
import Portal from '../core/portal';
export default class Picker extends React.Component<MUI.PickerProps, any> {
  /** 是否在触摸事件中 */
  private isTouching: boolean = false;
  /** 是否触发动画，touchEnd后为true触发滚动动画 */
  private canAnimate: boolean = true;
  /** 选择数据项总高度 */
  private totalHeight: number;
  /** 选择数据项高度 */
  private itemHeight = 68;
  /** 指示器距离顶部的距离 */
  private indicatorTop = 204;
  /** 指示器高度 */
  private indicatorHeight = 68;
  /** 触摸开始Y轴位置 */
  private touchStartY = 0;
  /** 选中值 */
  private _selected: any;
  // 选中值在数组中的索引
  private defaultIndex: number = -1;
  /** 每次触摸动作唯一标识 */
  private touchID: number;
  /** 移动距离, touchMove过程中不断改变 */
  private translate = (this.totalHeight <= this.indicatorTop) ? this.indicatorTop : 0;
  /** 初始移动距离，touchEnd后重新设置， 初始 = translate */
  private ogTranslate: number;

  public render(): JSX.Element | null {
    let { className, show, prefix = 'mui-picker', items, onCancel, selected } = this.props;

    const cls = classNames({
      [`${prefix}`]: true,
      [className as string]: className
    });

    return (
      <Portal isOpen={show}>
        <div>
          <Mask onClick={e => this.handleCancel()} />
          <div className={cls}>
            <div className={`${prefix}-header`}>
              <div
                className={`${prefix}-header-item`}
                onClick={e => this.handleCancel()}>
                取消
              </div>
              <div
                className={`${prefix}-header-item`}
                onClick={this.handleConfirm}
              >
                确定
              </div>
            </div>
            <div className={`${prefix}-body`}>
              <div className={`${prefix}-item`}
                onTouchStart={this._onTouchStart}
                onTouchMove={this._onTouchMove}
                onTouchEnd={this._onTouchEnd}
              >
                <div className={`${prefix}-col-mask`} ref="mask"></div>
                <div className={`${prefix}-col-indicator`}></div>
                <div className={`${prefix}-col-content`} ref="content">
                  {items.length && (items.map((item, idx) => {
                    return (
                      <div key={idx}
                        className={classNames(`${prefix}-col-item`, { [`${prefix}-col-item-disabled`]: item.disabled })}
                      >
                        {item.label}
                      </div>
                    );
                  }))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Portal>
    );
  }

  public componentDidMount() {
    this.resetPosition();
  }

  shouldComponentUpdate(nextProps: MUI.PickerProps) {
    return (nextProps.show !== this.props.show);
  }

  public componentWillReceiveProps(nextProps: MUI.PickerProps) {
    if (nextProps.selected) this.resetPosition(nextProps);
  }

  public componentDidUpdate(prevProps: MUI.PickerProps) {
    !prevProps.show && this.setContentStyle(`translate(0, ${this.translate}px)`, `transform .3s`);
  }

  private resetPosition = (props: MUI.PickerProps = this.props) => {
    const { items, selected } = props;
    this.totalHeight = this.itemHeight * items.length;
    let _translate: number = this.totalHeight <= this.indicatorTop ? this.indicatorTop : 0;

    if (this._selected) {
      items.forEach((item, idx) => {
        if (this._selected === item) {
          this.defaultIndex = idx;
        }
      });
      if (_translate === 0) {
        let upperCount = Math.floor(this.indicatorTop / this.itemHeight);
        if (this.defaultIndex > upperCount) {
          //over
          let overCount = this.defaultIndex - upperCount;
          _translate -= overCount * this.itemHeight;
        } else if (this.defaultIndex === upperCount) {
          _translate = 0;
        } else {
          //less
          _translate += (Math.abs(upperCount - this.defaultIndex) * this.itemHeight);
        }
      }
    }
    this._selected = selected;
    this.translate = _translate;
    this.ogTranslate = _translate;
    this.updateSelected();
  }

  private updateSelected() {
    let selected = -1;
    this.props.items.forEach((item, idx) => {
      if (!item.disabled
        && (this.translate + (this.itemHeight * idx) >= this.indicatorTop)
        && (this.translate + (this.itemHeight * idx) + this.itemHeight <= this.indicatorTop + this.indicatorHeight)) {
        selected = idx;
      }
    });
    this._selected = this.props.items[selected];
    // this.handleConfirm(this.props.items[selected], selected);
  }

  private _onTouchStart = (e: React.TouchEvent<Element>) => {
    if (this.isTouching || this.props.items.length <= 1) return;
    this.isTouching = true;
    this.canAnimate = false;
    this.touchStartY = this.translate === 0 ? e.targetTouches[0].pageY
      : e.targetTouches[0].pageY - this.translate;
    this.touchID = e.targetTouches[0].identifier;
  }

  private _onTouchMove = (e: React.TouchEvent<Element>) => {
    if (!this.isTouching || this.props.items.length <= 1) return;
    if (e.targetTouches[0].identifier !== this.touchID) return;

    // 阻止默认事件，防止整屏被拖动
    e.preventDefault();

    // 移动距离 = 移动过程中Y轴位置 - 触摸开始Y轴位置
    this.translate = e.targetTouches[0].pageY - this.touchStartY;

    this.setContentStyle(`translate(0, ${this.translate}px)`, 'none');
  }

  private _onTouchEnd = (e: React.TouchEvent<Element>) => {
    if (!this.isTouching || this.props.items.length <= 1) return;
    let _translate = this.translate;

    if (Math.abs(_translate - this.ogTranslate) < (this.itemHeight * .51)) {
      // 如果移动距离不够item一多半高度，则移动距离保持不变
      _translate = this.ogTranslate;
    } else if (_translate > this.indicatorTop) {
      // 如果移动距离超过了顶部距离，则移动距离等于指示器距离顶部的距离
      _translate = this.indicatorTop;
    } else if (_translate + this.totalHeight < this.indicatorTop + this.indicatorHeight) {
      //bottom
      _translate = this.indicatorTop + this.indicatorHeight - this.totalHeight;
    } else {
      //pass single item range but not exceed boundry
      let step = 0, adjust = 0;
      let diff = (_translate - this.ogTranslate) / this.itemHeight;

      if (Math.abs(diff) < 1) {
        step = diff > 0 ? 1 : -1;
      } else {
        adjust = Math.abs((diff % 1) * 100) > 50 ? 1 : 0;
        step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
      }

      _translate = this.ogTranslate + (step * this.itemHeight);
    }

    this.isTouching = false;
    this.canAnimate = true;
    this.touchStartY = 0;
    this.ogTranslate = 0;
    this.translate = _translate;
    this.touchID = NaN;

    this.setContentStyle(`translate(0, ${this.translate}px)`, `transform .3s`);

    this.updateSelected();
  }

  private setContentStyle(transform: string, transition: string) {
    const content: HTMLElement = ReactDOM.findDOMNode(this.refs.content) as HTMLElement;
    content.style.transform = transform;
    content.style.transition = transition;
  }

  private handleCancel = (callback?: any) => {
    if (this.props.onCancel) {
      this.props.onCancel();
      callback && callback();
    }
  }

  private handleConfirm = () => {
    this.handleCancel(() => {
      if (this.props.onConfirm) this.props.onConfirm(this._selected);
    });
  }

}
