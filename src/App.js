import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, About, Contact, Blog } from './containers';
import { Navbar, Footer } from './components';

const App = () => {
  return (
    <div className='md:border-none border-2 border-black'>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
