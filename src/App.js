import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './pages/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import LoginForm from './pages/LoginForm';
import Signup from './pages/Signup';
import Buyingpage from './pages/Buyingpage';
import Product from './pages/Product';
import Footer from './pages/Footer';
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Nav />}>  
      <Route  path='/' element={<Footer />} >
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Route>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/buy' element={<Buyingpage />} />
        <Route path='/product' element={<Product />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
