import './css/CardStack.css';

function CardStack({ cardComponents }) {

  return (
    <section className="card-stack">
      { cardComponents }
    </section>
  );
}
  
export default CardStack;