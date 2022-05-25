import React from 'react';
import About from '../Home/About/About';
import Contact from '../Home/Contact/Contact';
import Experience from '../Home/Experience/Experience';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import Nav from '../Home/Nav/Nav';
import Portfolio from '../Home/Portfolio/Portfolio';

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
