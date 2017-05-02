import * as React from 'react';
import { connect } from 'react-redux';

import { List, Input } from '../../../src/component';

class PageInput extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <div className="hd">
          <h1>Input</h1>
          <p>表单输入</p>
        </div>
        <div className="bd">
          <List renderHeader={()=>'基本'}>
            <Input placeholder="用户名">用户名</Input>
            <Input type="password" placeholder="密码">密码</Input>
          </List>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PageInput);
