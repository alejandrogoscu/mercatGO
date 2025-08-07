import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListMercats from './components/ListMercats/ListMercats';
import Layout from './components/Layout/Layout';
import { Home } from './components/Home/Home';

import DetailMercat from './components/DetailMercat/DetailMercat';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mercats" element={<ListMercats />} />
          <Route path="/details/:id" element={<DetailMercat />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
