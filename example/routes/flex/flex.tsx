import * as React from 'react';
import { Wrapper, Flex, FlexItem } from '../../../src/component';
export default function PageFlex(props: any) {
  return (
    <div>
      <div className="hd">
        <h1>Flex</h1>
        <p>Flex 布局</p>
      </div>
      <Wrapper size="lg">
        <Flex direction="row"><FlexItem className="flex-item">item</FlexItem></Flex>
        <Flex wrap="nowrap">
          <FlexItem className="flex-item">item</FlexItem>
          <FlexItem className="flex-item">item</FlexItem>
          <FlexItem className="flex-item">item</FlexItem>
        </Flex>
      </Wrapper>
    </div>
  );
}
