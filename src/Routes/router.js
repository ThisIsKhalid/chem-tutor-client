import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddServices from "../Pages/AddServices/AddServices";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home";
import EditReview from "../Pages/MyReviews/EditReview";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ErrorPage from "../Pages/Others/ErrorPage";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Signin/Signup";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        loader: () =>
          fetch(
            "https://b6a11-service-review-server-side-this-is-khalid.vercel.app/services"
          ),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/my_reveiws",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/add_service",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit_reveiw/:id",
        element: (
          <PrivateRoute>
            <EditReview></EditReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-this-is-khalid.vercel.app/edit_reveiw/${params.id}`
          ),
      },
    ],
  },
]);
