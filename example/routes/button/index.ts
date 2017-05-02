import { injectReducer } from '../../store/reducers';


export default (store: any) => ({
  path: '/button',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./button').default;
      const reducer = require('./button.redux').default;
      injectReducer(store, { key: 'PageButton', reducer });
      cb(null, container);
    }, 'PageButton');
  }
});
