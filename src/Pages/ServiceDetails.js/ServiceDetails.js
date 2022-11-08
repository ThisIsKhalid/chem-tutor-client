import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  let { id } = useParams();

  const [service, setService] = useState({});
  const { name, img, price,  description } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  return (
    <section>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center gap-5">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-wide text-gray-800 lg:text-5xl mb-5">
              {name}
            </h1>
            <p>{description}</p>
            <p className="text-2xl text-orange-500 font-bold mt-3">${price}/<small>month</small></p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ServiceDetails;
