import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayouts/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

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
         path:"/services",
         element:<Services></Services>
      },
      {
         path:"/my-profile",
         element:<MyProfile></MyProfile>
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