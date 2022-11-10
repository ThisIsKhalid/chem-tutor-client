import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import { spinner } from "../Others/Spinner";
import Service from "./Service";

const Services = () => {
  useTitle("Courses");
  const services = useLoaderData();
  const { loading } = useContext(AuthContext);

  if (loading) {
    return spinner();
  }

  return (
    <div className="py-10 container mx-auto">
      <h1 className="text-center text-4xl text-gray-800 font-bold uppercase mb-5">
        All Courses
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-5 md:mx-0">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
