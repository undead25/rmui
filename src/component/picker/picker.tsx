import * as React from 'react';
import * as classNames from 'classnames';

import PickerColumn from './picker-column';
// import PickerColumn from './picker_group';
import { Mask } from '../mask';
import './picker.scss';

export default class Picker extends React.Component<MUI.PickerProps, any> {
  static defaultProps = {
    data: [],
    show: false,
    prefix: 'mui-picker',
    labelCancel: '取消',
    labelConfirm: '确定'
  };

  /**
   * Picker组件构造函数
   * @param {MUI.PickerProps} props - 属性
   */
  constructor(props: MUI.PickerProps) {
    super(props);
    const { defaultSelect, data } = this.props;
    this.state = {
      selected: defaultSelect ? defaultSelect : Array(data.length).fill(-1),
      closing: false
    };
  }

  /**
   * 点击确定按钮后，emit 选中数据给父组件
   */
  handleConfirm = (): void => {
    const {data, onConfirm} = this.props;
    this.handleClose(() => {
      // 单列传值
      if (this.props.onConfirm) this.props.onConfirm(data[0].items[this.state.selected[0]]);
    });
  }

  /**
   * 数据列选择内容改变后
   * @param {object} item
   * @param {number} i
   * @param {number} columnIdx
   */
  handleChange = (item: object, i: number, columnIdx: number): void => {
    let selected = this.state.selected;
    selected[columnIdx] = i;
    this.setState({ selected }, () => {
      if (this.props.onColunmChange) this.props.onColunmChange(item, i, columnIdx, this.state.selected, this);
    });
  }

  /**
   * 点击取消按钮后
   * @param {() => any} [callback] - 回调函数
   */
  handleClose = (callback?: () => any) => {
    this.setState({
      closing: true
    }, () => setTimeout(() => {
      this.setState({ closing: false });
      callback && callback();
    }, 300));
  }

  /**
   * 渲染 Header DOM
   * @returns {JSX.Element}
   */
  renderHeader(): JSX.Element {
    const { prefix, labelCancel, labelConfirm } = this.props;
    return (
      <div className={`${prefix}-header`}>
        <div
          className={`${prefix}-header-item`}
          onClick={e => this.handleClose(() => { if (this.props.onCancel) this.props.onCancel(e); })}
        >
          {labelCancel}
        </div>
        <div
          className={`${prefix}-header-item`}
          onClick={() => this.handleConfirm()}
        >
          {labelConfirm}
        </div>
      </div>
    );
  }

  /**
   * 渲染列 DOM
   * @returns {Array<JSX.Element>}
   */
  renderColumns(): Array<JSX.Element> {
    const { data = [] } = this.props;
    return data.map((column, idx) => {
      return (
        <PickerColumn
          key={idx}
          {...column}
          onChange={this.handleChange}
          columnIdx={idx}
          defaultIndex={this.state.selected[idx]}
        />
      );
    });
  }

  /**
   * Render() 渲染 DOM
   * @returns {(JSX.Element | null)}
   */
  render(): JSX.Element | null {
    // Props 属性
    const { className, show, data, prefix, defaultSelect, onColunmChange, onConfirm, onCancel } = this.props;

    // Picker 样式
    const cls = classNames({
      [`${prefix}`]: true,
      'mui-animate-slide-up': show && !this.state.closing,
      'mui-animate-slide-down': this.state.closing,
      [className as string]: className
    });

    // 遮罩层样式
    const maskCls = classNames({
      'mui-animate-fade-in': show && !this.state.closing,
      'mui-animate-fade-out': this.state.closing,
    });

    // 渲染
    return show ? (
      <div>
        <Mask
          className={maskCls}
          onClick={e => this.handleClose(() => { if (this.props.onCancel) this.props.onCancel(e); })}
        />
        <div className={cls}>
          {this.renderHeader()}
          <div className={`${prefix}-body`}>
            {this.renderColumns()}
          </div>
        </div>
      </div>
    ) : null;
  }
}
