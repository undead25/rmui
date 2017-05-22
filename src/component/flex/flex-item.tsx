import * as React from 'react';
import * as classNames from 'classnames';

export default function FlexItem(props: MUI.Element) {
  const { prefix = 'mui-flex-item', className, children, ...others } = props;

  const cls = classNames({
    [prefix as string]: true,
    [className as string]: className,
  });

  return (
    <div className={cls} {...others}>
      {children}
    </div>
  );
}
