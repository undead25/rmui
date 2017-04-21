import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './page.scss';

export function Wrapper (props: MUI.PageProps) {
   const { children, className, content,  ...others } = props;
    const cls = classNames({
      'wrapper': true,
      [className as string ]: className,
    });
    return (
      <div  className={cls} { ...others }>{children}</div>
    )
}

export default Wrapper;