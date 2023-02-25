import React, { useState } from 'react';

import './style.css';

const Search = ({ handleInput }) => {
  const [text, setText] = useState('');

  return (
    <div className="search">
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
      <span onClick={() => handleInput(text)}>Поиск</span>
    </div>
  );
};

export default Search;
