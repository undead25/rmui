import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from './button';
import './button.scss';


export function Vcode(props: MUI.ButtonProps) {
  const { children, onClick, className, content, ...others } = props;
  const cls = classNames({
    'btn': true,
    "btn-vcode": true,
    [className as string]: className,
  });
  <div
    className={cls}
    onClick={onClick}
    {...others}
  >{content}</div>
}

export default Vcode;