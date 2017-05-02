import * as React from 'react';
import * as classNames from 'classnames';

import './wrapper.scss';

export function Wrapper(props: MUI.WrapperProps) {
  const { className, size, style, children } = props;
  const cls = classNames({
    [`wrapper ${size}`]: true,
    [className as string]: className
  });

  return (
    <div className={cls} style={style}>
      {children}
    </div>
  );
}

export default Wrapper;
