import React from 'react';

import Nav from '../nav';
import './styles.scss';

const header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <span>FE Engineer Test 1</span>
      </div>

      <Nav />
    </header>
  );
};

export default header;
