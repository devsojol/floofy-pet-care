import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayouts/RootLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ServiceDetails from "../components/ServiceDetails";
import PrivateRoute from "../providers/PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import Services from "../pages/Services";
import ForgetPassword from "../pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
export default router;
