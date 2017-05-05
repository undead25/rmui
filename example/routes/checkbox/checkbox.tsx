import * as React from 'react';
import { connect } from 'react-redux';

import { List, Checkbox } from '../../../src/component';
import { check1ChangeAction } from './checkbox.redux';

class PageCheckbox extends React.Component<any, any> {
  public render(): JSX.Element {
    const { check1, onCheck1Change } = this.props;
    return (
      <div>
        <div className="hd">
          <h1>Checkbox</h1>
          <p>复选框</p>
        </div>
        <div className="bd">
          <List renderHeader={() => '基本样式'}>
            <Checkbox checked={check1} onChange={onCheck1Change}>选项一（受控）</Checkbox>
            <Checkbox onChange={this._onChange}>选项二</Checkbox>
            <Checkbox onChange={this._onChange} defaultChecked>默认选中</Checkbox>
          </List>
          <List renderHeader={() => '禁用'}>
            <Checkbox disabled>禁用</Checkbox>
            <Checkbox disabled checked>选中禁用</Checkbox>
          </List>
        </div>
      </div>
    );
  }

  private _onChange = (e) => {
    console.log(e);
  }
}

const mapStateToProps = (state: any) => ({
  check1: state.PageCheckbox.check1
});

const mapDispatchToProps = (dispatch: any) => ({
  onCheck1Change: (e) => dispatch(check1ChangeAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageCheckbox);
