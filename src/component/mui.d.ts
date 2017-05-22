import React, { ReactNode } from 'react';

export = MUI;
export as namespace MUI;
declare namespace MUI {
  interface Element {
    /** 样式名称 */
    className?: string;
    /** 子 DOM 元素*/
    children?: React.ReactNode;
    /** style 属性 */
    style?: React.CSSProperties;
    /** 样式前缀，避免样式冲突 */
    prefix?: string;
    /** 点击事件 */
    onClick?: (e: React.MouseEvent<Element>) => any;
  }

  interface PortalProps extends Element {
    isOpen?: boolean;
    portalID?: string;
    // onUpdate?: () => any;
    // beforeRemove?: (node: Element | Node | null, removePortal: () => any) => any;
    // afterRemoved?: () => any;
  }

  interface InputElement extends Element {
    /** Change 事件 */
    onChange?: Function;
    /** Focus 事件 */
    onFocus?: Function;
    /** Blur 事件 */
    onBlur?: Function;
    /** 最大自动长度 */
    maxLength?: number;
    /** 自动聚焦 */
    autoFocus?: boolean;
    /** 占位符 */
    placeholder?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否只读 */
    readOnly?: boolean;
    /** 受控值 */
    value?: string;
    /** 非受控值 */
    defaultValue?: string;
    /** 名称 */
    name?: string;
  }

  interface WrapperProps extends Element {
    size?: 'lg' | 'md' | 'sm';
  }

  interface ButtonProps extends Element {
    type?: string;
    disabled?: boolean;
    color?: string;
    round?: boolean;
    outline?: boolean;
    size?: 'sm';
  }

  interface ListProps extends Element {
    renderHeader?: () => any;
  }

  interface ListItemProps extends ListProps {
    value?: string | Function;
    arrow?: boolean | 'down' | 'up';
    thumb?: ReactNode | null;
    subtitle?: string;
  }

  interface InputProps extends InputElement {
    /** 文字数量，自动计算宽度 */
    labelWidth?: number;
    /** 文本类型 */
    type?: 'text' | 'number' | 'phone' | 'password' | 'bankcard' | 'date' | 'datetime-local';
    /** 是否带清除按钮 */
    clear?: boolean;
    /** 后缀 */
    suffix?: string;
  }

  interface CheckboxProps extends InputElement {
    /** 是否选中，受控 */
    checked?: boolean;
    /** 是否选中，非受控 */
    defaultChecked?: boolean;
  }

  interface RadioProps extends InputElement {
    /** 是否选中，受控 */
    checked?: boolean;
    /** 是否选中，非受控 */
    defaultChecked?: boolean;
  }

  interface MaskProps extends React.HTMLProps<HTMLDivElement> {
    // 是否透明
    transparent?: boolean;
  }

  interface PickerProps extends Element {
    defaultSelect?: any;
    show?: boolean;
    data?: Array<any>;
    columns?: number;
    /** 选中值, 对应items数据源的相应级层value。例：[value1, value2, value3] */
    labelCancel?: string;
    selected?: Array<any>;
    onCancel?: (e) => any;
    labelConfirm?: string;
    multiple?: boolean;
    onChange?: (a, b) => any;
    onConfirm?: (selectedValue: Array<any>) => any;
    onColunmChange?: (selected: any, index: number, columnIdx: number, selectedIdx: any, picker: any) => any;
  }

  interface PickerColumnProps extends Element {
    defaultIndex?: number;
    /** 列数据 */
    items: Array<any>;
    mapKeys?: any;
    /** 列索引 */
    columnIdx?: number;
    onChange?: (selected: any, index: number, columnIdx: number) => any;
    /** 每列每项高度 */
    itemHeight?: number;
    /** 指示器距离顶部的距离 */
    indicatorTop?: number;
    /** 指示器高度 */
    indicatorHeight?: number;
    /** 是否使用动画 */
    animation?: boolean;
  }

  interface PickerCascadeProps extends Element {
    /** 是否显示 */
    show?: boolean;
    /** 数据 */
    data: Array<any>;
    selected?: any;
    dataMap?: { id: string, items: string };
    /** 取消传值 */
    onCancel?: () => any;
    /** 确定传值 */
    onConfirm?: (value: Array<string>) => any;
  }

  interface ToastProps extends React.HTMLProps<HTMLDivElement> {
    show?: boolean;
    duration?: number;
    onClose?: () => any;
    placement?: 'top' | 'bottom' | 'center';
    full?: boolean;
    type?: 'error'
  }

  interface DialogProps extends React.HTMLProps<HTMLDivElement> {
    show?: boolean;
    onClose?: () => any;
    title?: string;
    buttons: Array<{ label, action?}>;
  }

  interface FlexProps extends Element {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';
    alignItems?: 'top' | 'start' | 'middle' | 'center' | 'bottom' | 'end' | 'baseline' | 'stretch';
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
  }
}
