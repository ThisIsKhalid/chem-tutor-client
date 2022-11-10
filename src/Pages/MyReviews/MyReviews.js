import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import MyReview from "./MyReview";

const MyReviews = () => {
  useTitle("My-Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    fetch(
      `https://b6a11-service-review-server-side-this-is-khalid.vercel.app/my_reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      });
  }, [user?.email, logOut, refresh]);

  const handleReveiwDelete = (id) => {
    fetch(
      `https://b6a11-service-review-server-side-this-is-khalid.vercel.app/my_reviews/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Review Deleted.");
          setRefresh(!refresh);
        }
      });
  };

  return (
    <div className="mx-5 md:mx-0">
      {reviews.length ? (
        <div>
          {reviews.map((review) => (
            <MyReview
              key={review._id}
              review={review}
              handleReveiwDelete={handleReveiwDelete}
            ></MyReview>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-96">
          <h2 className="text-red-500 text-3xl font-bold px-5">
            No reviews were added
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyReviews;
