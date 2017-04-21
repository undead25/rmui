import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
  path: '/space',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./space').default;
      // const reducer = require('./cards.redux').default;
      // injectReducer(store, { key: 'PageCard', reducer })
      cb(null, container)
    }, 'PageSpace')
  }
})