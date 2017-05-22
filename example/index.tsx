import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import * as Perf from 'react-addons-perf';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import App from './app';
// if (process.env.NODE_ENV === 'development') {
//   window['Perf'] = Perf;
// }


const store = configureStore();
const rootElement = document.getElementById('app');
const routes = require('./routes/index').default(store);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} routes={routes}/>
    </AppContainer>,
    rootElement
  );
}

render(App);

const { hot } = module as any;
if (hot) {
  hot.accept('./app', () => { render(App); });
}