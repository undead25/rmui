import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './wall.scss';

export function Wall (props: MUI.WallProps) {
    const { className, children, ...others } = props;
    const cls = classNames({
      wall: true,
      [className as string ]: className,
    });
    return (
        <div className={cls} { ...others }>
          {children}
        </div>
    )
}

export default Wall;