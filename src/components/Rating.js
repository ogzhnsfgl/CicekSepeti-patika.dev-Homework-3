import React, { useState, useEffect } from 'react';

const Rating = ({ count }) => {
  const [starCount, setstarCount] = useState(count);

  useEffect(() => {
    setstarCount(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (x) => {
    setstarCount(x + 1);
  };

  return (
    <div className="rating">
      {[...Array(starCount)].map((item, index) => {
        return (
          <i
            key={index}
            className="fas fa-star"
            onClick={() => handleClick(index)}
          ></i>
        );
      })}
      {[...Array(5 - starCount)].map((item, index) => {
        return (
          <i
            key={index + starCount}
            className="far fa-star"
            onClick={() => handleClick(index + starCount)}
          ></i>
        );
      })}
    </div>
  );
};

export default Rating;
