import React, { useState } from 'react';
import Rating from './Rating';
import { useCardList } from '../context/CardContext';
import ReactModal from 'react-modal';
// ReactModal.setAppElement('.card');

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
      <ReactModal
        className="ReactModal"
        isOpen={showModal}
        contentLabel="Minimal Modal Example"
      >
        <div className="modal-info">
          <div className="modal-info-title">{title}</div>
          <div className="modal-info-author">{author}</div>
          <div className="modal-info-duration">Duration :{duration}</div>
          <Rating count={stars} />
        </div>
        <div className="modal-video">
          <iframe
            width="500"
            height="315"
            src={`${embedLink}`}
            title={`${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <button onClick={() => setShowModal(!showModal)}>X</button>
      </ReactModal>
    </div>
  );
};

export default Card;
