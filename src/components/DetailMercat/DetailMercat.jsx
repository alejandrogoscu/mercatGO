import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleVisited } from '../../features/mercatsSlice';
import { Card, Button } from 'antd';
import './DetailMercat.css';

const DetailMercat = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const numId = parseInt(id, 10);

  const mercat = useSelector((state) => state.mercats.mercats.find((m) => m.id === numId));

  const handleToggleVisited = () => {
    dispatch(toggleVisited(numId));
  };

  const getGoogleMapsUrl = (address) => {
    const encodedAddress = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  };

  return (
    <div className="detail__container">
      <Card
        className="detail__card"
        /* style={{
          width: 340,
          boxShadow: '0 4px 12px 0 rgba(36, 36, 36, 0.5)',
          maxWidth: '800px',
        }} */
        cover={
          <img
            alt={mercat.nombre}
            src={mercat.imagen}
            style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }}
          />
        }
        actions={[
          <Button key="back" onClick={() => navigate(-1)}>
            Volver
          </Button>,
          <Button key="visited" type={mercat.visited ? 'primary' : 'default'} onClick={handleToggleVisited}>
            {mercat.visited ? 'No visitado' : 'Visitado'}
          </Button>,
        ]}
      >
        <Card.Meta
          title={mercat.nombre}
          description={
            <>
              <div className="detail__info">
                <p>
                  <strong className="detail__strong">Fecha de construcción:</strong>
                </p>
                <p>{mercat.fecha}</p>
              </div>

              <div className="detail__info">
                <p>
                  <strong className="detail__strong">Información general:</strong>
                </p>
                <p>{mercat.info}</p>
              </div>

              <div className="detail__info">
                <p>
                  <strong className="detail__strong">Arquitectura:</strong>
                </p>
                <p>{mercat.arquitectura}</p>
              </div>

              <div className="detail__info">
                <p>
                  <strong className="detail__strong">Dirección: </strong>
                  <a
                    className="detail__address"
                    href={getGoogleMapsUrl(mercat.direccion)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#1677ff' }}
                  >
                    {mercat.direccion}
                  </a>
                </p>
              </div>
            </>
          }
        />
      </Card>
    </div>
  );
};

export default DetailMercat;
