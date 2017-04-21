
// ------------------------------------
// Constants
// ------------------------------------

export const FOOTER_DATA = 'FOOTER/FOOTER_DATA';//生成数据


// ----------------------
// Action
// ----------------------


export const dataRequest = (datalist: any) => ({
    type:FOOTER_DATA,
    datalist
})

// ----------------------
// Reducer
// ----------------------

//生成数据 
export const creatAction = (listData: any) => (dispatch: any) => {
   dispatch(dataRequest(listData))
   
}

//默认初始数据

const initialState = {
  datalist:[{
        value: 'COMMERCIAL_HOUSING',
        label: '商品房'
      },
      {
        value: 'AFFORDABLE_HOUSING',
        label: '经济适用房'
      },
      {
        value: 'COMMERCIAL_RESIDENTIAL',
        label: '商住两用房'
      },
      {
        value: 'HOUSE_DEMOLITION',
        label: '拆迁房'
      },
      {
        value: 'SELF_BUILT_HOUSES',
        label: '自建房'
      },
      {
        value: 'HOMESTEAD',
        label: '宅基地'
      }],
  
}

const footerReducer = (state: any = initialState , action: any) => {
    switch (action.type) {

        case FOOTER_DATA:
        
          // return Object.assign({}, state, {
          //   listData: action.datalist
          // })
          return {
            listData: action.datalist
          }
          
        default :
          return initialState
    }
    
}

export default footerReducer;
