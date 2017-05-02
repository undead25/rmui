import { injectReducer } from '../../store/reducers';


export default (store: any) => ({
  path: '/input',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./input').default;
      const reducer = require('./input.redux').default;
      injectReducer(store, { key: 'PageInput', reducer });
      cb(null, container);
    }, 'PageInput');
  }
});
