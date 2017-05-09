import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

export default class PickerItem extends React.Component<MUI.PickerItemProps, any> {
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
  private selected: any;
  /** 每次触摸动作唯一标识 */
  private touchID: number;
  /** 移动距离, touchMove过程中不断改变 */
  private translate = (this.totalHeight <= this.indicatorTop) ? this.indicatorTop : 0;
  /** 初始移动距离，touchEnd后重新设置， 初始 = translate */
  private ogTranslate: number;

  public componentDidMount() {
    console.log(this.props.items)
    this.adjustPosition(this.props);
  }

  public componentWillReceiveProps(nextProps: MUI.PickerItemProps) {
    nextProps.defaultIndex && this.adjustPosition(nextProps);
  }

  /**
   * 渲染组件DOM
   * @returns {(JSX.Element | null)}
   */
  public render(): JSX.Element | null {
    let { className, prefix = 'mui-picker', items = [], defaultIndex, mapKeys = { label: 'label' } } = this.props;

    const cls = classNames({
      [`${prefix}`]: true,
      [className as string]: className
    });

    return (
      <div className={`${prefix}-item`}
        onTouchStart={this._onTouchStart}
        onTouchMove={this._onTouchMove}
        onTouchEnd={this._onTouchEnd}
      >
        <div className={`${prefix}-col-mask`} ref="mask"></div>
        <div className={`${prefix}-col-indicator`}></div>
        <div className={`${prefix}-col-content`} ref="content">
          {items.length && items.map((item, idx) => {
            return (
              <div key={idx}
                className={classNames(`${prefix}-col-item`, { [`${prefix}-col-item-disabled`]: item.disabled })}
              >
                {item[mapKeys.label]}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  private adjustPosition = (props: MUI.PickerItemProps) => {
    const { items = [], defaultIndex = -1 } = props;
    this.totalHeight = this.itemHeight * items.length;
    let _translate: number = this.totalHeight <= this.indicatorTop ? this.indicatorTop : 0;

    if (defaultIndex > -1) {
      if (_translate === 0) {
        let upperCount = Math.floor(this.indicatorTop / this.itemHeight);
        if (defaultIndex > upperCount) {
          //over
          let overCount = defaultIndex - upperCount;
          _translate -= overCount * this.itemHeight;
        } else if (defaultIndex === upperCount) {
          _translate = 0;
        } else {
          //less
          _translate += (Math.abs(upperCount - defaultIndex) * this.itemHeight);
        }
      }
    }
    this.selected = defaultIndex;
    this.translate = _translate;
    this.ogTranslate = _translate;
    this.setContentStyle(`translate(0, ${this.translate}px)`, `transform .3s`);
  }

  private updateSelected() {
    const { items, onChange } = this.props;
    let selected = -1;
    items.length && items.forEach((item, idx) => {
      if (!item.disabled
        && (this.translate + (this.itemHeight * idx) >= this.indicatorTop)
        && (this.translate + (this.itemHeight * idx) + this.itemHeight <= this.indicatorTop + this.indicatorHeight)) {
        selected = idx;
      }
    });
    if (selected === -1) this.adjustPosition(this.props);
    if (onChange) onChange(items[selected], selected);
  }

  private _onTouchStart = (e: React.TouchEvent<Element>) => {
    if (this.isTouching || this.props.items.length <= 1) return;
    this.isTouching = true;
    this.canAnimate = false;
    this.ogTranslate = this.translate;
    this.touchStartY = this.translate === 0 ? e.targetTouches[0].pageY : e.targetTouches[0].pageY - this.translate;
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
    this.updateSelected();
    this.setContentStyle(`translate(0, ${this.translate}px)`, `transform .3s`);
  }

  private setContentStyle(transform: string, transition: string) {
    const content: HTMLElement = ReactDOM.findDOMNode(this.refs.content) as HTMLElement;
    content.style.transform = transform;
    content.style.transition = transition;
  }
}
