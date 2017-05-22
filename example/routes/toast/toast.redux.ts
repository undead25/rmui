
export const showToastAction = {
  type: 'SHOWTOAST'
};
export const hideToastAction = {
  type: 'HIDETOAST'
};

const initialState = {
  isToastShow: false,
  toastContent: ''
};

const toastReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SHOWTOAST': 
      return {
        ...state,
        isToastShow: true,
        toastContent: '这是一个轻提示！'
      };
    case 'HIDETOAST': 
      return {
        ...state,
        isToastShow: false,
        toastContent: ''
      };
    default:
      return initialState;
  }
};

export default toastReducer;
