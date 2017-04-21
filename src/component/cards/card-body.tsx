import * as React from 'react';
import * as classnames from 'classnames';
import PropTypes from 'prop-types';
import './cards.scss';

export function CardBody(props: MUI.CardsProps) {
  const { children, className = '', ...others } = props;
  const cls = classnames({
    'card-body': true,
    [className]: !!className,
  });
  return (
    <div
      className={cls}
      { ...others }
    >
      {children}
    </div>
  )
}

export default CardBody;