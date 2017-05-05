import { injectReducer } from '../../store/reducers';


export default (store: any) => ({
  path: '/radio',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./radio').default;
      const reducer = require('./radio.redux').default;
      injectReducer(store, { key: 'PageRadio', reducer });
      cb(null, container);
    }, 'PageRadio');
  }
});
