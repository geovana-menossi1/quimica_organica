import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul className="nav-left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/compostos">Compostos</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
      </ul>
      <ul className="nav-right">
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
