import * as React from 'react';
import * as classNames from 'classnames';

export default class PickerColumn extends React.Component<MUI.PickerColumnProps, any> {
  static defaultProps = {
    // itemHeight: 68,
    // indicatorTop: 204,
    // indicatorHeight: 68,
    animation: true,
    columnIdx: -1,
    defaultIndex: -1,
    prefix: 'mui-picker',
    mapKeys: {
      label: 'label'
    }
  };

  private itemHeight;
  private indicatorTop;
  private indicatorHeight;

  /** 是否在触摸事件中 */
  private isTouching: boolean = false;
  /** 每次触摸动作唯一标识 */
  private touchId: number = 0;
  /** 列总高度 */
  private totalHeight: number = 0;
  /** 触摸开始Y轴位置 */
  private touchStartY = 0;

  /**
   * PickerColumn 构造函数
   * @param {MUI.PickerColumnProps} props - Props属性
   */
  constructor(props: MUI.PickerColumnProps) {
    super(props);

    this.state = {
      ogTranslate: 0,
      translate: 0,
      selected: 0,
      animating: this.props.animation
    };
  }

  public componentDidMount(): void {
    this.itemHeight = (this.refs.indicator as HTMLElement).getBoundingClientRect().height;
    this.indicatorHeight = this.itemHeight;
    this.indicatorTop = this.itemHeight * 3;
    this.adjustPosition(this.props);
  }

  public componentWillReceiveProps(nextProps: MUI.PickerColumnProps): void {
    this.adjustPosition(nextProps);
  }

  public adjustPosition = (props: MUI.PickerColumnProps): void => {
    const { items, defaultIndex } = props;
    const { itemHeight, indicatorTop, } = this;
    let { translate } = this.state;
    if (defaultIndex > -1) {
      translate = indicatorTop - itemHeight * defaultIndex;
    }

    // 总高度 = item 数量 * item 高度
    this.totalHeight = items.length * itemHeight;
    this.setState({
      selected: defaultIndex,
      ogTranslate: translate,
      translate,
    }, () => { if (defaultIndex <= -1) this.updateSelected(); });
  }

  /**
   * 调整选中索引
   * @returns {number} - 索引
   */
  adjustSelectedIndex(): number {
    const { items } = this.props;
    const { itemHeight, indicatorTop, indicatorHeight} = this;
    
    const { translate } = this.state;
    let selectedIndex = 0;

    for (let i = 0; i < items.length; i++) {
      if (!items[i].disabled && (itemHeight * i + translate) >= indicatorTop
        && ((i + 1) * itemHeight + translate) <= indicatorTop + indicatorHeight) {
        selectedIndex = i;
        break;
      } else if (items[i].disabled) {
        selectedIndex = i + 1;
      }
    }

    return selectedIndex;
  }

  /**
   * 更新选中，并传值给父组件
   */
  updateSelected(): void {
    const { items, onChange, columnIdx } = this.props;
    const selectedIndex = this.adjustSelectedIndex();
    onChange && onChange(items[selectedIndex], selectedIndex, columnIdx);
  }

  /**
   * 处理 TouchStart 事件
   * @param {React.TouchEvent<Element>} event - TouchEvent
   */
  public handleTouchStart = (e: React.TouchEvent<Element>): void => {
    if (this.isTouching || this.props.items.length <= 1) return;
    this.isTouching = true;
    this.touchId = e.targetTouches[0].identifier;
    this.touchStartY = this.state.translate === 0 ? e.targetTouches[0].pageY
      : e.targetTouches[0].pageY - this.state.translate;

    this.setState({
      ogTranslate: this.state.translate,
      animating: false
    });
  }

  /**
   * 处理 TouchMove 事件
   * @param {React.TouchEvent<Element>} event - TouchEvent
   */
  public handleTouchMove = (event: React.TouchEvent<Element>): void => {
    if (!this.isTouching || this.props.items.length <= 1) return;
    if (event.targetTouches[0].identifier !== this.touchId) return;

    // 阻止默认事件，防止整屏被拖动
    event.preventDefault();
    // 移动距离 = 移动过程中Y轴位置 - 触摸开始Y轴位置
    this.setState({
      translate: event.targetTouches[0].pageY - this.touchStartY
    });
  }

  /**
   * 处理 TouchEnd 事件
   */
  public handleTouchEnd = (): void => {
    if (!this.isTouching || this.props.items.length <= 1) return;

    const { indicatorTop, indicatorHeight, itemHeight } = this;
    let translate = this.state.translate;

    if (Math.abs(translate - this.state.ogTranslate) < (itemHeight * .51)) {
      // 如果移动距离不够item一多半高度，则移动距离保持不变
      translate = this.state.ogTranslate;
    } else if (translate > indicatorTop) {
      // 如果移动距离超过了顶部距离，则移动距离等于指示器距离顶部的距离
      translate = indicatorTop;
    } else if (translate + this.totalHeight < indicatorTop + indicatorHeight) {
      // 超过底部距离，此时translate为负
      // 204(上部分，即indicatorTop) + 68(指示器高度) + 204(下部分) = 总高度(即this.totalHeight)
      translate = indicatorTop + indicatorHeight - this.totalHeight;
    } else {
      // pass single item range but not exceed boundry
      let step = 0, adjust = 0;
      let diff = (translate - this.state.ogTranslate) / itemHeight;

      if (Math.abs(diff) < 1) {
        step = diff > 0 ? 1 : -1;
      } else {
        adjust = Math.abs((diff % 1) * 100) > 50 ? 1 : 0;
        step = diff > 0 ? Math.floor(diff) + adjust : Math.ceil(diff) - adjust;
      }

      translate = this.state.ogTranslate + (step * itemHeight);
    }

    this.isTouching = false;
    this.touchId = undefined;
    this.touchStartY = 0;
    this.setState({
      animating: true,
      translate
    }, () => this.updateSelected());
  }

  /**
   * Render() 渲染 DOM
   * @returns {JSX.Element} 
   */
  public render(): JSX.Element {
    const { items, prefix, className } = this.props;

    const cls = classNames(`${prefix}-item`, className);
    const styles = {
      'transform': `translate(0, ${this.state.translate}px)`,
      'transition': this.state.animating ? 'transform .3s' : 'none'
    };

    return (
      <div
        className={cls}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className={`${prefix}-col-mask`} />
        <div className={`${prefix}-col-indicator`} ref="indicator" />
        <div className={`${prefix}-col-content`} style={styles}>
          {items.map((item, j) => {
            const label = item[this.props.mapKeys.label];
            const itemCls = classNames('mui-picker-col-item', {
              'mui-picker-col-item-disabled': item.disabled
            });
            return <div key={j} className={itemCls}>{label}</div>;
          })}
        </div>
      </div>
    );
  }
}
