import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, Router } from 'react-router';

import './example.scss';
import '../src/component/styles/index.scss';

export default class App extends React.Component<any, any> {
  public shouldComponentUpdate(): boolean {
    return false;
  }

  public render(): JSX.Element {
    const { routes, store } = this.props;

    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
}