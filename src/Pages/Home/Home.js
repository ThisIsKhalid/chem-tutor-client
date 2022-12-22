import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import chemistry_animation from "../../Assets/chemistry-animation.json";
import useTitle from "../../Hooks/useTitle";
import Service from "../Services/Service";
import StudentsReview from "./StudentsReview";
import Subscribe from "./Subscribe";
import WhoWeAre from "./WhoWeAre";
import WhyChoose from "./WhyChoose";

const Home = () => {
  useTitle("Home");
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://b6a11-service-review-server-side-this-is-khalid.vercel.app/latest"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section className="text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-16 lg:flex-row lg:justify-evenly">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <div className="uppercase mb-7">
            <h4 className="md:text-3xl text-2xl">
              A{" "}
              <span className="text-orange-500 font-bold">
                Learning Platform
              </span>
            </h4>
            <p className="md:text-2xl text-xl">that helps you to Learn</p>
            <h1 className="md:text-6xl text-4xl text-white bg-emerald-500 font-bold border-2 py-2 px-2">
              CHEMISTRY
            </h1>
            <p className="md:text-2xl text-xl">
              in a <span className="text-orange-500 font-bold">Fun</span> way
            </p>
          </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/services"
              className="px-5 py-2 md:text-lg text-sm font-semibold border-2 rounded border-emerald-500 flex items-center uppercase hover:bg-emerald-500 hover:text-white"
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

      {/*--------- trending now section  ------------*/}
      <div className="container mx-auto px-5 lg:px-0">
        <h1 className="text-4xl font-bold mb-10 flex items-center justify-center">
          <FaAngleLeft />
          <span className="text-cyan-500">Latest Courses</span>
          <FaAngleRight />
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-5 md:mx-0">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
        <p className="text-center my-10">
          <Link
            to="/services"
            className="py-2 px-5 bg-emerald-500 rounded-md text-xl font-medium text-white"
          >
            See All
          </Link>
        </p>
      </div>

      {/* Who we are */}
      <WhoWeAre></WhoWeAre>

      {/* why choose chemtutor */}
      <WhyChoose></WhyChoose>

      {/* <------------------student review ----------------> */}
      <StudentsReview></StudentsReview>

      {/* <-------------- subscribe ---------------> */}
      <Subscribe></Subscribe>
    </section>
  );
};

export default Home;
