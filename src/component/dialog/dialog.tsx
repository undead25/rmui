import * as React from 'react';
import * as classNames from 'classnames';
import Portal from '../core/portal';

import { Mask } from '../mask';
import './dialog.scss';

export default class Dialog extends React.Component<MUI.DialogProps, any> {
  static defaultProps = {
    prefix: 'mui-dialog'
  };

  constructor(props: MUI.DialogProps) {
    super(props);

    this.state = {
      show: false,
      closing: false
    };
  }

  public render(): JSX.Element {
    const { show, prefix, title, children } = this.props;

    const cls = classNames({
      [`${prefix}`]: true,
      'mui-animate-zoom-in': this.state.show && !this.state.closing,
      'mui-animate-zoom-out': this.state.closing
    });

    // 遮罩层样式
    const maskCls = classNames({
      'mui-animate-fade-in': show && !this.state.closing,
      'mui-animate-fade-out': this.state.closing,
    });

    return (
      <Portal isOpen={this.state.show}>
        <div className={cls}>
          <div className={`${prefix}-content`}>
            <div className={`${prefix}-title`}>{title}</div>
            <div className={`${prefix}-body`}>{children}</div>
            <div className={`${prefix}-footer`}>
              {this.renderFooter()}
            </div>
          </div>
        </div>
      </Portal>
    );

    // return this.state.show && (
    //   <div>
    //     <Mask className={maskCls} />
    //     <div className={cls}>
    //       <div className={`${prefix}-content`}>
    //         <div className={`${prefix}-title`}>{title}</div>
    //         <div className={`${prefix}-body`}>{children}</div>
    //         <div className={`${prefix}-footer`}>
    //           {this.renderFooter()}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // );
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.show) {
      this.setState({ show: true });
    } else {
      this.setState({
        closing: true
      }, () => setTimeout(() => {
        this.setState({ show: false, closing: false });
      }, 300));
    }
  }

  /**
   * 渲染底部按钮组
   */
  renderFooter = () => {
    const { prefix, buttons } = this.props;
    return buttons.map((button, idx) => (
      <a key={idx} className={`${prefix}-button`} onClick={button.action}>{button.label}</a>
    ));
  }
}
