import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayouts/RootLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";

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
         element:<MyProfile></MyProfile>
      },
      {
         path:"/register",
         element:<MyProfile></MyProfile>
      },
    ],
  },
]);
export default router;