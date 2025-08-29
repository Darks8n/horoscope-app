import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BirthDetails from './pages/BirthDetails';
import AIInsights from './pages/AIInsights';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign/:signId" element={<BirthDetails />} />
            <Route path="/ai" element={<AIInsights />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;