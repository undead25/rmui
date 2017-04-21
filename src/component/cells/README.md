# Cells 单元

## Description

cell利于用户编写小模块易维护代码

## Properties

### Cells

Name | Type | Default | Description
---- | ---- | ---- | ----
className | `string` | "" | 样式
children | `any` | null | 子元素
...other | `any` | null | 其他

### Cell

Name | Type | Default | Description
---- | ---- | ---- | ----
className | `string` | "" | 样式
children | `any` | null | 子元素
...other | `any` | null | 其他

### CellHeader

Name | Type | Default | Description
---- | ---- | ---- | ----
className | `string` | "" | 样式
children | `any` | null | 子元素
...other | `any` | null | 其他

### CellBody

Name | Type | Default | Description
---- | ---- | ---- | ----
className | `string` | "" | 样式
children | `any` | null | 子元素
...other | `any` | null | 其他

### CellFooter

Name | Type | Default | Description
---- | ---- | ---- | ----
className | `string` | "" | 样式
children | `any` | null | 子元素
...other | `any` | null | 其他

### CellTips

Name | Type | Default | Description
---- | ---- | ---- | ----
className | `string` | "" | 样式
children | `any` | null | 子元素
...other | `any` | null | 其他

### CellTitle

Name | Type | Default | Description
---- | ---- | ---- | ----
className | `string` | "" | 样式
children | `any` | null | 子元素
...other | `any` | null | 其他

## Demo

  ```js
  <Cells>
    <Cell>
      <CellTips></CellTips>
      <CellTitle></CellTitle>
      <CellHeader></CellHeader>
      <CellBody></CellBody>
      <CellFooter></CellFooter>
    </Cell>
  </Cells>
  ```