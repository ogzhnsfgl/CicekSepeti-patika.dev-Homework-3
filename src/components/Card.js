import React, { useEffect, useState } from 'react';
import Rating from './Rating';
import Modal from './Modal';

const Card = (props) => {
  const { id, title, duration, poster, stars: count } = props.item;
  const { changeStars, deleteCard } = props;
  const [isRender, setIsRender] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [stars, setStars] = useState(count);

  console.log('card:', props.item);
  return (
    <div className="card">
      <div className="card-play-button">
        <i className="far fa-play-circle fa-4x"></i>
      </div>
      <div className="card-img">
        <div
          className="card-play-button"
          onClick={() => setShowModal(!showModal)}
        >
          <i className="far fa-play-circle fa-4x"></i>
        </div>
        <img src={poster} alt="" />
      </div>
      <div className="card-body">
        <div className="card-body-title">{title}</div>
        <div className="card-body-duration">{duration}</div>
        <Rating
          item={props.item}
          changeStars={changeStars}
          stars={stars}
          setStars={setStars}
        />
      </div>
      <button className="card-btn" onClick={() => deleteCard(id)}>
        X
      </button>
      <Modal
        item={props.item}
        showModal={showModal}
        setShowModal={setShowModal}
        changeStars={changeStars}
        stars={stars}
        setStars={setStars}
      />
    </div>
  );
};

export default Card;
