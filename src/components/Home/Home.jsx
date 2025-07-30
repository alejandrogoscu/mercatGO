import { Button } from 'antd';
import { Header } from '../common/Header';
import imgHome from '../../assets/imgHome1.png';
import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  const handleHomeButtonClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <div className="home__container">
        <img className="home__img" alt="Gente comprando en puestos de mercado de Valencia" src={imgHome} />
        <div className="home__info">
          <h2>
            Descubre los mercados municipales de Valencia con <strong className="info__strong">mercatGO</strong>.
          </h2>
          <p>
            Explorar la riqueza local que esconde cada barrio.Podrás conocer la historia, los productos y los secretos
            de cada mercado, organizar tu propia ruta y vivir la auténtica experiencia valenciana entre puestos de
            frutas, flores, embutidos y tradición.
          </p>
        </div>
        <Link to="/mercats">
          <Button className="home__btn" onClick={handleHomeButtonClick}>
            Vive los mercados
          </Button>
        </Link>
      </div>
    </>
  );
};
