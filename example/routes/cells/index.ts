import { injectReducer } from '../../store/reducers'

export default (store: any) => ({
  path: '/cells',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const container = require('./cells').default;
      cb(null, container)
    }, 'PageCell')
  }
})