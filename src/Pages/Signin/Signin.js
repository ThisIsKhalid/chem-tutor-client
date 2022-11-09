import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import signinImg from "../../Assets/Sign in.svg"

const Signin = () => {
    return (
      <div className="flex md:flex-row flex-col items-center justify-evenly">
        <div className="w-1/2">
          <img className="w-3/4 mx-auto" src={signinImg} alt="" />
        </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 shadow-lg mt-5 border border-gray-200 mx-auto">
          <h1 className="text-2xl font-bold text-center">Sign IN</h1>
          <form className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md text-gray-800 text-xl "
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                required
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md text-gray-800 text-xl"
              />
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400 hover:bg-violet-600">
            Sign IN
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
            <p className="px-3 text-sm text-gray-800">
              Sign In with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          </div>
          <div className="flex flex-row justify-evenly">
            <button className="text-3xl">
              <FaGoogle></FaGoogle>
            </button>
            <button className="text-3xl">
              <FaGithub></FaGithub>
            </button>
            <button className="text-3xl">
              <FaFacebook></FaFacebook>
            </button>
          </div>

          <p className="text-center sm:px-6 text-gray-600">
            Don't have an account?
            <Link to="/signup" className="underline text-orange-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Signin;