import { useSelector, useDispatch } from 'react-redux';
import { toggleVisited } from '../../features/mercatsSlice';
import { Select, Space } from 'antd';
import { useState, useEffect, useMemo } from 'react';
import CardMercat from '../CardMercat/CardMercat';
import './ListMercats.css';

const ListMercats = () => {
  const allMercats = useSelector((state) => state.mercats.mercats);
  const dispatch = useDispatch();

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
        sessionStorage.removeItem('scrollPosition');
      }, 100);
    }
  });

  const handleToggleVisited = (id) => {
    dispatch(toggleVisited(id));
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredMercats = useMemo(() => {
    switch (filter) {
      case 'visited':
        return allMercats.filter((mercat) => mercat.visited);
      case 'notVisited':
        return allMercats.filter((mercat) => !mercat.visited);
      case 'all':
      default:
        return allMercats;
    }
  }, [filter, allMercats]);

  return (
    <div className="list__container">
      <Space wrap style={{ marginBottom: '5px' }}>
        <Select
          defaultValue="all"
          style={{ width: 150 }}
          onChange={handleFilterChange}
          options={[
            { value: 'all', label: 'Todos' },
            { value: 'visited', label: 'Visitados' },
            { value: 'notVisited', label: 'No visitados' },
          ]}
        />
      </Space>
      <div className="list__cards-container">
        {filteredMercats.map((mercat) => (
          <CardMercat key={mercat.id} mercat={mercat} onToggleVisited={handleToggleVisited} />
        ))}
      </div>
    </div>
  );
};

export default ListMercats;
