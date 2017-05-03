import * as React from 'react';
import { connect } from 'react-redux';

import { List, Input } from '../../../src/component';

import { phoneChangeAction, bankcardChangeAction } from './input.redux';

class PageInput extends React.Component<any, any> {
  public render(): JSX.Element {
    const { phone, bankcard, phoneChange, bankcardChange } = this.props;
    return (
      <div>
        <div className="hd">
          <h1>Input</h1>
          <p>表单输入</p>
        </div>
        <div className="bd">
          <List renderHeader={() => '基本'}>
            <Input placeholder="用户名">用户名</Input>
          </List>
          <List renderHeader={() => '受控/非受控'}>
            <Input value="受控" onBlur={this.handleBlur} onFocus={this.handleFocus}>受控</Input>
            <Input defaultValue="非受控" onBlur={this.handleBlur} onFocus={this.handleFocus}>非受控</Input>
          </List>
          <List renderHeader={() => '无标签'}>
            <Input placeholder="请输入用户名" />
          </List>
          <List renderHeader={() => '格式带清除按钮'}>
            <Input type="phone" value={phone} onChange={phoneChange} placeholder="手机号码" clear>手机</Input>
            <Input type="bankcard" value={bankcard} onChange={bankcardChange} placeholder="银行卡号" clear>银行卡</Input>
            <Input type="password" placeholder="密码">密码</Input>
            <Input type="number" placeholder="数字键盘">数字</Input>
            <Input type="date" onBlur={this.handleDateBlur}>日期</Input>
            <Input type="datetime-local" onBlur={this.handleDateBlur}>时间</Input>
          </List>
          <List renderHeader={() => '后缀'}>
            <Input placeholder="金额" type="number" suffix="元">人民币</Input>
          </List>
          <List renderHeader={() => '禁用'}>
            <Input readOnly value="只读内容">只读</Input>
            <Input value="禁用内容" disabled>禁用</Input>
            <Input placeholder="placeholder" disabled>禁用</Input>
          </List>
        </div>
      </div>
    );
  }

  private handleDateBlur = (value: string) => {
    // alert(`你选择的是：${value}`);
    console.log(`你选择的是：${value}`);
  }

  private handleBlur = (value: string) => {
    console.log(`失焦事件：value = ${value}`);
  }

  private handleFocus = (value: string) => {
    console.log(`聚焦事件：value = ${value}`);
  }
}

const mapStateToProps = (state: any) => ({
  phone: state.PageInput.phone,
  bankcard: state.PageInput.bankcard
});

const mapDispatchToProps = (dispatch: any) => ({
  phoneChange: (phone: string) => dispatch(phoneChangeAction(phone)),
  bankcardChange: (bankcard: string) => dispatch(bankcardChangeAction(bankcard))
});

export default connect(mapStateToProps, mapDispatchToProps)(PageInput);
