import {Navigate, useRoutes} from "react-router-dom";
import DashboardLayout from "@components/layouts/dashboard-layout";
import Dashboard from "@pages/dashboard";
import Files from "@pages/dashboard/files/list";
import {lazy, LazyExoticComponent, Suspense} from "react";
import Loading from "@components/loading";
import NotFound from "@components/404";

const LazyLoad = (Component: LazyExoticComponent<() => JSX.Element>) => (props: any) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

const LazyAuth = LazyLoad(lazy(() => import("@pages/auth")));

export default function Routes() {
  return useRoutes([
    {path: "/", element: <Navigate to="/dashboard" />},
    {
      path: "dashboard",
      element: <DashboardLayout />,
      children: [
        {path: "", element: <Dashboard />},
        {path: "files", element: <Files />},
        {path: "files/archive", element: <Files isArchivePage />},
      ],
    },
    {path: "auth", element: <LazyAuth />},
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}
