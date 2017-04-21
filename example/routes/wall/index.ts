import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
  path: '/wall',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./wall').default;
      // const reducer = require('./cards.redux').default;
      // injectReducer(store, { key: 'PageCard', reducer })
      cb(null, container)
    }, 'PageWall')
  }
})