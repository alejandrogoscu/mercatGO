import { Link } from 'react-router-dom';
import logo from '../../assets/favicon.png';
import './Header.css';

export const Header = () => {
  return (
    <header className="header__container">
      <div className="header__wrap">
        <Link to={'/'}>
          <img className="header__logo" alt="Una cesta con productos minimalista" src={logo} />
          <h1 className="header__title">mercatGO</h1>
        </Link>
      </div>
    </header>
  );
};
