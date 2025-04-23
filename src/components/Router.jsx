// src/components/Router.jsx

import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage   from "../pages/home/Home";      // src/pages/home/Home.jsx
import KasaPage   from "../pages/kasa/Kasa";      // src/pages/kasa/Kasa.jsx
import SophiePage from "../pages/sophie/Sophie";  // src/pages/sophie/Sophie.jsx
import WorksPage  from "../pages/works/works";    // src/pages/works/works.jsx
import ErrorPage  from "../pages/error/Error";    // src/pages/error/Error.jsx

function Router() {
  const router = createHashRouter([
    { path: "/",             element: <HomePage /> },
    { path: "/kasa",         element: <KasaPage /> },
    { path: "/sophiebluel",  element: <SophiePage /> },
    { path: "/works",        element: <WorksPage /> },    // liste des projets
    { path: "/works/:id",    element: <WorksPage /> },    // détail d’un projet
    { path: "*",             element: <ErrorPage /> }     // page 404 React
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
