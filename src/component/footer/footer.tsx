import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './footer.scss';
export function Footer (props: MUI.FooterProps) {
    const {children, className,  ...others} = props;
    const cls = classNames({
      footer: true,
      [className as string]: className,
    })
    return (
      <div className={cls} {...others}> {children} </div>
    )
}

export default Footer;