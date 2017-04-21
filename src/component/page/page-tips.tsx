import * as React from 'react';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import './page.scss';
export function PageTips (props: MUI.PageProps) {
   const { children, className, content,  ...others } = props;
    const cls = classNames({
      'page-tips': true,
      [className as string ]: className,
    });
    return (
      <div  className={cls} { ...others }>{content}</div>
    )
}

export default PageTips;