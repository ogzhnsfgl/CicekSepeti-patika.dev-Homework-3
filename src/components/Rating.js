import alertify from 'alertifyjs';
const Rating = (props) => {
  const { stars: count, setStars, title } = props;

  /* When click on star setStar func will execute to set new state */
  const handleClick = (x) => {
    setStars(x + 1);
    console.log('deneme');
    alertify.notify(
      `Saved! <hr> <strong>${title}: ${x + 1}/5 </strong>`,
      'custom',
      4
    );
  };
  /* Create total 5 stars which are solid and outlined accordingly
  value that comes from props */
  return (
    <div className="rating">
      {[...Array(count)].map((item, index) => {
        return (
          <i
            key={index}
            className="fas fa-star"
            onClick={() => handleClick(index)}
          ></i>
        );
      })}
      {[...Array(5 - count)].map((item, index) => {
        return (
          <i
            key={index + count}
            className="far fa-star"
            onClick={() => handleClick(index + count)}
          ></i>
        );
      })}
    </div>
  );
};

export default Rating;
