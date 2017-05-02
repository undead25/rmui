import { injectReducer } from '../../store/reducers';


export default (store: any) => ({
  path: '/list',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./list').default;
      const reducer = require('./list.redux').default;
      injectReducer(store, { key: 'PageList', reducer });
      cb(null, container);
    }, 'PageList');
  }
});
