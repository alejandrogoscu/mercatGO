import { Card, Button } from 'antd';
const { Meta } = Card;
import { useNavigate } from 'react-router-dom';
import './CardMercat.css';

const CardMercat = ({ mercat, onToggleVisited }) => {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    window.scrollTo(0, 0);
    navigate(`/details/${mercat.id}`);
  };

  return (
    <Card
      className="card__container"
      style={{
        width: 300,
        boxShadow: '0 4px 12px 0 rgba(36, 36, 36, 0.5)',
      }}
      cover={<img alt={mercat.nombre} src={mercat.imagen} />}
    >
      <Meta
        className="card__title"
        title={mercat.nombre}
        description={
          <>
            <p className="card__info">{mercat.fecha}</p>
          </>
        }
      />
      <div className="card__btns">
        <Button className="card__btn-details" onClick={handleDetailsClick}>
          Detalles
        </Button>
        <Button key="visited" type={mercat.visited ? 'primary' : 'default'} onClick={() => onToggleVisited(mercat.id)}>
          {mercat.visited ? 'No visitado' : 'Visitado'}
        </Button>
      </div>
    </Card>
  );
};

export default CardMercat;
