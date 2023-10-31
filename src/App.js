import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './App.css';

import Success from './Components/Success';
import Player1Registration from './Components/Player1_Registration';
import Player2Registration from './Components/Player2_Registration';

const App = () => {
  return (
    <>
      <BrowserRouter> {/* Wrap your entire app in the BrowserRouter */}
        <Routes>
          <Route path="/Player1Registration" element={<Player1Registration />} />
          <Route path="/Player2Registration" element={<Player2Registration />} />
          <Route path="/Success" element={<Success />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
