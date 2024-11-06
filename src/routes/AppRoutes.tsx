// routes.ts
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { MentorList } from '../pages/MentorList';
import { FAQs } from '../pages/FAQs';
import { ToS } from '../pages/Tos';
import { Policy } from '../pages/Policy';
import { NotFound } from '../pages/NotFound';
import { Contribute } from '../pages/Contribute';
import { Dashboard, Overview, Users, Transaction, Settings, MyCalendar } from '../pages/Dashboard';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/mentors', element: <MentorList /> },
  { path: '/FAQs', element: <FAQs /> },
  { path: '/ToS', element: <ToS /> },
  { path: '/Policy', element: <Policy /> },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      { path: 'overview', element: <Overview /> },
      { path: 'user-list', element: <Users /> },
      { path: 'transactions', element: <Transaction /> },
      { path: 'settings', element: <Settings /> },
      { path: 'calendar', element: <MyCalendar /> },
    ]
  },
  { path: '/contribute', element: <Contribute /> },
  { path: '*', element: <NotFound /> },
];

export default routes;
