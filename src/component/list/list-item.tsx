import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';

import './list.scss';

export default function ListItem(props: MUI.ListItemProps) {
  const { className, children, value, arrow, thumb, subtitle } = props;
  const cls = classNames({
    'list-item': true,
    'list-item-access': arrow,
    [className as string]: className
  });

  const contentCls = classNames({
    'list-item-content': true,
    'list-item-multiline': subtitle
  });

  const arrowCls = classNames({
    'list-item-arrow': true,
    'list-arrow-down': arrow === 'down',
    'list-arrow-up': arrow === 'up'
  });

  /**
   * @todo
   * 1. 文本溢出测试
   * 2. 丰富多行配置
   */
  return (
    <div className={cls}>
      {thumb && <div className="list-item-thumb"><img src={thumb as string} /></div>}
      <div className={contentCls}>
        {
          children &&
          <div className="list-item-head">
            {children}
            {subtitle && <div className="list-item-subtitle">{subtitle}</div>}
          </div>
        }
        {value && <div className="list-item-value">{value}</div>}
        {arrow && <div className={arrowCls}></div>}
      </div>
    </div>
  );
}
