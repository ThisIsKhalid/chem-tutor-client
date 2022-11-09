import React, { useEffect, useState } from 'react';

const MyReview = ({ review }) => {

    const { serviceId, name, img, description, time } = review;
    const [service, setService] = useState({});

    useEffect(() => {
      fetch(`http://localhost:5000/services/${serviceId}`)
        .then((res) => res.json())
        .then((data) => setService(data));
    }, [serviceId]);

  return (
    <div className="container flex flex-col w-full lg:w-3/4 p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800 border border-gray-300 mb-5">
      <div className="flex md:flex-row flex-col-reverse items-center justify-between p-2">
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
        <div>
          <h1 className="text-orange-500 font-bold text-2xl mb-5 md:mb-0">
            {service?.name}
          </h1>
        </div>
      </div>
      <div className="p-2  text-sm text-gray-700">
        <p>{description}</p>
      </div>
      <div className="flex justify-end pt-3">
        <div>
          <button className="btn btn-warning btn-sm mr-2">Edit</button>
          <button className="btn btn-error btn-sm">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyReview;