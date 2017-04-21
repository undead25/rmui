import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
  path: '/footer',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./footer').default;
      const reducer = require('./footer.redux').default;
      injectReducer(store, { key: 'PageFooter', reducer })
      cb(null, container)
    }, 'PageFooter')
  }
})