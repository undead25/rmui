import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';

import Cell from './list-cell';
import './list.scss';

export default class List extends React.Component<MUI.ListProps, any> {
  static Cell = Cell;

  public render(): JSX.Element {
    const { className, children, style, renderHeader, prefix = 'mui-list' } = this.props;
    const cls = classNames({
      [`${prefix}`]: true,
      [className as string]: className
    });

    return (
      <div className={cls}>
        {renderHeader ? (<div className={`${prefix}-header`}>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}</div>)
          : null
        }
        {children ? (<div className={`${prefix}-body`}>{children}</div>) : null}
      </div>
    );
  }

}
