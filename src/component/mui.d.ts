import React, { ReactChildren } from 'react';

export = MUI;
export as namespace MUI;
declare namespace MUI {
  interface Element {
    className?: string;
    children?: ReactChildren;
    style?: React.CSSProperties;
  }

  interface WrapperProps extends Element {
    size?: 'lg' | 'md' | 'sm';
  }

  /**
   * @interface ButtonProps
   */
  interface ButtonProps extends Element {
    type?: string;
    disabled?: boolean;
    onClick?: (e: any) => any;
  }

  interface ListProps extends Element {
    renderHeader?: () => any;
  }

  interface ListItemProps extends ListProps {
    value?: string;
    arrow?: boolean | 'down' | 'up';
    thumb?: string;
    subtitle?: string;
  }
}
