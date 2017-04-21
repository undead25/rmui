import { combineReducers } from 'redux';
import locationReducer from './location'

/**
 * 生成reducer
 * @param {any} asyncReducers 异步reducer
 */
export const makeRootReducer = (asyncReducers?: any) => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers,
  })
}

/**
 * 为每个路由动态插入reducer
 * @param {any} store Store对象
 * @param {any} key: state对象的key, reducer: 插入的reducer  
 */
export const injectReducer = (store:any, { key, reducer }: any) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer;
