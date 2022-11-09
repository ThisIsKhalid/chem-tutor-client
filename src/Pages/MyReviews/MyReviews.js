import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {

    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/my_reviews?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setReviews(data))
    }, [user?.email]);

    return (
        <div>
            {
                reviews.map(review => <MyReview
                key={review._id}
                review={review}
                ></MyReview>)
            }
        </div>
    );
};

export default MyReviews;