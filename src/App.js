import './scss/main.scss';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';

import { useState, useEffect, useCallback } from 'react';

function App() {
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredList, setFilteredList] = useState(cardList);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('https://614f3e1cb4f6d30017b48511.mockapi.io/api/youtube')
      .then((res) => res.json())
      .then((data) => {
        setCardList(data);
        setIsLoading(false);
        setFilteredList(data);
      });
  }, []);

  const filterList = useCallback(
    (input) => {
      const filtered = [...cardList].filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredList(filtered);
    },
    [cardList]
  );

  useEffect(() => {
    filterList(input);
  }, [filterList, input]);

  const changeStars = (id, count) => {
    const items = [...cardList];
    items[id - 1].stars = count;
    setCardList(items);
    setFilteredList(items);
  };

  const deleteCard = (id) => {
    const filteredCard = cardList.filter((card) => card.id !== id);
    setCardList(filteredCard);
    setFilteredList(filteredCard);
  };

  return (
    <div className="App">
      <Navbar filterList={filterList} input={input} setInput={setInput} />
      <CardList
        cardList={filteredList}
        isLoading={isLoading}
        changeStars={changeStars}
        deleteCard={deleteCard}
      />
      <Footer />
    </div>
  );
}

export default App;
