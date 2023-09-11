import "./Card.css";

function Card(props) {
  const { cardData, handleActiveCard, preventClick, removeCard, handleRemove } = props;

  return (
    <>
      <header className="card-top">
        {removeCard ? (
          <button className="del-btn" onClick={() => handleRemove(cardData)}>
            DELETE
          </button>
        ) : null}
      </header>

      <article className="card" style={{ backgroundColor: cardData.backgroundColor, color: cardData.color }} onClick={!preventClick ? () => handleActiveCard(cardData) : null}>
        <header className="card__header">
          <img src={cardData.chip} className="chip-icon" alt="chip icon" />
          <img src={cardData.icon} className="vendor-icon" alt="vendor icon" />
        </header>

        <p className="card__number">{cardData.cardNumber}</p>

        <div className="card__details">
          <div className="details__name">
            <span>CARDHOLDER NAME</span>
            <p>{cardData.cardholderName}</p>
          </div>

          <div className="details__date">
            <span>VALID THRU</span>
            <p>{cardData.validThru}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Card;
