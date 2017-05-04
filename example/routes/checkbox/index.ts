import { injectReducer } from '../../store/reducers';


export default (store: any) => ({
  path: '/checkbox',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./checkbox').default;
      const reducer = require('./checkbox.redux').default;
      injectReducer(store, { key: 'PageCheckbox', reducer });
      cb(null, container);
    }, 'PageCheckbox');
  }
});
