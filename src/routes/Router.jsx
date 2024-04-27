import { createBrowserRouter } from "react-router-dom";



// Pages
import Cover from "../pages/Cover";
import Index from "../pages/Index";
import Peta from "../pages/Peta";
import Congrats from "../pages/Congrats";
import Donasi from "../pages/Donasi";

// import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([
  // {
  //   element: <AuthRoute />,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: "/signup",
  //       element: <SignupPage />,
  //     },
  //   ],
  // },
  {
    // element: <ProtectedRoute />,
    children: [
      {
        path: "/home",
        element: <Index />,
      },
      {
        path: "/",
        element: <Cover />,
      },
      {
        path: "/peta",
        element: <Peta />,
      },
      {
        path: "/congratulations",
        element: <Congrats />,
      },
      {
        path: "/donasi",
        element: <Donasi />,
      },
    ],
  },
]);

export default router;
