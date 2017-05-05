import * as React from 'react';
import * as classNames from 'classnames';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './checkbox.scss';
import Cell from '../list/list-cell';

export default function Checkbox(props: MUI.CheckboxProps) {
  let {
    style,
    children,
    className,
    checked,
    defaultChecked,
    disabled = false,
    prefix = 'mui-checkbox',
  } = props;

  const cls = classNames({
    [`${prefix}`]: true,
    [`mui-list-cell-disabled`]: disabled,
    [className as string]: className
  });

  // 受控非受控二选一
  let _checked = 'checked' in props ? { checked } : { defaultChecked };

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    checked = e.target.checked;
    // 输出信息
    const emitInfo: Object = {
      target: {
        checked: checked
      },
      preventDefault: () => e.preventDefault,
      stopPropagation: () => e.stopPropagation
    };
    props.onChange && props.onChange(emitInfo);
  };

  return (
    <Cell className={cls} thumb={
      <label>
        <input
          type="checkbox"
          {..._checked}
          disabled={disabled}
          onChange={_onChange}
        />
        <span className={`${prefix}-icon`}></span>
      </label>}
    >
      {children}
    </Cell>
  );
}
