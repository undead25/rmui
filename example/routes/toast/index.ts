import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
  path: '/toast',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./toast').default;
      const reducer = require('./toast.redux').default;
      injectReducer(store, { key: 'PageToast', reducer })
      cb(null, container)
    }, 'PageToast')
  }
})