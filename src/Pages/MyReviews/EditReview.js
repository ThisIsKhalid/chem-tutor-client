import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {

    const review = useLoaderData();
    const {serviceId, description} = review;
    const [service, setService] = useState({});


    useEffect(() => {
      fetch(`http://localhost:5000/services/${serviceId}`)
        .then((res) => res.json())
        .then((data) => setService(data));
    }, [serviceId]);

    return (
      <div>
        <h1 className="text-center text-red-500 font-bold text-3xl uppercase mb-10">
          Edit your review:
        </h1>
        <div className="lg:w-1/2 md:w-3/4 w-11/12 px-8 py-16 mx-auto rounded-lg  md:px-12 lg:px-16 xl:px-32 text-gray-800 border border-gray-500 bg-gray-100">
          <form
            // onSubmit={handleAddService}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div>
              <label htmlFor="name" className="text-lg">
                Service Name
              </label>
              <textarea
                required
                defaultValue={service.name}
                readOnly
                name="name"
                id="name"
                type="text"
                className="w-full text-blue-500 text-2xl font-bold p-3 rounded bg-gray-100 border border-gray-500"
              />
            </div>
            <div>
              <label htmlFor="reveiw" className="text-lg">
                Your Review
              </label>
              <textarea
                defaultValue={description}
                required
                name="description"
                id="review"
                rows="3"
                className="w-full p-3 rounded bg-gray-100 border border-gray-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-sky-600 text-gray-50"
            >
              Add Review
            </button>
          </form>
        </div>
      </div>
    );
};

export default EditReview;