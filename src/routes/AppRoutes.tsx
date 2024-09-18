// routes.ts
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';

const routes = [
  { path: '/', element: Home },
  { path: '/about', element: About },
  { path: '/login', element: Login},
  { path: '*', element: NotFound },
];

export default routes;