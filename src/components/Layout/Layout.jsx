import { Footer } from '../common/Footer';
import { Header } from '../common/Header';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout__container">
      <Header />
      <main className="layout__content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
