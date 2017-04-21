import * as React from 'react';
import { Flex, FlexItem } from '../../../src/component/flex';

class PageFlex extends React.Component<any, any> {

  public render(): JSX.Element {
    return (
      <div>
        <Flex >
          <FlexItem>FlexItem</FlexItem>
        </Flex>
        <Flex prefixCls="direction" direction="column" >
          <FlexItem prefixCls="flow">
            FlexItem
          </FlexItem>
        </Flex>

      </div>
    )
  }
}

export default PageFlex;