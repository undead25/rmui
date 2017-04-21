import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import Cards from './cards';
import './cards.scss';

export function CardHeader(props: MUI.CardsProps) {
  const { children, className = '', ...others } = props;
  const cls = classNames({
    'card-header': true,
    [className]: !!className
  })
  return (
    <div
      className={cls}
      { ...others }
    >{children}</div>
  )
}

export default CardHeader;