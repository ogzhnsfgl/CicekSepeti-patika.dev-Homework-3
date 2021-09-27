import './scss/main.scss';
import CardList from './components/CardList';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CardList />

      <Footer />
    </div>
  );
}

export default App;
