import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/home/Home";
import ErrorPage from "../pages/error/Error";
import KasaPage from "../pages/kasa/Kasa";
import SophiePage from "../pages/sophie/Sophie";

function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <ErrorPage /> },
    { path: "/kasa", element: <KasaPage />},
    { path: "/sophiebluel", element: <SophiePage />}
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
