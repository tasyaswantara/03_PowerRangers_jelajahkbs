import { createBrowserRouter } from "react-router-dom";



// Pages
import Cover from "../pages/Cover";
import Index from "../pages/Index";
import Peta from "../pages/Peta";
import Congrats from "../pages/Congrats";
import Donasi from "../pages/Donasi";
import Feedback from "../pages/Feedback";

// import SignupPage from "../pages/SignupPage";

const router = createBrowserRouter([

  {
   
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
      {
        path: "/feedback",
        element: <Feedback />,
      },
    ],
  },
]);

export default router;
