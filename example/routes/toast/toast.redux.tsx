
export const CHANGE_STATE = 'TOAST/CHANGE_STATE';


export const toastRequest = {
  type:CHANGE_STATE
}

const initialState = {
  open: false,
  message: '',
  duration: 2000,
  onRequestClose:{}
}


export const autoCloseAction = () => (dispatch: any) => {
  const duration = initialState.duration ;
  // console.log(1)
  if(duration && duration>0){
    const toastFunc = setInterval(() => {
      if(open !== null){
        dispatch(toastRequest)
      }else{
         
        
      }
    },duration)
  }
}

// ----------------------
// Reducer
// ----------------------

const toastReducer = (state: any = initialState ,action: any) => {
    switch(action.type) {

      case CHANGE_STATE:
        return {
          open:true
        }
      default :
        return initialState

    }
}

export default toastReducer;