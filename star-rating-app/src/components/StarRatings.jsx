import React, { useState } from "react";

const StarRatings = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center my-4">
      <h2 className="font-bold text-2xl">Star Rating Feature</h2>
      <div className="stars">
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            onClick={() => setRating(index + 1)}
            onMouseEnter={() => setHover(index + 1)}
            onMouseLeave={() => setHover(0)}
            className="star"
            style={{
              color: index < (hover || rating) ? "yellow" : "#ccc",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <p className="text-center">
        Rating is:- {rating}/{totalStars}
      </p>
    </div>
  );
};

export default StarRatings;
