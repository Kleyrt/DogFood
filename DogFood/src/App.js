import { useEffect, useState } from 'react';
import { deleteLike, getProducts, getUserInfo, putLike } from './api';
import './App.css';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import User from './components/User/User';

function App() {
  const [cards, setCards] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [filterCards, setFilerCard] = useState();

  const filteredCards = (text) => {
    const filterCards = cards.filter((card) => card.name.toLowerCase().includes(text.toLowerCase()));
    setFilerCard(filterCards);
  };

  useEffect(() => {
    getProducts().then((data) => setCards(data.products));
    getUserInfo().then((userInfo) => setUserInfo(userInfo));
  }, []);

  const handleLike = (productId, isLike) => {
    const updateCards = (updatedCard) => {
      const updatedCards = cards.map((card) => (card._id === updatedCard._id ? updatedCard : card));
      const updatedFilterCards = filterCards?.map((card) => (card._id === updatedCard._id ? updatedCard : card));
      setCards(updatedCards);
      setFilerCard(updatedFilterCards);
    };
    isLike ? deleteLike(productId).then((e) => updateCards(e)) : putLike(productId).then((e) => updateCards(e));
  };

  return (
    <div className="App">
      <Header>
        <User name={userInfo.name || 'name'} avatar={userInfo.avatar || 'https://www.freecodecamp.org/news/content/images/2019/09/New-Project--24-.jpg'}></User>
        <Search handleInput={(text) => filteredCards(text)} />
      </Header>
      {filterCards && (filterCards?.length === 0 ? 'Товаров по вашему запросу не найдено' : `Товаров по запросу: ${filterCards?.length}`)}
      <CardList handleLike={handleLike} cards={filterCards || cards} currentUserId={userInfo?._id}></CardList>
    </div>
  );
}

export default App;
