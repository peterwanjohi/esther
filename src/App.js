import logo from './logo.svg';
import React, {Component} from 'react'
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import resumeData from './resumeData';
import { Link } from 'react-scroll';

class App extends Component {
render() {
    return (
      <div>  
        <Header/>
        <Hero resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio resumeData={resumeData}/>
        <Contact resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
        <Link className="back-to-top" activeClass="active" to="hero" spy={true} smooth={true} duration={1000}><i className="icofont-simple-up" /> </Link>
      </div>
    );
  }

}

export default App;
