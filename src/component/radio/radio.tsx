import * as React from 'react';
import * as classNames from 'classnames';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './radio.scss';
import Cell from '../list/list-cell';

export default function Radio(props: MUI.RadioProps) {
  let {
    style,
    children,
    className,
    checked,
    defaultChecked,
    disabled = false,
    prefix = 'mui-radio',
  } = props;

  const cls = classNames({
    [`${prefix}`]: true,
    [className as string]: className
  });

  let _checked = 'checked' in props ? {checked} : {defaultChecked}

  return (
    <Cell className={cls} thumb={
      <label>
        <input
          type="radio"
          {..._checked}
          disabled={disabled}
          // onChange={_onChange}
        />
        <span className={`${prefix}-icon`}></span>
      </label>}
    >
      {children}
    </Cell>
  );
}
