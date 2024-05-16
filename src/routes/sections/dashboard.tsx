import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

import { LoadingScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

const IndexPage = lazy(() => import('src/pages/dashboard/one'));
const Client = lazy(() => import('src/pages/dashboard/Client/Client'));
const Doors = lazy(() => import('src/pages/dashboard/Doors/Doors'));
const Door = lazy(() => import('src/pages/dashboard/Door/Door'));
const Manage = lazy(() => import('src/pages/dashboard/Manage/Manage'));

// ----------------------------------------------------------------------

export const dashboardRoutes = [
  {
    path: '/dashboard',
    element: (
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'client/:id', element: <Client /> },
      { path: 'standorte', element: <Doors /> },
      { path: 'standorte/:id', element: <Door /> },
    ],
  },
  {
    path: '/management',
    element: (
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [{ element: <Manage />, index: true }],
  },
  {
    path: '/profile',
    element: (
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [{ element: <>profile</>, index: true }],
  },
  {
    path: '*',
    element: (
      <DashboardLayout>
        <Suspense fallback={<LoadingScreen />}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [
      { element: <IndexPage />, index: true },
      { path: 'dashboard/client/:id', element: <Client /> },
      { path: 'dashboard/standorte', element: <Doors /> },
      { path: 'dashboard/standorte/:id', element: <Door /> },
    ],
  },
];
