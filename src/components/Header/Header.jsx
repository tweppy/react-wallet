import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { title, text } = props;
  const navigate = useNavigate();

  function handleNav() {
    navigate("/");
  }

  return (
    <header className="header">
      <button onClick={handleNav} className="home-btn">
        HOME
      </button>
      <h1>{title}</h1>
      <p className="header__text">{text}</p>
    </header>
  );
}

export default Header;
