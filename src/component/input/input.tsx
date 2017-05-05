import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';

import './input.scss';

export default class Input extends React.Component<MUI.InputProps, any> {

  public render(): JSX.Element {
    const {
      prefix = "mui-input",
      labelWidth = 5,
      style,
      placeholder,
      type = "text",
      name,
      maxLength,
      className,
      children,
      value,
      defaultValue,
      clear = false,
      suffix,
      disabled = false,
      readOnly = false
    } = this.props;

    let _value = 'value' in this.props ? {value} : {defaultValue};

    const cls = classNames({
      'mui-list-cell': true,
      [`${prefix}`]: true,
      [`${prefix}-disabled`]: disabled
    });

    const inputLabelCls = classNames({
      [`${prefix}-label`]: true,
      [`${prefix}-label-${labelWidth}`]: labelWidth
    });

    let inputType: string = type;
    if (type === 'phone' || type === 'bankcard') {
      inputType = 'tel';
    }

    let pattern;
    if (type === 'number') {
      pattern = '[0-9]*';
    }

    return (
      <div className={cls}>
        {children && <div className={inputLabelCls}>{children}</div>}
        <div className={`${prefix}-container`}>
          <input
            ref="input"
            placeholder={placeholder}
            type={inputType}
            pattern={pattern}
            onChange={this._onChange}
            onBlur={this._onBlur}
            onFocus={this._onFocus}
            readOnly={readOnly}
            disabled={disabled}
            maxLength={maxLength}
            {..._value}
          />
        </div>
        {clear && !readOnly && (value && value.length > 0) ?
          <div className={`${prefix}-clear`} onClick={this.handleClear}></div>
          : null}
        {suffix && <div className={`${prefix}-suffix`}>{suffix}</div>}
      </div>
    );
  }

  private _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    switch (this.props.type) {
      case 'text':
        break;
      // 银行卡：4,4,4...展示
      case 'bankcard':
        value = value.replace(/\D/g, '');
        value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ');
        break;
      // 手机号： 3,4,4展示
      case 'phone':
        value = value.replace(/\D/g, '').substring(0, 11);
        const len = value.length;
        if (len > 3 && len < 8) {
          value = `${value.substr(0, 3)} ${value.substr(3)}`;
        } else if (len >= 8) {
          value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`;
        }
        break;
      // 数字：只允许输入数字
      case 'number':
        value = value.replace(/\D/g, '');
        break;
      default:
        break;
    }
    // emit事件
    this.props.onChange && this.props.onChange(value);
  }

  private _onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    // emit事件
    this.props.onBlur && this.props.onBlur(value);
  }

  private _onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    // emit事件
    this.props.onFocus && this.props.onFocus(value);
  }

  private handleClear = () => {
    if (this.props.onChange) this.props.onChange('');
    (this.refs as any).input.focus();
  }
}
