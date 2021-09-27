import { useEffect, useState } from 'react';
import { useCardList } from '../context/CardContext';

const Navbar = () => {
  const { filterCard } = useCardList();
  const [input, setInput] = useState('');

  useEffect(() => {
    filterCard(input);
  }, [input]);

  return (
    <header className="header">
      <div className="header-wrapper">
        <p className="header-logo">higher</p>
        <div className="header-input-group">
          <i className="fas fa-search"></i>
          <input
            type="search"
            name="search"
            className="header-input"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="header-social-menu">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-spotify fa-2x"></i>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
