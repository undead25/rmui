import * as React from 'react';
import { connect } from 'react-redux';
import { Alert, Loading, Dialog } from '../../../src/component/dialog';
import { Button } from '../../../src/component/button'
import { Flex } from '../../../src/component/flex'
import { openAction, closeAction ,loadAction ,closeloadingAction} from './dialog.redux';

class PageDialog extends React.Component<any, any> {

  public render(): JSX.Element {
    const { openClick, open, title, content, closeClick, disable, image='', tips='loading', loadingopen,loadingclose } = this.props;
    return (
      <div>
        <Alert style={{ display: open ? 'block' : 'none' }} >
          <div className="dialog">

            <div className="dialog-hd">
              <strong className="dialog-title">{title}</strong>
            </div>
            <div className="dialog-bd">
              {content}
            </div>
            <div className='dialog-ft'>
              <Button className='dialog-btn btn-primary' onClick={closeClick}>关闭</Button>
            </div>
          </div>
        </Alert>
        <Flex>
          <Button className='btn-syan-border ' onClick={openClick}>alert</Button>
          <Button className='btn-blue-border ' onClick={loadingopen}>loading</Button>
          {/*<Button className='btn-syan-border ' onClick={openClick}>confirm</Button>*/}
        </Flex>

        <Loading style={{ display: disable ? 'block' : 'none' }}>
          <div className="loading" >
            <div className="loading-wrap">
              <div className="loading-img">
                <img src={image} alt="" />
              </div>
              <div className="loading-word">
                {tips}
              </div>
               <button onClick={loadingclose}>关闭</button>
            </div>
           
          </div>
         
        </Loading>

      </div>

    )
  }
}

const mapStateToProps = (state: any) => ({
  open: state.PageDialog.open,
  title: state.PageDialog.title,
  disable: state.PageDialog.disable,
  // handleClick: state.PageDialog.handleClick
})

const mapDispatchToProps = (dispatch: any) => ({
  openClick: () => dispatch(openAction()),
  closeClick: () => dispatch(closeAction()),
  loadingopen: () => dispatch(loadAction()),
  loadingclose: () => dispatch(closeloadingAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(PageDialog);
