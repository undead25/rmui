import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
  path: '/flex',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./flex').default;
      // const reducer = require('./cards.redux').default;
      // injectReducer(store, { key: 'PageCard', reducer })
      cb(null, container)
    }, 'PageFlex')
  }
})