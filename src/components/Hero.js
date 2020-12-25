import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-scroll';


export default class Hero extends Component{
 render() {
     let resumeData = this.props.resumeData;
    return (
      <section id="hero">
          <div className="hero-container">
            <h1>{resumeData.basic[0].name}</h1>
            <h2>{resumeData.basic[0].tag}</h2>

        <Link  className="btn-scroll scrollto" activeClass="active" to="about" spy={true} smooth={true} duration={1000}><i class="bx bx-chevron-down"/> </Link>

          </div>
        </section>
      )
  }
}
