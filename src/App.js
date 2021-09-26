import './scss/main.scss';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardList />
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
