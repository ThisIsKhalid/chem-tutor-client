import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ServiceDetails from "../Pages/ServiceDetails.js/ServiceDetails";
import Services from "../Pages/Services/Services";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signin/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/signin',
        element: <Signin></Signin>
      }
    ],
  },
]);
