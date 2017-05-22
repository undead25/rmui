import * as React from 'react';
import { connect } from 'react-redux';

import { Toast, Wrapper, Button } from '../../../src/component';
import { showToastAction, hideToastAction } from './toast.redux';

function PageToast(props: any) {
  return (
    <div>
      <div className="hd">
        <h1>Toast</h1>
        <p>轻提示</p>
      </div>
      <Wrapper size="lg">
        <Button color="blue" onClick={props.handleToast}>基本</Button>
      </Wrapper>
      <Toast
        show={props.isToastShow}
        placement="top"
        full={true}
        type="error"
        onClose={props.handleToastClose}
      >
        {props.toastContent}
      </Toast>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  isToastShow: state.PageToast.isToastShow,
  toastContent: state.PageToast.toastContent
});

const mapDispatchToProps = (dispatch: any) => ({
  handleToast: () => dispatch(showToastAction),
  handleToastClose: () => dispatch(hideToastAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(PageToast);
