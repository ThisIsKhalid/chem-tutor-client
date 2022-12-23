import React from "react";
import CountUp from "react-countup";
import ScrollTrigger from 'react-scroll-trigger'
import { FiFile, FiMapPin, FiUser, FiUsers } from "react-icons/fi";
import { useState } from "react";

const ImportantFacts = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <section className="py-10 bg-slate-100">
      <div className="container mx-auto lg:px-0 px-5">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="uppercase text-3xl font-semibold text-center">
            Some Important
            <span className="text-emerald-500"> Facts</span>
          </h1>
          <hr className="w-96 border-gray-400 mt-5" />
          <hr className="w-80 mt-3 border-gray-400" />
        </div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-5 gap-3 text-white">
            <div className="border border-gray-300 flex flex-col items-center justify-center p-5 rounded-md gap-2 bg-green-800">
              <FiUser className="h-12 w-12" />
              <h1 className="text-4xl font-medium">
                {counterOn && <CountUp end={55} duration={5} delay={0} />}+
              </h1>
              <h1 className="text-2xl uppercase">Teachers</h1>
            </div>
            <div className="border border-gray-300 flex flex-col items-center justify-center p-5 rounded-md gap-2 bg-rose-800">
              <FiFile className="h-12 w-12" />
              <h1 className="text-4xl font-medium">
                {counterOn && <CountUp end={199} duration={5} delay={0} />}+
              </h1>
              <h1 className="text-2xl uppercase">Courses</h1>
            </div>
            <div className="border border-gray-300 flex flex-col items-center justify-center p-5 rounded-md gap-2 bg-green-800">
              <FiUsers className="h-12 w-12" />
              <h1 className="text-4xl font-medium">
                {counterOn && <CountUp end={2320} duration={5} delay={0} />}+
              </h1>
              <h1 className="text-2xl uppercase">Members</h1>
            </div>
            <div className="border border-gray-300 flex flex-col items-center justify-center p-5 rounded-md gap-2 bg-rose-800">
              <FiMapPin className="h-12 w-12" />
              <h1 className="text-4xl font-medium">
                {counterOn && <CountUp end={27} duration={5} delay={0} />}+
              </h1>
              <h1 className="text-2xl uppercase">Countries</h1>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default ImportantFacts;
