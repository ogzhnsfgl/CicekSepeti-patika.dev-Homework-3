import React, { useState, useEffect } from 'react';

const Rating = (props) => {
  const { id, title } = props.item;
  const { changeStars, stars: count, setStars } = props;

  const handleClick = (x) => {
    setStars(x + 1);
  };

  console.log(title, count);

  return (
    <div className="rating">
      {[...Array(count)].map((item, index) => {
        return (
          <i
            key={index}
            className="fas fa-star"
            onClick={() => handleClick(index)}
          ></i>
        );
      })}
      {[...Array(5 - count)].map((item, index) => {
        return (
          <i
            key={index + count}
            className="far fa-star"
            onClick={() => handleClick(index + count)}
          ></i>
        );
      })}
    </div>
  );
};

export default Rating;
