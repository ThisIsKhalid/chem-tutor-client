import React from 'react';
import books from '../../Assets/books.png'

const WhyChoose = () => {
    return (
      <div className="container mx-auto py-3 my-5 lg:px-0 px-5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="uppercase text-3xl font-semibold">
            Why Choose <br/><span className="text-emerald-500">Chem Tutor</span>
          </h1>
          <hr className="w-96 border-gray-400 mt-5" />
          <hr className="w-80 mt-3 border-gray-400" />
        </div>
        <div className="grid lg:grid-cols-2 mt-2">
          <div className="lg:h-[450px] hidden lg:block">
            <img className="h-full w-[90%]" src={books} alt="" />
          </div>
          <div className="flex flex-col items-center justify-center gap-10 lg:mt-0 mt-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-700">
                RESIDENTIAL SERVICES
              </h1>
              <p className="text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quaerat a esse ut fugiat? Quasi aliquid tempora distinctio
                quaerat sed.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-700">
                OUR BEST STAFF
              </h1>
              <p className="text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quaerat a esse ut fugiat? Quasi aliquid tempora distinctio
                quaerat sed.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-700">
                24 HOURS SERVICES
              </h1>
              <p className="text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quaerat a esse ut fugiat? Quasi aliquid tempora distinctio
                quaerat sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyChoose;