// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './subcomponent/footer/Footer';
import Header from './subcomponent/header/Header';
import Singlepage from './subcomponent/singlepage/Singlepage';
import Login from './subcomponent/login/Login';
import Signup from './subcomponent/login/Signup';




function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path="/singlepage/:imgid" element={<Singlepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
