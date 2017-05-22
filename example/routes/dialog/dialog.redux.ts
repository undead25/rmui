
export const showDialogAction = {
  type: 'SHOWDIALOG'
};
export const hideDialogAction = {
  type: 'HIDEDIALOG'
};

const initialState = {
  isDialogShow: false,
};

const dialogReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SHOWDIALOG': 
      return {
        ...state,
        isDialogShow: true,
      };
    case 'HIDEDIALOG': 
      return {
        ...state,
        isDialogShow: false,
      };
    default:
      return initialState;
  }
};

export default dialogReducer;
