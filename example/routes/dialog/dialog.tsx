import * as React from 'react';
import { connect } from 'react-redux';

import { Dialog, Wrapper, Button } from '../../../src/component';
import { showDialogAction, hideDialogAction } from './dialog.redux';

function PageDialog(props: any) {
  const dialogBtns = [
    {label: '取消', action: props.handleDialogClose},
    {label: '确定', action: props.handleDialogClose}
  ];

  return (
    <div>
      <div className="hd">
        <h1>Dialog</h1>
        <p>对话框</p>
      </div>
      <Wrapper size="lg">
        <Button color="blue" onClick={props.handleDialog}>基本</Button>
      </Wrapper>
      <Dialog show={props.isDialogShow} buttons={dialogBtns} title="提示">
        确定要删除吗？
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  isDialogShow: state.PageDialog.isDialogShow,
});

const mapDispatchToProps = (dispatch: any) => ({
  handleDialog: () => dispatch(showDialogAction),
  handleDialogClose: () => dispatch(hideDialogAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(PageDialog);
