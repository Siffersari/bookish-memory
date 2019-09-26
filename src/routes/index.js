import HomeView from '../containers/Home';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: HomeView,
    exact: true,
    protected: false,
  },
];

export default routes;
