import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListMercats from './components/ListMercats/ListMercats';
import { Header } from './components/common/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/common/Footer';
import DetailMercat from './components/DetailMercat/DetailMercat';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mercats" element={<ListMercats />} />
        <Route path="/details/:id" element={<DetailMercat />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
