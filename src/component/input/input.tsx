import * as React from 'react';
import * as classNames from 'classnames';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './input.scss';

export default class Input extends React.Component<MUI.InputProps, any> {
  public render(): JSX.Element {
    const {
      prefix = "mui",
      labelWidth = 5,
      style,
      placeholder,
      type = "text",
      className,
      children
    } = this.props;

    const cls = classNames({
      'list-item': true,
      [`${prefix}-input`]: true
    });

    const inputLabelCls = classNames({
      [`${prefix}-input-label`]: true,
      [`${prefix}-input-label-${labelWidth}`]: labelWidth
    });

    return (
      <div className={cls}>
        <div className={inputLabelCls}>{children}</div>
        <div className={`${prefix}-input-container`}>
          <input
            ref="input"
            placeholder={placeholder}
            type={type}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log(ReactDOM.findDOMNode(this.refs.input));
  }
}
