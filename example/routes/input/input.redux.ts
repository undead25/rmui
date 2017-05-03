// Constants
export const PHONECHANGE = 'PHONECHANGE';
export const BANKCARDCHANGE = 'BANKCARDCHANGE';

// Action
const phoneChange = (phone: string) => ({
  type: PHONECHANGE,
  phone
});

export const phoneChangeAction = (phone: string) => (dispatch) => {
  let trimmedPhone = phone.replace(/\s/g, ''); // 去掉空格后的手机号码
  dispatch(phoneChange(phone));
};

const bankcardChange = (bankcard: string) => ({
  type: BANKCARDCHANGE,
  bankcard
});

export const bankcardChangeAction = (bankcard: string) => (dispatch) => {
  let trimmedBankcard = bankcard.replace(/\s/g, ''); // 去掉空格后的银行卡号
  dispatch(bankcardChange(bankcard));
};


// Reducer
const initialState = {
  phone: '',
  bankcard: ''
};

const inputReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case PHONECHANGE:
      return {
        ...state,
        phone: action.phone
      };
    case BANKCARDCHANGE:
      return {
        ...state,
        bankcard: action.bankcard
      };
    default:
      return initialState;
  }
};

export default inputReducer;
