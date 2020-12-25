import React, {Component} from 'react';
import '../App.css';

export default class Footer extends Component{
 render() {
         let resumeData = this.props.resumeData;

    return (
    <footer id="footer">
          <div className="container">
            <h3>{resumeData.basic[0].name} </h3>
            <p>{resumeData.basic[0].quote} </p>
            <div className="social-links">
             <a href={resumeData.basic[0].twitter} className="twitter"><i className="icofont-twitter" /></a>
                          <a href={resumeData.basic[0].facebook} target="_blank" rel="noreferrer" className="facebook"><i className="icofont-facebook" /></a>
                          <a href={resumeData.basic[0].instagram} target="_blank" rel="noreferrer"  className="instagram"><i className="icofont-instagram" /></a>
                          <a href={resumeData.basic[0].skype} target="_blank" rel="noreferrer" className="google-plus"><i className="icofont-skype" /></a>
                          <a href={resumeData.basic[0].linkedinId} target="_blank" rel="noreferrer"  className="linkedin"><i className="icofont-linkedin" /></a>
            </div>
            <div className="copyright">
             <strong><span> © Copyright 2020</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
      )
  }
}
