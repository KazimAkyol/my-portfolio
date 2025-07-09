import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">Anasayfa</a></li>
        <li><a href="#about">Hakkımda</a></li>
        <li><a href="#projects">Projeler</a></li>
        <li><a href="#contact">İletişim</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
