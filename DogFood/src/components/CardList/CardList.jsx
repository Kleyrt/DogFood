import React from 'react';
import Card from '../Card/Card';

import './style.css';

const CardList = ({ cards, currentUserId, handleLike }) => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card key={card._id} {...card} handleLike={handleLike} currentUserId={currentUserId}></Card>
      ))}
    </div>
  );
};

export default CardList;
