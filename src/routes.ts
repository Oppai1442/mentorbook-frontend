// routes.ts
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';

const routes = [
  { path: '/', element: Home },
  { path: '/about/ehe', element: About },
  { path: '*', element: NotFound },
];

export default routes;