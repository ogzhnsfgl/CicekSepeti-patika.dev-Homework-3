import { useContext, useState } from 'react';
import { createContext } from 'react';

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cardList, setCardList] = useState([]);
  const [filteredList, setFilteredList] = useState([...cardList]);

  const deleteCard = (id) => {
    const filteredCard = cardList.filter((card) => card.id !== id);
    setCardList(filteredCard);
    setFilteredList(filteredCard);
  };
  const filterCard = (input) => {
    const filteredCard = cardList.filter((card) =>
      card.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredList(filteredCard);
  };

  const setStars = (count, id) => {
    const items = [...cardList];
    items[id - 1].stars = count;
    setCardList(items);
    setFilteredList(items);
  };

  const values = {
    cardList,
    setCardList,
    deleteCard,
    filterCard,
    filteredList,
    setFilteredList,
    setStars,
  };
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

const useCardList = () => useContext(CardContext);

export { CardProvider, useCardList };
