import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as classNames from 'classnames';

export default class Protal extends React.Component<MUI.PortalProps, any> {
  private node: Node | Element | null;
  private portal: Element | null;

  public componentWillReceiveProps(newProps) {
    if (typeof newProps.isOpen !== 'undefined') {
      if (newProps.isOpen) {
        this.renderPortal(newProps);
      }

      if (!newProps.isOpen) {
        this.removePortal();
      }
    }
  }

  public shouldComponentUpdate(nextProps: MUI.PortalProps) {
    return (nextProps.isOpen !== this.props.isOpen);
  }

  public render() {
    return null;
  }

  public componentDidMount() {
    this.props.isOpen && this.renderPortal();
  }

  private renderPortal(props: any = this.props) {
    if (!this.node) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
    }

    let children = this.props.children;

    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      children as any,
      this.node as Element
      // this.props.onUpdate
    );

    setTimeout(() => (this.node as Element).classList.add('portal-active'), 0);
  }

  private removePortal() {
    if (this.node) {
      (this.node as Element).classList.remove('portal-active');
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(this.node as Element);
        document.body.removeChild(this.node as Element);
        this.portal = null;
        this.node = null;
      }, 300);
    }
  }
}
