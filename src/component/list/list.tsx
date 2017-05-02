import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';

import ListItem from './list-item';
import './list.scss';

export default class List extends React.Component<MUI.ListProps, any> {
  static Item = ListItem;

  public render():JSX.Element {
    const { className, children, style, renderHeader } = this.props;
    const cls = classNames({
      'list': true,
      [className as string]: className
    });

    return (
      <div className={cls}>
        {renderHeader ? (<div className="list-header">
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}</div>)
          : null
        }
        {children ? (<div className="list-body">{children}</div>) : null}
      </div>
    );
  }

}
