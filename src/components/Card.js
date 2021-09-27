import React, { useState } from 'react';
import Rating from './Rating';
import { useCardList } from '../context/CardContext';
import Modal from './Modal';

const Card = ({ item }) => {
  const { deleteCard } = useCardList();
  const [showModal, setShowModal] = useState(false);

  const { id, title, duration, poster, stars, author, embedLink } = item;
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
        <Rating count={stars} />
      </div>
      <button className="card-btn" onClick={() => deleteCard(id)}>
        X
      </button>
      <Modal item={item} showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Card;
