import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Vcode } from '../../../src/component/button';
import { loginAction } from './button.redux';
import { Flex } from '../../../src/component/flex';
class PageButton extends React.Component<any, any> {

  public render(): JSX.Element {
    const { handleLogin, disabled, content, time } = this.props;
    return (
      <div className='hd'>
        <Flex>
          <Button className='btn-black'>测试</Button>
          <Button disabled={true} >禁用</Button>
        </Flex>
        <Button className='btn-primary'>默认按钮(primary)</Button>
        <Button className='btn-orange'>默认按钮(orange)</Button>
        <Button className='btn-black-border'>默认按钮(defalut)</Button>
        <Flex>
          <Button className='btn-syan-border'>默认按钮(waring)</Button>
          <Button className='btn-primary-border'>默认按钮(danger)</Button>
        </Flex>
        <Vcode className='btn-vcode btn-syan' onClick={handleLogin} disabled={disabled} >{content}</Vcode>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  disabled: state.PageButton.disabled,
  content: state.PageButton.content,
  time: state.PageButton.time,
  handleLogin: state.PageButton.handleLogin,
  countFun: state.PageButton.countFun,

});

const mapDispatchToProps = (dispatch: any) => ({
  handleLogin: (time: number) => dispatch(loginAction())
})


export default connect(mapStateToProps, mapDispatchToProps)(PageButton);
