import React, { useContext, useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";
import Review from "./Review";

const Reviews = ({ serviceId }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-this-is-khalid.vercel.app/reviews/${serviceId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [serviceId, refresh]);

  const addNewReveiw = (event) => {
    event.preventDefault();
    const description = event.target.description.value;
    const time = new Date();
    const newReview = {
      serviceId: serviceId,
      name: user?.displayName,
      img: user?.photoURL,
      email: user?.email,
      description,
      time,
    };

    fetch(
      "https://b6a11-service-review-server-side-this-is-khalid.vercel.app/reviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thanks for your Honest review!");
          setRefresh(!refresh);
          event.target.reset();
        }
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-10 flex items-center justify-center">
        <FaAngleLeft />
        <span className="text-cyan-500">Reviews</span>
        <FaAngleRight />
      </h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 sm:mx-0 mx-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>

      <div className="lg:w-1/2 md:w-3/4 w-11/12 px-4 py-2 mx-auto rounded-lg  md:px-6 lg:px-8 xl:px-32 text-gray-800 border border-gray-500 bg-gray-100 my-10">
        {user?.email ? (
          <form onSubmit={addNewReveiw}>
            <div>
              <label htmlFor="description" className="text-lg">
                Your Review
              </label>
              <textarea
                required
                name="description"
                id="description"
                rows="3"
                className="w-full p-1 rounded bg-gray-100 border border-gray-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-sky-600 text-gray-50"
            >
              Add Review
            </button>
          </form>
        ) : (
          <h4 className="text-xl text-gray-600 font-semibold text-center">
            Please{" "}
            <span className="text-blue-500 underline">
              <Link to="/signin">Sign In</Link>
            </span>{" "}
            to add a review.
          </h4>
        )}
      </div>
    </div>
  );
};

export default Reviews;
