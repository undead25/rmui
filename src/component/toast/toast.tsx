import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './toast.scss';
// import { Mask } from '../mask';


export function Toast(props: MUI.ToastsProps) {

  const { children, ...others } = props;
  return (
    <div
      className='toast'
      {...others} 
      >{children}</div>
  )
}


export default Toast;