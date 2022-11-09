import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  let { id } = useParams();

  const [service, setService] = useState({});
  const { name, img, price,  description } = service;
  console.log(service);

  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  return (
    <section>
      <div className="container px-6 my-10 mx-auto space-y-6">
        <div className="w-full lg:w-3/4 lg:mx-auto">
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="w-full">
          <h1 className="text-3xl font-bold tracking-wide text-gray-800 lg:text-5xl mb-5">
            {name}
          </h1>
          <p>{description}</p>
          <p className="text-2xl text-orange-500 font-bold mt-3">
            ${price}/<small>month</small>
          </p>
        </div>
      </div>

      {/* ------------- all reviews -------------- */}
      <Reviews></Reviews>
    </section>
  );
};

export default ServiceDetails;
