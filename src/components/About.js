import React, {Component} from 'react';
import '../App.css';

export default class About extends Component{
 render() {
   let resumeData = this.props.resumeData;
    return (
      <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <span>About Me</span>
                <h2>About Me</h2>
              </div>
              <div className="row">
                <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start" />
                <div className="col-lg-8 d-flex flex-column align-items-stretch">
                  <div className="content pl-lg-4 d-flex flex-column justify-content-center">
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li><i className="icofont-rounded-right" /> <strong>Name: </strong> {resumeData.basic[0].name}</li>
                          <li><i className="icofont-rounded-right" /> <strong>Website:</strong> {resumeData.basic[0].website}</li>
                          <li><i className="icofont-rounded-right" /> <strong>Address: </strong>{resumeData.basic[0].address}</li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>
                          <li><i className="icofont-rounded-right" /> <strong>Phone: </strong>{resumeData.basic[0].phone}</li>
                          <li><i className="icofont-rounded-right" /> <strong>Degree:</strong> Master</li>
                          <li><i className="icofont-rounded-right" /> <strong>Email:</strong> {resumeData.basic[0].email}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="row mt-n4">
                      <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <a href= {resumeData.socialLinks[0].url} target="_blank">
                          <i className={resumeData.socialLinks[0].className} />
                          <span data-toggle="counter-up"> {resumeData.socialLinks[0].name}</span></a> 
                      <p><strong>Programmng experience:</strong> Check out my complete projects' source  code on my respository.</p>

                        </div>
                      </div>
                      <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <a href= {resumeData.socialLinks[1].url} target="_blank">
                          <i className={resumeData.socialLinks[1].className} />
                          <span data-toggle="counter-up"> {resumeData.socialLinks[1].name}</span></a> 
                          <p><strong>Profession: </strong>Visit my profile for more details. </p>
                        </div>
                      </div>
                      <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <div className="count-box">
                          <a href= {resumeData.socialLinks[2].url} target="_blank">
                          <i className={resumeData.socialLinks[2].className} />
                          <span data-toggle="counter-up"> {resumeData.socialLinks[2].name}</span></a> 
                        </div>
                          <p><strong>Live:</strong>Follow me on instagram.</p>
                        </div>
                      </div>
                      <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                        <div className="count-box">
                          <div className="count-box">
                          <a href= {resumeData.socialLinks[3].url} target="_blank">
                          <span className="iconify" data-icon="ic-baseline-email" data-inline="false" />
                          <i className={resumeData.socialLinks[3].className}/>
                          <span data-toggle="counter-up"> {resumeData.socialLinks[3].name}</span></a> 
                        </div>
                          <p><strong>Lets connect:</strong> Connect with me today!!</p>
                        </div>
                      </div>
                    </div>
                  </div>{/* End .content*/}
                  <div className="skills-content pl-lg-4">
                      {
            resumeData.skills && resumeData.skills.map((item)=>{
              return(
              <div className="progress">
                      <span className="skill">{item.skillname} <i className="val">{item.skilllevel}</i></span>
                      <div className="progress-bar-wrap">
                      <div className="progress-bar " role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: item.skilllevel}}></div>
                      </div>
                    </div>
              )
            })
          }
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
      )
  }
}
