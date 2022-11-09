import React from "react";

const AddServices = () => {
  return (
    <div>
      <h1 className="text-center text-blue-500 font-bold text-3xl uppercase mb-10">
        Add New Service
      </h1>
      <div className="lg:w-1/2 md:w-3/4 w-11/12 px-8 py-16 mx-auto rounded-lg  md:px-12 lg:px-16 xl:px-32 text-gray-800 border border-gray-500 bg-gray-100">
        <form
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label htmlFor="name" className="text-lg">
              Service Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder=""
              className="w-full p-3 rounded bg-gray-100 border border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="image" className="text-lg">
              Image URL
            </label>
            <input
              name="img"
              id="image"
              type="text"
              className="w-full p-3 rounded bg-gray-100 border border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="price" className="text-lg">
              Price
            </label>
            <input
              name="price"
              id="price"
              type="text"
              className="w-full p-3 rounded bg-gray-100 border border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="text-lg">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="3"
              className="w-full p-3 rounded bg-gray-100 border border-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-sky-600 text-gray-50"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
