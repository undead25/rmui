import * as React from 'react';
import * as classNames from 'classnames';

import './toast.scss';

export default class Toast extends React.Component<MUI.ToastProps, any> {
  static defaultProps = {
    prefix: 'mui-toast',
    duration: 2,
    closing: false
  };

  private closeTimer: any;

  constructor(props: MUI.ToastProps) {
    super(props);

    this.state = {
      show: this.props.show
    };
  }

  public render(): JSX.Element {
    const { prefix, className, children, style, placement, type, full } = this.props;
    const cls = classNames({
      [`${prefix}`]: true,
      [`${prefix}-top`]: placement === 'top',
      [`${prefix}-error`]: type === 'error',
      [`${prefix}-full`]: full,

      [className as string]: className
    });

    const contentCls = classNames({
      [`${prefix}-content`]: true,
      'mui-animate-slide-out-up': this.state.show && !this.state.closing && placement === 'top',
      'mui-animate-slide-in-down': this.state.closing && placement === 'top'
    });

    return this.state.show && (
      <div className={cls}>
        <div className={contentCls} style={style}>
          {children}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.state.show && this.setCloseTimer();
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.show && !this.state.show) {
      this.setState({
        closing: true
      });
      setTimeout(() => {
        this.setState({
          show: true,
        }, () => this.setCloseTimer());
      }, 0);
    }
  }

  private close = () => {
    this.clearCloseTimer();
    this.setState({
      closing: false
    });

    setTimeout(() => {
      this.props.onClose && this.props.onClose();
      this.setState({ show: false });
    }, 300);
  }

  private setCloseTimer = () => {
    this.closeTimer = setTimeout(() => {
      this.close();
    }, this.props.duration * 1000);
  }

  private clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  }
}