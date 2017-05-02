import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hashHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import '../src/component/styles/index.scss';
import './example.scss';

class App extends React.Component<any, any> {
  public shouldComponentUpdate(): boolean {
    return false;
  }

  public render(): JSX.Element {
    const { routes, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={hashHistory} children={routes} />
      </Provider>
    );
  }
}

const store = configureStore();
const rootElement = document.getElementById('app');
const routes = require('./routes/index').default(store);

ReactDOM.render(
  <App store={store} routes={routes} />,
  rootElement
);
