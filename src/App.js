import React from "react";
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Certificat from './components/certificats/Certificat';
import Services from './components/services/Services';

function App() {
  return (
    <div data-testid="app-component">
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Certificat />
    <Contact />
    <br />
    <br />
    <br />
    </div>
  );
}

export default App;
