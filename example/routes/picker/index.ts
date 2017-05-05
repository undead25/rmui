import { injectReducer } from '../../store/reducers';


export default (store: any) => ({
  path: '/picker',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./picker').default;
      const reducer = require('./picker.redux').default;
      injectReducer(store, { key: 'PagePicker', reducer });
      cb(null, container);
    }, 'PagePicker');
  }
});
