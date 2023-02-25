import React from 'react';
import './style.css';

const User = ({ name, avatar }) => {
  return (
    <div className="user">
      <img className="user__image" src={avatar} alt="user avatar" />
      <div className="user__name">{name}</div>
    </div>
  );
};

export default User;
