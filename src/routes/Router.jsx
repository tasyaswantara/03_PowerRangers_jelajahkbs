import { createBrowserRouter } from "react-router-dom";



// Pages
import Home from "../pages/Home";
import Cover from "../pages/Cover";
import Index from "../pages/Index";
import Peta from "../pages/Peta";

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
    ],
  },
]);

export default router;
