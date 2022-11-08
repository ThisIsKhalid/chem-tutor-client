import React from 'react';
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import chemistry_animation from '../../Assets/chemistry-animation.json'

const Home = () => {
    return (
      <section className="text-gray-800">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-evenly">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div className="uppercase mb-7">
              <h4 className="text-3xl">
                A{" "}
                <span className="text-orange-500 font-bold">
                  Learning Platform
                </span>
              </h4>
              <p className="text-2xl">that helps you to Learn</p>
              <h1 className="text-6xl text-white bg-emerald-500 font-bold border-2 py-2 px-2">
                CHEMISTRY
              </h1>
              <p className="text-2xl">
                in a <span className="text-orange-500 font-bold">Fun</span> way
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/"
                className="px-5 py-2 text-lg font-semibold border rounded border-orange-600 flex items-center uppercase hover:bg-orange-400 hover:text-white"
              >
                Explore All Courses
                <span className="ml-2">
                  <FaArrowRight></FaArrowRight>
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Lottie animationData={chemistry_animation} loop={true} />;
          </div>
        </div>
      </section>
    );
};

export default Home;