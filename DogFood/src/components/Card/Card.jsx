import React from 'react';
import './style.css';

const Card = ({ likes, currentUserId, name, pictures, _id, handleLike }) => {
  const isLike = likes.some((id) => id === currentUserId);

  return (
    <div className="card">
      <div onClick={() => handleLike(_id, isLike, likes)} className={`card__like ${isLike && 'red'}`}></div>
      <img className="card__image" src={pictures} alt={name} />
      <div className="card__title">{name}</div>
    </div>
  );
};

export default Card;
