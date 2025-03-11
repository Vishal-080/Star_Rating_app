import React, { useState } from "react";

const StarRatings = ({ totalStars = 5 }) => {

  const [rating, setRating] = useState(0);



  return <div className="container">StarRatings ★</div>;
};

export default StarRatings;