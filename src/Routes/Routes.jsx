import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Shared/ErrorPage";
import Home from "../BodyComponents/Home";
import UpdateProfile from "../BodyComponents/UpdateProfile";
import UserProfile from "../BodyComponents/UserProfile";
import Property from "../BodyComponents/Property";
import Login from "../BodyComponents/Login";
import Register from "../BodyComponents/Register";
import Details from "../BodyComponents/Details";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/Data.json"),
      },

      {
        path: "/updateProfile",
        element:<PrivetRoutes> <UpdateProfile></UpdateProfile></PrivetRoutes>,
      },
      {
        path: "/userProfile",
        element: <PrivetRoutes><UserProfile></UserProfile></PrivetRoutes>,
      },
      {
        path: "/property",
        element: <Property></Property>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <PrivetRoutes><Details></Details></PrivetRoutes>,
        loader:()=>fetch("/../public/Data.json"),
      },
    ],
  },
]);
export default router;
