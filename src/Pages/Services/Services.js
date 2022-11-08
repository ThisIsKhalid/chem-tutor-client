import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const services = useLoaderData();
  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-center text-4xl text-gray-800 font-bold uppercase mb-5">All Services</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {
          services.map(service => <Service
          key={service._id}
          service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;
