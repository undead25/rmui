import PageButton from './button';
import PageCard from './cards';
import PageCell from './cells';
import PageDialog from './dialog';
import PageFlex from './flex';
import PageIcon from './icon';
import PageFooter from './footer';
import PageWrap from './page';
import PageWall from './wall';
import PageSpace from './space';
import PageToast from './toast';
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
    PageCard(store),
    PageCell(store),
    PageDialog(store),
    PageFlex(store),
    PageIcon(store),
    PageFooter(store),
    PageWrap(store),
    PageWall(store),
    PageSpace(store),
    PageToast(store)
  ]
});

export default Routes;
