import { useState } from 'react';
import Top from '../components/Top';
import Card from '../components/Card';
import CardForm from '../components/CardForm';
import vendorData from '../vendorData';
import '../App.css';

function AddCard() {
  const [focus, setFocus] = useState('');
  const [newCard, setNewCard] = useState({
    vendor: vendorData[1].vendor,
    icon: vendorData[1].icon,
    chip: vendorData[1].chip,
    backgroundColor: '#999',
    color: '#000',
    cardNumber: '',
    cardholderName: '',
    validThru: '',
    ccv: '',
  });

  return (
    <div className='container'>
      <Top 
        title='ADD NEW CARD'
        text='NEW CARD'
      />

      <Card 
        cardData={ newCard }
        preventClick={ newCard }
        focused={ focus }
      />

      <CardForm 
        newCard={ newCard }
        setNewCard={ setNewCard }
        setFocus={ setFocus }
      />
    </div>
  );
}
  
export default AddCard;