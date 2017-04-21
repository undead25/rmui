export = MUI;
export as namespace MUI;

declare namespace MUI {

  //Button vcode 按钮

  interface ButtonProps {
    children?: any;
    type?: string;
    style?: Object;
    disabled?: boolean;
    onClick?: (e: any) => any;
    className?: string;
    time?: number;
    content?: string;
  }

  // card 卡片

  interface CardsProps {
    children?: any,
    className?: string,
    test?: any;
  }


  // cell 布局

  interface CellsProps {
    children?: any,
    className?: string,
    cellFooterText?: any,
    onClick?: (...args: any[]) => void,
    linkUrl?: string
  }


  //Mask 

  interface MaskProps {
    transparent?: boolean,
    onClick?: (...args: any[]) => void,
    className?: any,
  }

  // Alert弹框

  interface AlertProps {
    buttons?: any,
    open?: boolean,
    title?: string,
    children?: any,
    className?: string,
    content?: any,
    type?: any,
    style?: any

  }

  // Loading

  interface LoadingProps {
    image?: string,
    tips?: string,
    disable?: boolean,
    style?: Object,
    children?: any,
  }

  // Dialog

  interface DialogProps {
    normalChildren?: object,
    cancelChildren?: object,
    otherChildren?: object,
    close?: (...args: any[]) => void,
    visible?: boolean
  }

  // Confirm 

  interface ConfirmProps {
    show?: boolean,
    children?: any,
    className?: string,
  }

  //Flex

  interface FlexProps {
    className?: string;
    children?: any;
    direction?: string;
    wrap?: string;
    justify?: string;
    alignContent?: string;
    align?: string;
    prefixCls?: string;
    onClick?: (...args: any[]) => void;
    style?: any;
  }

  //footerProps 

  interface FooterProps {
    children?: any,
    className?: string,
    // footerData?: any[],
    datalist?: any[]

  }

  //IconProps

  interface IconProps {
    children?: any,
    className?: string,
  }



  interface PageProps {
    children?: any,
    className?: string,
    content?: any,

  }

  // TableHeader
  interface TableHeaderProps {
    headerClass?: string,
    rows?: Array<any>,
    headRows?: any,
    className?: any
  }

  // TableBody
  interface TableBodyProps {
    rowDatas?: any,
    headRows?: any,
  }

  // TableRow
  interface TableRowProps {
    cellData?: object,
    cellClass: Array<any>,
    cellRender: Array<any>,
  }

  /**
   * @description Table
   * @param {string} headerClass - 头部样式
   * @param {array} headerRows - 头部rows
   * @param {any} rowDatas - table body部分内容
   * @param {string} tableClass - table样式
   */
  interface TableProps {
    headerClass?: string,
    headerRows?: Array<any>,
    rowDatas?: any,
    tableClass?: string,
  }

  //Wall
  interface WallProps {
    children?: any,
    className?: string,
  }

  //SpaceProps
  interface SpaceProps {
    style?: object;
    size?: string;
    className?: string;
  }

  //Toast

  interface ToastsProps {
    open?: boolean;
    // duration: number;
    children?: any,
    message?: string;
    onRequestClose?: (...args: any[]) => void;
    onClose?: (...args: any[]) => void;
    icon?: string;
  }
}
