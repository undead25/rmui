
/**
   * @description 默认属性
   * @param {array} buttons - 按钮数组
   * @param {bool} open - alert弹框打开布尔值
   * @param {string} title - 标题
   */





// ------------------------------------
// Constants 定义常量
// ------------------------------------

export const INITIAL_STATE = 'DIALOG/INITIAL_STATE'; //初始状态
export const ALERT_SHOW = 'DIALOG/ALERT_SHOW';//Alert点击打开状态
export const ALERT_HIDE = 'DIALOG/ALERT_HIDE';//Alert点击关闭状态
export const LOADING_SHOW = 'DIALOG/LOADING_SHOW';//Loading 打开状态
export const LOADING_HIDE = 'DIALOG/LOADING_HIDE';//Loading 关闭状态

// ----------------------
// Action
// ----------------------

//未启动状态
export const initialStatus = {
  type: INITIAL_STATE
}

//点击状态

export const alertShow = {

  type: ALERT_SHOW,

}

export const loadingShow = {

  type: LOADING_SHOW,

}

//关闭状态

export const alertHide = {

  type: ALERT_HIDE,

}

export const loadingHide = {

  type: LOADING_HIDE,

}




// ----------------------
// Reducer
// ----------------------

//点击打开
export const openAction = () => (dispatch: any) => {
  dispatch(alertShow);
}

export const loadAction = () => (dispatch: any) => {
  dispatch(loadingShow)
}
//点击关闭

export const closeAction = () => (dispatch: any) => {
  dispatch(alertHide)
}

export const closeloadingAction =() => (dispatch: any) => {
  dispatch(loadingHide)
}




//默认初始
const initialState = {
  button: [],
 disable:false,
  title: '',
  open: false,
}

const dialogReducer = (state: any = initialState, action: any) => {

  switch (action.type) {
    case INITIAL_STATE:
      return {
        ...state,
        open:false,
        disable:false
      }
    case ALERT_SHOW:
      return {
        ...state,
        open: true,
        title: '弹窗Alert',
        button: ['button']
      }
    
    case LOADING_SHOW:
      return {
        ...state,
        disable:true
      }
    case ALERT_HIDE:
      return {
        ...state,
        open: false,
        
      }
    
    case LOADING_HIDE:
      return {
        ...state,
        disable: false
      }
    default:
      return {
        ...state
      }
  }
}

export default dialogReducer;
