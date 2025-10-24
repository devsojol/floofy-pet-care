import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayouts/RootLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import ServiceDetails from "../components/ServiceDetails";
import PrivateRoute from "../providers/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children:[
      {
         path:"/",
         element:<Home></Home>
      },
      {
         path:"/services/:id",
         element:<PrivateRoute>
          <ServiceDetails></ServiceDetails>
         </PrivateRoute>
      },
      {
         path:"/my-profile",
         element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>
      },
      {
         path:"/login",
         element:<Login></Login>
      },
      {
         path:"/register",
         element:<Registration></Registration>
      },
    ],
  },
]);
export default router;