import './SingleCard.css'

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if(!disabled) {
      handleChoice(card);
    }
  };
  return(
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img 
          className="back" 
          src="https://putrafajarf.github.io/Fun-Memory-Game/img/cover.png"
          onClick={flipped ? console.log("Select another card!") : handleClick} 
          alt="cover" />
      </div>
    </div>
  );
};

export default SingleCard;