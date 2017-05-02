import PageButton from './button';
import PageList from './list';
import Home from './home';
import Layout from './layout';

export const Routes = (store: any) => ({
  path: '/',
  indexRoute: {
    component: Home
  },
  component: Layout,
  childRoutes: [
    PageButton(store),
    PageList(store)
  ]
});

export default Routes;
