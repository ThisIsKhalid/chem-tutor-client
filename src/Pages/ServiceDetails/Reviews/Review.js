import React from "react";

const Review = ({ review }) => {
  const { img, name, description, time } = review;

  return (
    <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800 border border-gray-300">
      <div className=" p-2">
        <div className="flex space-x-4">
          <div>
            <img
              src={img}
              alt=""
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>
          <div>
            <h4 className="font-bold">{name}</h4>
            <span className="text-xs text-gray-600">
              {`${time}`.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
      <div className="p-2  text-sm text-gray-700">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Review;
