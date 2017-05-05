import * as React from 'react';
import * as classNames from 'classnames';

import './overlay.scss';

export default function Overlay(props: MUI.OverlayProps) {
  const {transparent, className, prefix = 'mui-overlay'} = props;

  const cls = classNames({
    [`${prefix}`]: true,
    'transparent': transparent,
    [className as string]: className
  });

  return (
    <div className={cls}></div>
  );
}
