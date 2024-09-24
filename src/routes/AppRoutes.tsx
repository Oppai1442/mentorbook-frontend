// routes.ts
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Auth } from '../pages/Auth';
import { Contact } from '../pages/Contact';
import { MentorList } from '../pages/MentorList';
import { FAQs } from '../pages/FAQs';
import { NotFound } from '../pages/NotFound';

const routes = [
  { path: '/', element: Home },
  { path: '/about', element: About },
  { path: '/auth', element: Auth },
  { path: '/contact', element: Contact },
  { path: '/mentors', element: MentorList },
  { path: '/FAQs', element: FAQs },
  { path: '*', element: NotFound },
];

export default routes;