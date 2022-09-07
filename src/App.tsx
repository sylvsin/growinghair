import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Manual from './Components/Manual/Manual';
import Nav from './Components/Nav/Nav';

// const baseURL: string = "https://medieinstitutet-wie-products.azurewebsites.net/api/";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/:slug" element={<Manual />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
