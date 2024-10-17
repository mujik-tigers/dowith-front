import { AuthRedirectPage } from '@/pages/auth-redirect-page';
import { HomePage } from '@/pages/home-page';
import { LayoutPage } from '@/pages/layout-page';
import { LoginPage } from '@/pages/login-page';
import { UserAppNameSetupPage } from '@/pages/user-app-name-setup-page';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      { path: '/oauth/redirect', element: <AuthRedirectPage /> },
      { path: '/setup/app-name', element: <UserAppNameSetupPage /> },
    ],
  },
]);

export default router;
