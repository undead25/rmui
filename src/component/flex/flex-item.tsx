import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './flex.scss';

export function FlexItem(props: MUI.FlexProps) {
  const { className, children, prefixCls = 'flex', ...others } = props;
  const cls = classNames({
    [`${prefixCls}-item`]: true,
    [className as string]: className,
  });

  return (
    <div className={cls} {...others} > {children} </div>
  )
}

export default FlexItem;