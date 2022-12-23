import React from "react";
import quotes1 from "../../Assets/double-quotes1.png";
import quotes2 from "../../Assets/double-quotes2.png";

const StudentsReview = () => {
  return (
    <div className=" bg-slate-100 py-10 md:py-2">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <h1 className="text-3xl font-semibold text-center px-2 md:px-0 text-gray-700">
          What our succesfull students are saying about <span className="uppercase text-emerald-500">Chem Tutor</span>
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
        <div className="flex flex-col items-center mx-12 lg:mx-0">
          <div className="relative text-center">
            <img
              className="absolute -top-4 -left-4 w-10 h-10 text-gray-300"
              src={quotes1}
              alt=""
            />
            <p className="px-6 py-1 text-lg italic">
              Without chemtutor, it would be difficult for me to gain the skills
              I need to maintain a consistent pace of learning while working
              full time.
            </p>
            <img
              className="absolute -bottom-3 right-0 w-10 h-10 text-gray-300"
              src={quotes2}
              alt=""
            />
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-sky-600"></span>
          <p className="text-xl font-medium text-gray-700">Istiak Niloy</p>
        </div>
        <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
          <div className="relative text-center">
            <img
              className="absolute -top-2 -left-2 w-10 h-10 text-gray-300"
              src={quotes1}
              alt=""
            />
            <p className="px-6 py-1 text-lg italic">
              Chemtutor helped me hons my skills and switch careers thanks to
              high quality coursework, reading, exercises, video lectures and
              discussion forums.
            </p>
            <img
              className="absolute -bottom-1 -right-1 w-10 h-10 text-gray-300"
              src={quotes2}
              alt=""
            />
          </div>
          <span className="w-12 h-1 my-2 rounded-lg bg-sky-600"></span>
          <p className="text-xl font-medium text-gray-700">Avilas Roy</p>
        </div>
      </div>
    </div>
  );
};

export default StudentsReview;
