import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './page.scss';

export function Page (props: MUI.PageProps) {
   const { children, className, ...others } = props;
    const cls = classNames({
      page: true,
      [className as string ]: className,
    });
    return (
      <div  className={cls} { ...others }>{children}</div>
    )
}

export default Page;