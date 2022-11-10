import React from "react";
import { toast } from "react-toastify";
import subscribelogo from "../../Assets/Email campaign-pana.svg";

const Subscribe = () => {
    const handleSubscribe = (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      if(email){
        toast.success('Thanks for subscribe. We will inform you when our new course get published!')
        event.target.reset();
      }
    };
  return (
    <div className="bg-cyan-900">
      <div className="container px-6 lg:py-2 py-10 mx-auto">
        <div className="lg:flex flex-col md:flex-row items-center flex">
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full max-w-md"
              src={subscribelogo}
              alt="email illustration vector art"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
                Subscribe To The{" "}
                <span className="text-blue-500">Newsletter</span>
              </h1>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                be the first to knows when our new{" "}
                <span className="font-semibold text-blue-500">Courses</span>{" "}
                arrive.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                <input
                  required
                  name="email"
                  id="email"
                  type="email"
                  className="px-4 py-2 text-gray-800 bg-gray-100 border rounded-md  focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="Email Address"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
