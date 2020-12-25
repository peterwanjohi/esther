import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-scroll';

export default class Header extends Component{
 render() {
    return (
      <header id="header" className="fixed-top  d-flex justify-content-center align-items-center header-transparent">
        <nav className="navigation-menu  d-none d-lg-block">
          <ul>
           <li><Link className="navigation-menu" activeClass="active" to="hero" spy={true} smooth={true} duration={1000}>Home </Link></li>
            <li><Link className="navigation-menu" activeClass="about" to="about" spy={true} smooth={true} duration={1000}>About </Link></li>
           <li><Link className="navigation-menu" activeClass="active" to="resume" spy={true} smooth={true} duration={1000}>Resume </Link></li>
           <li><Link className="navigation-menu" activeClass="active" to="portfolio" spy={true} smooth={true} duration={1000}>Portfolio </Link></li>
            <li><Link className="navigation-menu" activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact </Link></li>
          </ul>
        </nav>
      </header>
      )
  }
}
