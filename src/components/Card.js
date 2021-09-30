import React, { useState } from 'react';
import Rating from './Rating';
import Modal from './Modal';

const Card = (props) => {
  const { id, title, duration, poster, stars: count } = props.item;
  const { deleteCard } = props;
  const [showModal, setShowModal] = useState(false);
  const [stars, setStars] = useState(count);

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
        <img src={poster} alt={`${title}-img`} />
      </div>
      <div className="card-body">
        <div className="card-body-title">{title}</div>
        <div className="card-body-duration">{duration}</div>
        <Rating
          item={props.item}
          stars={stars}
          setStars={setStars}
          title={title}
        />
      </div>
      <button className="card-btn" onClick={() => deleteCard(id)}>
        X
      </button>
      <Modal
        item={props.item}
        showModal={showModal}
        setShowModal={setShowModal}
        stars={stars}
        setStars={setStars}
      />
    </div>
  );
};

export default Card;
