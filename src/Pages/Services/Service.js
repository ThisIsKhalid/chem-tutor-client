import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {

  const { _id, name, img, price, description } = service;

  return (
    <div className="bg-base-100 text-gray-900 shadow-xl rounded-md">
      <PhotoProvider>
        <PhotoView src={img}>
          <img className="rounded-t-md w-full" src={img} alt="Shoes" />
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{description.slice(0, 100)}</p>
        <div className="flex justify-between items-center">
          <p className="text-2xl text-orange-500 font-bold">
            ${price}/<small>month</small>{" "}
          </p>
          <Link to={`/services/${_id}`} className="btn btn-outline btn-warning">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
