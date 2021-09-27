import Card from './Card';

const CardList = (props) => {
  const { cardList, isLoading, changeStars, deleteCard } = props;

  return (
    <div className="container">
      <div className="cardList">
        {isLoading && <div className="loading"></div>}
        {!isLoading &&
          cardList.map((card) => {
            return (
              <Card
                key={card.id}
                item={card}
                changeStars={changeStars}
                deleteCard={deleteCard}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardList;
