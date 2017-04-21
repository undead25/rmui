
import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
  path: '/page',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./page').default;
      // const reducer = require('./cards.redux').default;
      // injectReducer(store, { key: 'PageCard', reducer })
      cb(null, container)
    }, 'PageWrap')
  }
})