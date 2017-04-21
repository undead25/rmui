import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './cells.scss'

export function CellTips(props: MUI.CellsProps) {
  const { children, className, ...others } = props;
  const cls = classNames({
    'cells-tips': true,
    [className as string]: className,
  })
  return (
    <div
      className={cls}
      { ...others }
    >
      {children}
    </div>
  )
}

export default CellTips;