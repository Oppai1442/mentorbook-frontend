// routes.ts
import About from '../components/About';
import Home from '../components/Home';
import NotFound from '../components/NotFound';

const routes = [
  { path: '/', element: Home },
  { path: '/about', element: About },
  { path: '*', element: NotFound },
];

export default routes;