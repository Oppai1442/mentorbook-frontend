// routes.ts
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Auth } from '../pages/Auth';
import { NotFound } from '../pages/NotFound';

const routes = [
  { path: '/', element: Home },
  { path: '/about', element: About },
  { path: '/auth', element: Auth},
  { path: '*', element: NotFound },
];

export default routes;