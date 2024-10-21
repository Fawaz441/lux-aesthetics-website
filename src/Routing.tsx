import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ServiceDetails from "pages/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services/:serviceSlug",
    element: <ServiceDetails />,
  },
]);

const Routing = () => <RouterProvider router={router} />;

export default Routing;
