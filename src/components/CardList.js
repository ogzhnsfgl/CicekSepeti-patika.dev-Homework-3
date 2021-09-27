import Card from './Card';
import noResult from '../assets/no-result.png';

const CardList = (props) => {
  const { cardList, isLoading, changeStars, deleteCard } = props;

  return (
    <div className="container">
      <div className="cardList">
        {isLoading && <div className="loading"></div>}
        {!isLoading && cardList.length === 0 && (
          <img className="no-result" src={noResult} alt="no-result"></img>
        )}
        {!isLoading &&
          cardList.length > 0 &&
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
