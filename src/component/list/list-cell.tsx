import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';

import './list.scss';

export default function Cell(props: MUI.ListItemProps) {
  const { className, children, value, arrow, thumb, subtitle, prefix= 'mui-list-cell', onClick } = props;
  const cls = classNames({
    [`${prefix}`]: true,
    [`${prefix}-access`]: arrow,
    [className as string]: className
  });

  const contentCls = classNames({
    [`${prefix}-content`]: true,
    [`${prefix}-multiline`]: subtitle
  });

  const arrowCls = classNames({
    [`${prefix}-arrow`]: true,
    'list-arrow-down': arrow === 'down',
    'list-arrow-up': arrow === 'up'
  });

  /**
   * @todo
   * 1. 文本溢出测试
   * 2. 丰富多行配置
   */
  return (
    <div className={cls} onClick={onClick}>
      {thumb && <div className={`${prefix}-thumb`}>
        {typeof thumb === 'string' ? <img src={thumb as string} /> : thumb}
      </div>}
      <div className={contentCls}>
        {
          children &&
          <div className={`${prefix}-head`}>
            {children}
            {subtitle && <div className={`${prefix}-subtitle`}>{subtitle}</div>}
          </div>
        }
        {value && <div className={`${prefix}-value`}>{typeof value === 'function' ? value() : value}</div>}
        {arrow && <div className={arrowCls}/>}
      </div>
    </div>
  );
}
