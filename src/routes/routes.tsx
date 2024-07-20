import { HomePage } from '@/pages/homePage';
import { LayoutPage } from '@/pages/layoutPage';
import { LoginPage } from '@/pages/loginPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>,
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);

export default router;
