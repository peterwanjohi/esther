import React, {Component} from 'react';
import '../App.css';

export default class Contact extends Component{
 render() {
    return (
      <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <span>Contact Me</span>
                <h2>Contact Me</h2>
                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="info-box">
                        <i className="bx bx-share-alt" />
                        <h3>Social Profiles</h3>
                        <div className="social-links">
                          <a href="#" className="twitter"><i className="icofont-twitter" /></a>
                          <a href="#" className="facebook"><i className="icofont-facebook" /></a>
                          <a href="#" className="instagram"><i className="icofont-instagram" /></a>
                          <a href="#" className="google-plus"><i className="icofont-skype" /></a>
                          <a href="#" className="linkedin"><i className="icofont-linkedin" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-envelope" />
                        <h3>Email Me</h3>
                        <p>contact@example.com</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-phone-call" />
                        <h3>Call Me</h3>
                        <p>+1 5589 55488 55</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="form-row">
                      <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                      </div>
                      <div className="col-md-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validate" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows={6} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                      <div className="validate" />
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>
      )
  }
}
