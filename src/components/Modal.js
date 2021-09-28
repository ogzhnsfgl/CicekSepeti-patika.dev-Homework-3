import React from 'react';
import ReactModal from 'react-modal';
import Rating from './Rating';

const Modal = (props) => {
  /* Requirements */
  const { title, duration, author, embedLink } = props.item;
  const { setShowModal, showModal, stars, setStars } = props;

  const handleModalClose = (e) => {
    if (e.target.className === 'modal-wrapper') {
      setShowModal(!showModal);
    }
  };
  return (
    <ReactModal
      className="ReactModal"
      id="modal"
      isOpen={showModal}
      contentLabel="Higher Video Detail"
      ariaHideApp={false}
      preventScroll={true}
    >
      <div className="modal-wrapper" onClick={handleModalClose}>
        <div className="modal-info">
          <div className="modal-info-title">{title}</div>
          <div className="modal-info-author">{author}</div>
          <div className="modal-info-detail">
            <div className="modal-info-duration">Duration: {duration} </div>
            <Rating
              item={props.item}
              stars={stars}
              setStars={setStars}
              title={title}
            />
          </div>
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
      </div>
    </ReactModal>
  );
};

export default Modal;
