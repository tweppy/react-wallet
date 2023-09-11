import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import CardStack from "../components/CardStack/CardStack";
import vendorData from "../vendorData";
import "../App.css";

function Home() {
  const [savedCards, setSavedCards] = useState([]);
  const [activeCard, setActiveCard] = useState(vendorData[0]);
  const navigate = useNavigate();

  useEffect(() => {
    const cards = localStorage.getItem("cards");
    if (cards !== null) {
      const addedCards = JSON.parse(cards);
      setSavedCards(addedCards);
    }
  }, []);

  const cardComponents = savedCards.map((card) => {
    if (card !== activeCard) {
      return <Card cardData={card} key={card.cardNumber} handleActiveCard={() => handleActiveCard(card)} />;
    }
  });

  function handleActiveCard(card) {
    setActiveCard(card);
  }

  function handleNav() {
    navigate("/add-card");
  }

  function handleRemove(cardData) {
    const cardToRemove = cardData.cardNumber;

    const updatedSavedCards = savedCards.filter((card) => card.cardNumber !== cardToRemove);

    localStorage.setItem("cards", JSON.stringify(updatedSavedCards));
    setActiveCard(vendorData[0]);
    setSavedCards(updatedSavedCards);
  }

  return (
    <div className="container">
      <Header title="E-WALLET" text={activeCard !== vendorData[0] ? "ACTIVE CARD" : "NO ACTIVE CARD"} />

      {activeCard.cardNumber ? (
        <Card cardData={activeCard} preventClick={activeCard} removeCard={activeCard} handleRemove={handleRemove} />
      ) : (
        <h1 className="wallet-content-text">{savedCards.length === 0 ? "YOUR WALLET IS EMPTY" : "SELECT A CARD"}</h1>
      )}

      <CardStack cardComponents={cardComponents} />

      <button className="add-card-btn" onClick={handleNav}>
        ADD A NEW CARD
      </button>
    </div>
  );
}

export default Home;
