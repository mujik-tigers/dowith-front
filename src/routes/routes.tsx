import { AuthRedirectPage } from '@/pages/auth-redirect-page';
import { HomePage } from '@/pages/home-page';
import { LayoutPage } from '@/pages/layout-page';
import { LoginPage } from '@/pages/login-page';
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
      { path: '/oauth/redirect', element: <AuthRedirectPage /> },
    ],
  },
]);

export default router;
