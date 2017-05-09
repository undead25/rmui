
export const showDistrictAction = {
  type: 'SHOWDISTRICT'
};

export const hideDistrictAction = {
  type: 'HIDEDISTRICT'
};

export const showCitiesAction = {
  type: 'SHOWCITIES'
};


export const districtConfirmAction = (selected) => ({
  type: 'DISTRICTCONFIRM',
  selected
});

const initialState = {
  isDistrictShown: false,
  isCitiesShown: false,
  // districtSelected: {label: '广东省', value: 'gd'},
};

const pickerReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SHOWDISTRICT':
      return {
        ...state,
        isDistrictShown: true
      };
    case 'SHOWCITIES':
      return {
        ...state,
        isCitiesShown: true
      };
    case 'HIDEDISTRICT':
      return {
        ...state,
        isDistrictShown: false
      };
    case 'DISTRICTCONFIRM': return {
      ...state,
      isDistrictShown: false,
      districtSelected: action.selected
    };
    default:
      return initialState;
  }
};

export default pickerReducer;
