/**
   * @description 定义默认props
   * @param {bool} disabled - 是否可点击
   * @param {number} time - 显示时间（默认为秒）
   * @param {string} content - 按钮文字
   */

// ------------------------------------
// Constants
// ------------------------------------

export const SENDING_REQUEST = 'LOGIN/SENDING_REQUEST'; // 请求中
export const SENDCODE_ING = 'LOGIN/SENDCODE_ING';//发送验证码中
export const SENDING_DONE = 'LOGIN/SENDING_DONE'; // 请求完成
export const INITIAL_STATE = 'LOGIN/INITIAL_STATE'; // 初始状态

// ----------------------
// Action
// ----------------------

//验证码请求
export const loginRequest = {
  type: SENDING_REQUEST
}

//请求完成
export const loginDONE = {
  type: SENDING_DONE
}
//初始状态
export const initialStatus = {
  type: INITIAL_STATE
}

// 发送验证码倒计时
export const codeSending = (COUNTTIME: any) => ({
  type: SENDCODE_ING,
  COUNTTIME

})

// ----------------------
// Reducer
// ----------------------

export const loginAction = () => (dispatch: any) => {
  dispatch(loginRequest);
  let time = 60;
  const countFun = setInterval(() => {
    console.log(countFun);
    if (time <= 0) {
      clearInterval(countFun);
      
      dispatch(loginDONE);
    } else {
      time--;
      console.log(codeSending({ time }))
      dispatch(codeSending({ time }))
    }
  }, 1000)
}


const initialState = {
  disabled: false,
  content: '获取验证码',
  countFun: {},

}


const loginReducer = (state: any = initialState, action: any) => {

  switch (action.type) {
    case INITIAL_STATE:
      return {
        ...state,
        disabled: false,
      }
    case SENDING_REQUEST:
      return {
        ...state,
        disabled: true,
      }

    case SENDCODE_ING:
      return {
        ...state,
        disabled: true,
        content: action.COUNTTIME.time

      }
    case SENDING_DONE:
      return {
        ...state,
        content: '再次获取验证码',
        disabled: false,
      }
    default:
      return initialState
  }
}


export default loginReducer;