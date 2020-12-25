import React, {Component} from 'react';
import '../App.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

export default class Contact extends Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    };
  }

  toastifySuccess() {
    toast.success('Your message has been sent successfully', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  }

  toastifyFail() {
    toast.error('Your message could not be sent. Please try again!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  }

  handleSubmit = (e) => {

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, subject, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      emailjs.send('service_o6vjm3o', 'template_g9u54wr', templateParams, 'user_royToYOO7WqVDfrF7w950');

      this.resetForm();
      this.toastifySuccess();
    } else {
      // Handle form validation failure
      this.toastifyFail();
    }
  };

  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange = (e) => {
    e.preventDefault();
  
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'subject':
        formErrors.subject = value.length < 1 ? 'Please enter a subject.' : '';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };


 render() {
       let resumeData = this.props.resumeData;
const {formErrors} = this.state;
    return (
      <section id="contact" className="contact">
            <div className="container">
              <div className="section-title">
                <span>Contact Me</span>
                <h2>Contact Me</h2>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="info-box">
                        <i className="bx bx-share-alt" />
                        <h3>Social Profiles</h3>
                        <div className="social-links">
                          <a href={resumeData.basic[0].facebook} target="_blank" rel="noreferrer" className="facebook"><i className="icofont-facebook" /></a>
                          <a href={resumeData.basic[0].instagram} target="_blank" rel="noreferrer"  className="instagram"><i className="icofont-instagram" /></a>
                          <a href={resumeData.basic[0].linkedinId} target="_blank" rel="noreferrer"  className="linkedin"><i className="icofont-linkedin" /></a>
                          <a href={resumeData.basic[0].github} target="_blank" rel="noreferrer"  className="google-plus"><i className="icofont-github" /></a>

            </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-envelope" />
                        <h3>Email Me</h3>
                        <p>{resumeData.basic[0].email}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-phone-call" />
                        <h3>Call Me</h3>
                        <p>{resumeData.basic[0].phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                <form  className="php-email-form mt-4" noValidate onSubmit={this.handleSubmit} >
                      <div className="form-row">
                        <div className="col-md-6 form-group">
                          <input type="text" name="name" onChange={this.handleChange}  value={this.state.name} className={`form-control formInput ${formErrors.name .length > 0 ? 'form-control error' : "form-control"}`} id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"  />
                          <div className="validate" />
                        </div>
                        <div className="col-md-6 form-group">
                          <input type="email"onChange={this.handleChange}  className={`form-control formInput ${formErrors.email .length > 0 ? 'form-control error' : "form-control"}`}  value={this.state.email} name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"  />
                          <div className="validate" />
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="text"onChange={this.handleChange} className={`form-control formInput ${formErrors.subject .length > 0 ? 'form-control error' : "form-control"}`} value={this.state.subject} name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate" />
                      </div>
                      <div className="form-group">
                        <textarea onChange={this.handleChange} className={`form-control formInput ${formErrors.message .length > 0 ? 'form-control error' : "form-control"}`} name="message" value={this.state.message} rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                        <div className="validate" />
                      </div>
                      <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div className="text-center">
                        <button type="button" onClick={this.handleSubmit}>Send Message</button>
                        </div>
                  </form>
                   <ToastContainer />     
                </div>
              </div>
            </div>
          </section>
      )
  }
}
