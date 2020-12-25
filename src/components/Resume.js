import React, {Component} from 'react';
import '../App.css';

export default class Resume extends Component{

 render() {
       let resumeData = this.props.resumeData;

    return (
      <section id="resume" className="resume">
            <div className="container">
              <div className="section-title">
                <span>My Resume</span>
                <h2>My Resume</h2>
                <p>This is a summary of my resume</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="resume-title">Sumary</h3>
                  <div className="resume-item pb-0">
                    <h4>{resumeData.basic[0].name}</h4>
                    <p><em>{resumeData.basic[0].roleDescription}</em></p>
                    <p>
                    </p>
                    <p />
                  </div>
                  <h3 className="resume-title">Education</h3>
                  
                   {
            resumeData.education && resumeData.education.map((item)=>{
              return(
             <div className="resume-item">
                    <h4>{item.specialization}</h4>
                    <h5>{item.Years}</h5>
                    <p><em>{item.UniversityName}</em></p>
                    <p>{item.Achievements}</p>
                  </div>
              )
            })
          }
            
                </div>
                <div className="col-lg-6">
                  <h3 className="resume-title">Professional Experience</h3>
                       {
            resumeData.work && resumeData.work.map((item)=>{
              return(
             <div className="resume-item">
                    <h4>{item.CompanyName}</h4>
                    <h5>{item.duration}</h5>
                    <p>{item.specialization}</p>
                  </div>
              )
            })
          }
          <h3 className="resume-title">Achievements</h3>
                  <div className="resume-item">
                    <p><em>A quick view of what I have done </em></p>
                    <p>
                    <ul>
                              {
            resumeData.achievements && resumeData.achievements.map((item,index)=>{
              return(
            
                      <li>{item}</li>
                      
              )
            })
          }
           </ul>
                    </p>
                    <p />
                  </div>                  
                </div>
              </div>
            </div>
          </section>
      )
  }
}
