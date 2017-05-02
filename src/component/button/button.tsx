import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './button.scss';

export default function Button(props: MUI.ButtonProps) {
  const { prefix = 'mui', color, round, outline, size, children, type, className, onClick, style, ...others } = props;
  const cls = classNames({
    [`${prefix}-btn`]: true,
    [`${prefix}-btn-${color}`]: color,
    [`${prefix}-btn-round`]: round,
    [`${prefix}-btn-outline`]: outline,
    [`${prefix}-btn-sm`]: size === 'sm',
    [className as string]: className
  });

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
  );
}
