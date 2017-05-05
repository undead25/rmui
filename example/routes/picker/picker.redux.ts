export const SHOWDISTRICT = 'SHOWDISTRICT';
export const check1Change = (value) => ({
  type: SHOWDISTRICT
});

export const showDistrictAction = () => (dispatch) => {

};



const initialState = {
  isDistrictShown: false
};

const pickerReducer = (state: any, action: any) => {
  switch (action.type) {
    case SHOWDISTRICT:
      return {
        isDistrictShown: true
      };
    default:
      return initialState;
  }
};

export default pickerReducer;
