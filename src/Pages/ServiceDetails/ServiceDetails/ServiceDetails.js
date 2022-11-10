import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useParams } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Reviews from "../Reviews/Reviews";

const ServiceDetails = () => {
  useTitle("Course_Details");
  const { id } = useParams();

  const [service, setService] = useState({});
  const { name, img, price, description } = service;

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-this-is-khalid.vercel.app/services/${id}`
    )
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  return (
    <section>
      <div className="container px-6 my-10 mx-auto space-y-6">
        <div className="w-full lg:w-3/4 lg:mx-auto">
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="w-full" src={img} alt="" />
            </PhotoView>
          </PhotoProvider>
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
      <Reviews serviceId={id}></Reviews>
    </section>
  );
};

export default ServiceDetails;
