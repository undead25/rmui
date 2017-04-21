import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import makeRootReducer from './reducers';
import { browserHistory } from 'react-router';
import { updateLocation } from './location';

// const persistState = require('redux-localstorage');
const configureStore = (initialState: any = {}) => {
  const { hot } = module as any;
  const environment: any = window || this;

  const store:any = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(thunk),
      // 开发环境下给 redux 配置开发工具
      process.env.NODE_ENV === 'development' && environment.__REDUX_DEVTOOLS_EXTENSION__ ?
        environment.__REDUX_DEVTOOLS_EXTENSION__() :
        f => f
    )
  )
  store.asyncReducers = {}
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store));

  // 支持webpack reducer 热替换
  if (hot) {
    hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers(store.asyncReducers));
    })
  }

  return store;
}

export default configureStore;
