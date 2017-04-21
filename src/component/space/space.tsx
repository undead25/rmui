import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './space.scss';

export function Space (props: MUI.SpaceProps) {
   const { className, style, size='md', ...others } = props;

    const cls = classNames({
      'white-space': true,
      [className as string ]: className,
    });
    return (
      <div className={cls} style={style} {...others}></div>
    )
}

export default Space;