import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
  path: '/icon',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./icon').default;
      // const reducer = require('./cards.redux').default;
      // injectReducer(store, { key: 'PageCard', reducer })
      cb(null, container)
    }, 'PageIcon')
  }
})