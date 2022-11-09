import React from "react";
import { toast } from "react-toastify";

const AddServices = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;

    const newService = {
      name,
      img,
      price,
      description,
    };

    fetch("http://localhost:5000/add_service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added a New Service");
          form.reset();
        }
      });
  };

  return (
    <div>
      <h1 className="text-center text-blue-500 font-bold text-3xl uppercase mb-10">
        Add New Service
      </h1>
      <div className="lg:w-1/2 md:w-3/4 w-11/12 px-8 py-16 mx-auto rounded-lg  md:px-12 lg:px-16 xl:px-32 text-gray-800 border border-gray-500 bg-gray-100">
        <form
          onSubmit={handleAddService}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div>
            <label htmlFor="name" className="text-lg">
              Service Name
            </label>
            <input
              required
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
              required
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
              required
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
              required
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
