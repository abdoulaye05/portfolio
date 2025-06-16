// src/components/Router.jsx

import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage   from "../pages/home/Home";      // src/pages/home/Home.jsx
import KasaPage   from "../pages/kasa/Kasa";      // src/pages/kasa/Kasa.jsx
import SophiePage from "../pages/sophie/Sophie";  // src/pages/sophie/Sophie.jsx
import WorksPage  from "../pages/works/works";    // src/pages/works/works.jsx
import ErrorPage  from "../pages/error/Error";    // src/pages/error/Error.jsx
import Skills from "./Skills";
import CompetenceDetail from "../pages/competences/CompetenceDetail";

function Router() {
  const router = createHashRouter([
    { path: "/",             element: <HomePage /> },
    { path: "/kasa",         element: <KasaPage /> },
    { path: "/sophiebluel",  element: <SophiePage /> },
    { path: "/works",        element: <WorksPage /> },    // liste des projets
    { path: "/works/:id",    element: <WorksPage /> },    // détail d'un projet
    { path: "/skills",       element: <Skills /> },       // page compétences
    { path: "/skills/:id", element: <CompetenceDetail /> }, // détail d'une compétence
    { path: "*",             element: <ErrorPage /> }     // page 404 React
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
