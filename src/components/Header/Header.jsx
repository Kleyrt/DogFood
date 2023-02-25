import React from 'react';
import './style.css';

//можно добавить логотип
const Header = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;
