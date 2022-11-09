import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = ({ serviceId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [serviceId]);

  return (
    <div className="container mx-auto">
      <h1>reviews</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
