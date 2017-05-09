import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

import './picker.scss';
import { Mask } from '../mask';
import Portal from '../core/portal';
import PickerItem from './picker-item';

export default class Picker extends React.Component<MUI.PickerProps, any> {
  private selected: any;
  private selectedIdx: number;

  shouldComponentUpdate(nextProps: MUI.PickerProps) {
    return (nextProps.show !== this.props.show);
  }

  // 接受已选择的项目
  public componentWillReceiveProps(nextProps: MUI.PickerProps) {
    if (nextProps.selected) {
      this.selected = nextProps.selected;
    };
  }

  /**
   * 渲染组件DOM
   * @returns {(JSX.Element | null)}
   */
  public render(): JSX.Element | null {
    let { className, show, prefix = 'mui-picker', items, onCancel, selected, columns, multiple } = this.props;

    const cls = classNames({
      [`${prefix}`]: true,
      [className as string]: className
    });

    return (
      <Portal isOpen={show}>
        <div>
          <Mask onClick={e => this.handleCancel()} />
          <div className={cls}>
            {this.renderHeader()}
            <div className={`${prefix}-body`}>
              {this.renderBody()}
            </div>
          </div>
        </div>
      </Portal>
    );
  }

  /**
   * 渲染选择器 Header DOM
   * @private
   * @returns {JSX.Element}
   */
  private renderHeader(): JSX.Element {
    let { prefix = 'mui-picker', labelCancel = '取消', labelConfirm = '确定' } = this.props;
    return (
      <div className={`${prefix}-header`}>
        <div className={`${prefix}-header-item`}
          onClick={e => this.handleCancel()}>
          {labelCancel}
        </div>
        <div
          className={`${prefix}-header-item`}
          onClick={this.handleConfirm}
        >
          {labelConfirm}
        </div>
      </div>
    );
  }

  /**
   * 渲染选择器 Body DOM
   * @private
   * @returns {JSX.Element}
   */
  private renderBody(): JSX.Element[] {
    return this.props.items.map((item, idx) => {
      return (
        <PickerItem
          key={idx}
          {...item}
          onChange={this.handleChange}
          defaultIndex={this.selectedIdx > -1 ? this.selectedIdx : -1}
        />
      );
    });
  }

  private handleCancel = (callback?: any) => {
    if (this.props.onCancel) {
      this.props.onCancel();
      callback && callback();
    }
  }

  private handleChange = (selectedItem, idx) => {
    const { items = [] } = this.props;
    this.selected = selectedItem;
    // 单列，级联需要修改 @todo
    this.props.items[0].items.forEach((item, idx) => {
      if (item === this.selected) this.selectedIdx = idx;
    });
  }

  private handleConfirm = () => {
    this.handleCancel(() => {
      if (this.props.onConfirm) this.props.onConfirm(this.selected);
    });
  }
}
