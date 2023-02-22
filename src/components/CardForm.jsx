import vendorData from '../vendorData';
import { useNavigate } from 'react-router-dom';
import './css/CardForm.css';

function CardForm({ newCard, setNewCard, setFocus}) {
  const navigate = useNavigate();

  function checkVendor(e) {
    setNewCard({...newCard,
      vendor: vendorData[e].vendor,
      icon: vendorData[e].icon,
      chip: vendorData[e].chip,
      backgroundColor: vendorData[e].backgroundColor,
      color: vendorData[e].color,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cards = localStorage.getItem('cards');

    if (cards) {
      const addedCards = JSON.parse(cards);
      addedCards.push(newCard);
      localStorage.setItem('cards', JSON.stringify(addedCards));
    } else {
      localStorage.setItem('cards', JSON.stringify([newCard]));
    }

    navigate('/');
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label>
        <span>CARD NUMBER</span>
        <input 
          required
          minLength='19'
          maxLength='19'
          type='tel'
          name='number' 
          placeholder='0000 0000 0000 0000' 
          value={ newCard.cardNumber } 
          onChange={ e => setNewCard({...newCard, cardNumber: e.target.value}) } 
          onFocus={ e => setFocus(e.target.name) }
        />
      </label>

      <label>
        <span>CARDHOLDER NAME</span>
        <input 
          required
          maxLength='20'
          type='text' 
          name='name' 
          placeholder='Firstname Lastname' 
          value={ newCard.cardholderName } 
          onChange={ e => setNewCard({...newCard, cardholderName: e.target.value.toUpperCase()}) } 
          onFocus={ e => setFocus(e.target.name) }
        />
      </label>

      <article className='details'>
        <label>
          <span>VALID THRU</span>
          <input 
            required
            minLength='5'
            maxLength='5'
            type='text' 
            name='expiry' 
            placeholder='MM/YY' 
            value={ newCard.validThru } 
            onChange={ e => setNewCard({...newCard, validThru: e.target.value}) } 
            onFocus={ e => setFocus(e.target.name) }
          />
        </label>

        <label>
          <span>CCV</span>
          <input 
            required
            minLength='3'
            maxLength='3'
            type='tel' 
            name='ccv' 
            placeholder='CCV' 
            value={ newCard.ccv } 
            onChange={ e => setNewCard({...newCard, ccv: e.target.value}) } 
            onFocus={ e => setFocus(e.target.name) }
          />
        </label>
      </article>

      <label>
        <span>VENDOR</span>
        <select id='vendor' required
          onChange={ e => checkVendor(e.target.value) } >
          <option value='' hidden ></option>
          <option value='1'>Bitcoin Inc</option>
          <option value='2'>Block Chain Inc</option>
          <option value='3'>Evil Corp</option>
          <option value='4'>Ninja Bank</option>
        </select>
      </label>

      <button className='form-btn' type='submit'>Add Card</button>
    </form>
  );
}
  
export default CardForm;