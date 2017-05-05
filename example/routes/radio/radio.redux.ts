
export const CHANGE = 'CHANGE';
export const check1Change = (value) => ({
  type: CHANGE,
  value
});

export const check1ChangeAction = (e) => (dispatch) => {
  dispatch(check1Change(e.target.checked));
}

const initialState = {
  check1: false
};

const checkboxReducer = (state: any, action: any) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        check1: action.value
      }
    default:
      return initialState;
  }
};

export default checkboxReducer;
