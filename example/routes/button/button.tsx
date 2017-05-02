import * as React from 'react';
import { connect } from 'react-redux';

import { Button, Wrapper } from '../../../src/component';

class PageButton extends React.Component<any, any> {
  public render(): JSX.Element {
    const { handleLogin, disabled, content, time } = this.props;
    return (
      <div>
        <div className="hd">
          <h1>Button</h1>
          <p>按钮</p>
        </div>
        <Wrapper size="lg">
          <Button className="btn-primary">主色</Button>
          <Button className="btn-primary" disabled>主色禁用</Button>
          <Button>默认</Button>
          <Button className="btn-blue btn-round">圆角蓝色</Button>
          <Button className="btn-blue btn-round" disabled>圆角蓝色禁用</Button>
          <Button disabled>默认禁用</Button>
          <Button className="btn-primary btn-outline">线框</Button>
          <Button className="btn-primary btn-outline" disabled>线框禁用</Button>
          <br />
          <Button className="btn-primary btn-sm">小按钮</Button>
          <Button className="btn-green btn-outline btn-sm">小按钮</Button>
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
