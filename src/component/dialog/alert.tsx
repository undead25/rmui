import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './dialog.scss';


export function Alert(props: MUI.AlertProps) {
  const { className, children, type, title, ...others } = props;


  return (
    <div
      { ...others }
    >{children}</div>
  )
}

export default Alert;