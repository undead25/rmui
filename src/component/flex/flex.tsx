import * as React from 'react';
import * as classNames from 'classnames';

import './flex.scss';

export default function Flex(props: MUI.FlexProps) {
  const {
    prefix = 'mui-flex',
    direction,
    wrap,
    justify,
    alignItems,
    alignContent,
    className,
    children,
    ...others
  } = props;

  const cls = classNames({
    [prefix as string]: true,
    [className as string]: className,

    // flex-direction 主轴(X)方向
    [`${prefix}-row`]: direction === 'row', // 主轴为水平方向，起点在左端
    [`${prefix}-row-reverse`]: direction === 'row-reverse',  // 主轴为水平方向，起点在右端
    [`${prefix}-column`]: direction === 'column', // 主轴为垂直方向，起点在上沿
    [`${prefix}-column-reverse`]: direction === 'column-reverse', // 主轴为垂直方向，起点在下沿

    // flex-wrap 一条轴线排不下，如何换行
    [`${prefix}-nowrap`]: wrap === 'nowrap', // 不换行
    [`${prefix}-wrap`]: wrap === 'wrap', // 换行，第一行在上方
    [`${prefix}-wrap-reverse`]: wrap === 'wrap-reverse', // 换行，第一行在下方

    // justify-content 项目在主轴上的对齐方式
    [`${prefix}-justify-start`]: justify === 'start', // 左对齐
    [`${prefix}-justify-end`]: justify === 'end', // 右对齐
    [`${prefix}-justify-center`]: justify === 'center', // 居中
    [`${prefix}-justify-between`]: justify === 'between', // 两端对齐，项目之间的间隔都相等
    [`${prefix}-justify-around`]: justify === 'around', // 项目之间的间隔比项目与边框的间隔大一倍

    // align-items 交叉轴(Y)上如何对齐
    [`${prefix}-align-top`]: alignItems === 'top' || alignItems === 'start', // 交叉轴的起点对齐
    [`${prefix}-align-middle`]: alignItems === 'middle' || alignItems === 'center', // 交叉轴的中点对齐
    [`${prefix}-align-bottom`]: alignItems === 'bottom' || alignItems === 'end', // 交叉轴的终点对齐
    [`${prefix}-align-baseline`]: alignItems === 'baseline', // 项目的第一行文字的基线对齐
    [`${prefix}-align-stretch`]: alignItems === 'stretch', // 如果项目未设置高度或设为auto，将占满整个容器的高度

    // align-content 多根轴线的对齐方式
    [`${prefix}-align-content-start`]: alignContent === 'start', // 与交叉轴的起点对齐
    [`${prefix}-align-content-end`]: alignContent === 'end', // 与交叉轴的终点对齐
    [`${prefix}-align-content-center`]: alignContent === 'center', // 与交叉轴的中点对齐
    [`${prefix}-align-content-between`]: alignContent === 'between', // 与交叉轴两端对齐，轴线之间的间隔平均分布
    [`${prefix}-align-content-around`]: alignContent === 'around', // 轴线之间的间隔比轴线与边框的间隔大一倍
    [`${prefix}-align-content-stretch`]: alignContent === 'stretch', // 轴线占满整个交叉轴
  });

  return (
    <div className={cls} {...others}>
      {children}
    </div>
  );
}
