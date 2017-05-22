import Home from './home';
import Layout from './layout';
import PageButton from './button';
import PageList from './list';
import PageInput from './input';
import PageCheckbox from './checkbox';
import PageRadio from './radio';
import PagePicker from './picker';
import PageToast from './toast';
import PageDialog from './dialog';
import PageFlex from './flex';

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
    PageCheckbox(store),
    PageRadio(store),
    PagePicker(store),
    PageToast(store),
    PageDialog(store),
    PageFlex(store),
  ]
});

export default Routes;
