import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './cells.scss'

export function CellBody(props: MUI.CellsProps) {
  const { children, className, ...others } = props;
  const cls = classNames({
    'cell-bd': true,
    [className as string ]: className,
  })
  return (
    <div className={cls} {...others}> {children}

    </div>
  )
}

export default CellBody;