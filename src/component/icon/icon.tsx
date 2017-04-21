import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './icon.scss';

export function Icon (props: MUI.IconProps) {
    const {children, className, ...others } = props;
    const cls = classNames ({
      iconfont: true,
      [className as string ]: className,
    })
    return (
      <i className={cls} { ...others }>
        {children}
      </i>
    )
}

export default Icon;