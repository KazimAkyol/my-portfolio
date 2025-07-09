import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* İleride Projeler ve İletişim sayfaları da buraya eklenecek */}
    </div>
  );
};

export default App;
