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

  const values = {
    cardList,
    setCardList,
    deleteCard,
    filterCard,
    filteredList,
    setFilteredList,
  };
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

const useCardList = () => useContext(CardContext);

export { CardProvider, useCardList };
