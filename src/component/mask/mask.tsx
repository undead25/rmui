import * as React from 'react';
import * as classNames from 'classnames';

import './mask.scss';

export default function Mask(props: MUI.MaskProps) {
  const { transparent, className, prefix = 'mui-mask', ...others } = props;

  const cls = classNames({
    [`${prefix}`]: true,
    'transparent': transparent,
    [className as string]: className
  });

  return (
    <div className={cls} {...others}/>
  );
}
