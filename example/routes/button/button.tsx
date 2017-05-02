import * as React from 'react';
import { connect } from 'react-redux';

import { Button, Wrapper } from '../../../src/component';

class PageButton extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <div className="hd">
          <h1>Button</h1>
          <p>按钮</p>
        </div>
        <Wrapper size="lg">
          <Button color="primary">主色</Button>
          <Button color="primary" disabled>主色禁用</Button>
          <Button>默认</Button>
          <Button disabled>默认禁用</Button>
          <Button color="blue" round>圆角蓝色</Button>
          <Button color="blue" round disabled>圆角蓝色禁用</Button>
          <Button color="green" outline>线框</Button>
          <Button color="green" outline disabled>线框禁用</Button>
          <br />
          <Button color="cyan" size="sm">小按钮</Button>
          <Button color="green" size="sm" outline>小按钮</Button>
          <br/><br/>
        </Wrapper>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PageButton);
