import { memo } from 'react';

const Navbar = ({ input, setInput }) => {
  const handleInput = (e) => {
    setInput(e.target.value);
  };

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
            value={input}
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div className="header-social-menu">
          <a
            href="https://open.spotify.com/user/ogzhnn?si=84b3b2fe6cfb4f87"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-spotify fa-2x"></i>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
          <a
            href="https://twitter.com/ogzhnn_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default memo(Navbar);
