import { useContext, useState } from 'react';
import { createContext } from 'react';

const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cardList, setCardList] = useState(['deneme']);

  const deleteCard = (id) => {
    const filteredCard = cardList.filter((card) => card.id !== id);
    setCardList(filteredCard);
  };

  const values = { cardList, setCardList, deleteCard };
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

const useCardList = () => useContext(CardContext);

export { CardProvider, useCardList };
