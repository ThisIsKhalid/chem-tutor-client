import React from "react";

const Service = ({ service }) => {
  const { name, img, price, description } = service;
  return (
    <div className="card bg-base-100 text-gray-900 shadow-xl rounded-md">
      <img className="rounded-t-md" src={img} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description.slice(0, 100)}</p>
        <div className="card-actions justify-between items-center">
          <p className="text-2xl text-orange-500 font-bold">
            ${price}/<small>month</small>{" "}
          </p>
          <button className="btn btn-outline btn-warning">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
