import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from '../../Assets/404 error.svg'

const ErrorPage = () => {

    const error = useRouteError();

  return (
    <section className="flex items-center h-full p-1 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-6">
        <div className="max-w-md text-center">
          <img src={errorImg} alt="" />
          <p className="text-2xl font-bold md:text-3xl text-red-500">
            {error.statusText || error.message}
          </p>
          <p className="mt-2 mb-6 text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-sky-400 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
