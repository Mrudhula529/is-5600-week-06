import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black-90 white pa3 flex items-center justify-between">
      <h1 className="ma0 f4"><Link to="/" className="white">Products Lab</Link></h1>
      <nav>
        <Link to="/" className="white dim">Home</Link>
      </nav>
    </header>
  );
};

export default Header;
