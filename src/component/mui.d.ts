import React, { ReactChildren } from 'react';

export = MUI;
export as namespace MUI;
declare namespace MUI {
  interface Element {
    className?: string;
    children?: ReactChildren;
    style?: React.CSSProperties;
    prefix?: string;
  }

  interface InputElement extends Element {
    onChange?: Function;
    onFocus?: Function;
    onBlur?: Function;
    maxLength?: number;
    autoFocus?: boolean;
    placeholder?: string;
    disabled?: boolean;
    value?: string;
    defaultValue?: string;
  }

  interface WrapperProps extends Element {
    size?: 'lg' | 'md' | 'sm';
  }

  interface ButtonProps extends Element {
    type?: string;
    disabled?: boolean;
    onClick?: (e: any) => any;
    color?: string;
    round?: boolean;
    outline?: boolean;
    size?: 'sm';
  }

  interface ListProps extends Element {
    renderHeader?: () => any;
  }

  interface ListItemProps extends ListProps {
    value?: string;
    arrow?: boolean | 'down' | 'up';
    thumb?: string;
    subtitle?: string;
  }

  interface InputProps extends InputElement {
    /** 文字数量，自动计算宽度 */
    labelWidth?: number;
    /** 文本类型 */
    type?: 'text' | 'number' | 'phone' | 'password' | 'bankcard' | 'idcard';
  }
}
