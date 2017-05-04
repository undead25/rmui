import Home from './home';
import Layout from './layout';
import PageButton from './button';
import PageList from './list';
import PageInput from './input';
import PageCheckbox from './checkbox';

export const Routes = (store: any) => ({
  path: '/',
  indexRoute: {
    component: Home
  },
  component: Layout,
  childRoutes: [
    PageButton(store),
    PageList(store),
    PageInput(store),
    PageCheckbox(store)
  ]
});

export default Routes;
