
export const showDistrictAction = {
  type: 'SHOWDISTRICT'
};

export const hideDistrictAction = {
  type: 'HIDEDISTRICT'
};

export const hideCitiesAction = {
  type: 'HIDECITIES'
};

export const showCitiesAction = {
  type: 'SHOWCITIES'
};


export const districtConfirmAction = (selected) => (dispatch) => {
  console.log(selected)
  dispatch({
    type: 'DISTRICTCONFIRM',
    selected
  });
};

export const citiesConfirmAction = (selected) => (dispatch) => {
  console.log(selected)
  dispatch({
    type: 'CITIESCONFIRM',
    selected: selected.join(',')
  });
}


export const districtConfirmAction2 = (selected) => ({
  type: 'DISTRICTCONFIRM2',
  selected
});


const initialState = {
  isDistrictShown: false,
  isCitiesShown: false,
  districtSelected: null,
  citiesSelected: null,
  defaultDistrict: ['gd']
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

    case 'HIDECITIES':
      return {
        ...state,
        isCitiesShown: false
      };

    case 'DISTRICTCONFIRM':
      return {
        ...state,
        isDistrictShown: false,
        districtSelected: action.selected
      };

    case 'CITIESCONFIRM':
      return {
        ...state,
        isCitiesShown: false,
        citiesSelected: action.selected
      };

    case 'DISTRICTCONFIRM2':
      return {
        ...state,
        isDistrictShown: false,
        districtSelected2: action.selected
      };

    default:
      return initialState;
  }
};

export default pickerReducer;
