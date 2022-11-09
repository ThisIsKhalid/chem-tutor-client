import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import MyReview from "./MyReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/my_reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRefresh(!refresh);
        setReviews(data);
      });
  }, [user?.email, refresh]);

  const handleReveiwDelete = (id) => {
    fetch(`http://localhost:5000/my_reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Reveiw Deleted.");
        }
      });
  };

  return (
    <div>
      {reviews.map((review) => (
        <MyReview
          key={review._id}
          review={review}
          handleReveiwDelete={handleReveiwDelete}
        ></MyReview>
      ))}
    </div>
  );
};

export default MyReviews;
