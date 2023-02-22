import { useNavigate } from 'react-router-dom';
import './css/Top.css';

function Top(props) {
  const { title, text } = props;
  const navigate = useNavigate();

  function handleNav() {
    navigate('/');
  }

  return (
    <header className='top'>
      <button onClick={ handleNav } className='home-btn'>HOME</button>
      <h1>{ title }</h1>
      <p className='top__text'>{ text }</p>
    </header>
  );
}
  
export default Top;