import * as React from 'react';
import * as classNames from 'classnames';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './checkbox.scss';

import Cell from '../list/list-cell';

export default function Checkbox(props: MUI.CheckboxProps) {
  const {style, children, className, prefix = 'mui-checkbox'} = props;
  const cls = classNames({
    'mui-list-cell': true,
    [`${prefix}`]: true
  });

  return (
    <div className={cls}>
      <Cell thumb={<label>
        <input type="checkbox"/>
        <span className={`${prefix}-unchecked`}></span>
      </label>}>
      {children}
      </Cell>
    </div>
  );
}
