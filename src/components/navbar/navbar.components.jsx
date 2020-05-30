import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark" style={{ background: '#6CAF9B' }}>
      <span className="navbar-brand mb-0 h1 mx-auto">
        <a href="/" style={{ textDecoration: 'none', color: '#fff' }}>
          LyricFinder
        </a>
      </span>
    </nav>
  );
};

export default Navbar;
