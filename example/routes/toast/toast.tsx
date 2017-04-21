import * as React from 'react';
import { connect } from 'react-redux';
import { Toast } from '../../../src/component/toast';
import { Mask } from '../../../src/component/mask';
import { autoCloseAction } from './toast.redux';

class PageToast extends React.Component<any, any> {

  public render(): JSX.Element {
    const { message, open } = this.props;
    return (
      <Toast>
        <div>
          {open &&
            <div>
              <Mask transparent />
              <div className="toast">
                <div className="toast-content">{message}</div>
              </div>
            </div>
          }
        </div>
      </Toast>
    )
    
  }

   componentDidMount(){
      this.props.autoClose()
   }
 
}

const mapStateToProps = (state: any) => ({
  message: state.PageToast.message,
  open: state.PageToast.open
})

const mapDispatchToProps = (dispatch: any) => ({
  autoClose: () => dispatch(autoCloseAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(PageToast);