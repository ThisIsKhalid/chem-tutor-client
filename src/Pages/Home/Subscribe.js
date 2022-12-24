import React from "react";
import { toast } from "react-toastify";
import subscribelogo from "../../Assets/Email campaign-pana.svg";

const Subscribe = () => {
  const handleSubscribe = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    if (email) {
      toast.success(
        "Thanks for subscribe. We will inform you when our new course get published!"
      );
      event.target.reset();
    }
  };
  return (
    <section className="bg-gray-100 py-10">
      <div className="container px-6  mx-auto">
        <div className="flex flex-col items-center justify-center mb-5">
          <h1 className="uppercase text-3xl font-semibold text-center">
            Subscribe To The
            <span className="text-emerald-500"> Newsletter</span>
          </h1>
          <p className="mt-2 text-gray-800">
            be the first to knows when our new{" "}
            <span className="font-semibold text-emerald-500">Courses</span>{" "}
            arrive.
          </p>
          <hr className="w-96 border-gray-400 mt-5" />
          <hr className="w-80 mt-3 border-gray-400" />
        </div>
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubscribe}
            className="md:w-1/2 w-full flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered input-success w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered input-success w-full"
            />
            <textarea
              className="textarea textarea-success"
              placeholder="Bio"
            ></textarea>

            <button className="py-2 px-5 bg-emerald-500 rounded-md text-xl font-medium text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
