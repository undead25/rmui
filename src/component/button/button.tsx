import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './button.scss';


export function Button(props: MUI.ButtonProps) {
  const { children, type, className='', onClick, style, ...others } = props;
  const cls = classNames({
    'btn':true,
    [className]:!!className
  })
  return (
    <button
      className={cls}
      type={type || 'button'}
      style={style}
      onClick={onClick}
      {...others}
    >
      {props.children}
    </button>
  )
}

export default Button;
