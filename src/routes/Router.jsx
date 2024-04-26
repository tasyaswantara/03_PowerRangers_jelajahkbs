import { createBrowserRouter } from "react-router-dom";



// Pages
import Home from "../pages/Home";

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
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
