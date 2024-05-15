import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import MainLayout from 'src/layouts/main';
import CompactLayout from 'src/layouts/compact';
import AuthClassicLayout from 'src/layouts/auth/classic';

import { ModernVerifyView } from 'src/sections/auth-demo/modern';

// import { PATH_AFTER_LOGIN } from 'src/config-global';
import { authDemoRoutes } from './auth-demo';
import { HomePage, mainRoutes } from './main';
import { dashboardRoutes } from './dashboard';
import { componentsRoutes } from './components';

const LoginClassicPage = lazy(() => import('src/pages/auth-demo/classic/login'));
// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // SET INDEX PAGE WITH SKIP HOME PAGE
    // {
    //   path: '/',
    //   element: <Navigate to={PATH_AFTER_LOGIN} replace />,
    // },

    // ----------------------------------------------------------------------

    // SET INDEX PAGE WITH HOME PAGE
    {
      path: '/',
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },

    // Auth routes
    // ...authRoutes,
    ...authDemoRoutes,

    // Dashboard routes
    ...dashboardRoutes,

    // Main routes
    ...mainRoutes,

    // Components routes
    ...componentsRoutes,

    {
      path: '/auth',
      element: (
        <AuthClassicLayout title="Zugangskontrolle">
          <LoginClassicPage />
        </AuthClassicLayout>
      ),
    },

    {
      path: '/verify',
      element: (
        <CompactLayout>
          {' '}
          <ModernVerifyView />
        </CompactLayout>
      ),
    },
    // No match 404
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
