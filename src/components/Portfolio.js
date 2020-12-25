import React, {Component} from 'react';
import '../App.css';

export default class Portfolio extends Component{
 render() {
    return (
    <section id="portfolio" className="portfolio">
            <div className="container">
              <div className="section-title">
                <span>My Work</span>
                <h2>My Work</h2>
              </div>
            
              <div className="row portfolio-container">
            
                <div className="col-lg-4 col-md-6 portfolio-item">
                  <div className="portfolio-img"><img src="assets/img/portfolio/data.jpeg" className="img-fluid" alt=""  /></div>
                  <div className="portfolio-info">
                    <h4>Data Logger</h4>
              
                    <a href="assets/img/portfolio/data.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Data Logger"><i className="bx bx-plus" /></a>
<a href="https://github.com/enyarangi/GraduateProject" target="_blank" rel="noreferrer" className="details-link" title="More Details"><i className="bx bx-link" /></a>                  </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item">
                  <div className="portfolio-img"><img src="assets/img/portfolio/websearch.jpeg" className="img-fluid" alt="" /></div>
                  <div className="portfolio-info">
                    <h4>Web based Search Engine</h4>
                    
                    <a href="assets/img/portfolio/websearch.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Web based Search Engin"><i className="bx bx-plus" /></a>
                    <a href="https://github.com/enyarangi/kwicproject" target="_blank" rel="noreferrer" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                  </div>
                </div>

<div className="col-lg-4 col-md-6 portfolio-item">
                  <div className="portfolio-img"><img src="assets/img/portfolio/online.jpeg" className="img-fluid" alt="" /></div>
                  <div className="portfolio-info">
                    <h4>Mobile Application Programming</h4>
                       <a href="assets/img/portfolio/online.jpeg" data-gall="portfolioGallery" className="venobox preview-link" title="Mobile Application Programming"><i className="bx bx-plus" /></a>
                    <a href="https://github.com/enyarangi/mobileappproject" target="_blank" rel="noreferrer" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                  </div>
                </div>


                <div className="col-lg-4 col-md-6 portfolio-item">
                  <div className="portfolio-img"><img src="assets/img/portfolio/mystore.png" className="img-fluid" alt="" /></div>
                  <div className="portfolio-info">
                    <h4>Web Server Programming</h4>
                   
                    <a href="assets/img/portfolio/mystore.png" data-gall="portfolioGallery" className="venobox preview-link" title="Web Server Programming"><i className="bx bx-plus" /></a>
                    <a href="https://esthern-wsp20-ef0c6.firebaseapp.com/" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
      )
  }
}
