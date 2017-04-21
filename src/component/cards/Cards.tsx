import * as React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './cards.scss';

export function Cards(props: MUI.CardsProps) {
  const { children, ...others } = props;

  return (
    <div
      className="cards"
      {...others}
    >
      {children}
    </div>
  )
}

export default Cards;