import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <p>
          Created by
          <b>
            <a href="http:/github.com/ogzhnsfgl">
              {' '}
              Ogzhnsfgl{' '}
              <span>
                <i className="fab fa-github"></i>
              </span>
            </a>
          </b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
