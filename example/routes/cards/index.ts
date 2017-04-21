import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
  path: '/cards',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./cards').default;
      // const reducer = require('./cards.redux').default;
      // injectReducer(store, { key: 'PageCard', reducer })
      cb(null, container)
    }, 'PageCard')
  }
})