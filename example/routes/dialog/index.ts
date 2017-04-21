import { injectReducer } from '../../store/reducers'


export default (store: any) => ({
  path: '/dialog',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./dialog').default;
      const reducer = require('./dialog.redux').default;
      injectReducer(store, { key: 'PageDialog', reducer })
      cb(null, container)
    }, 'PageDialog')
  }
})