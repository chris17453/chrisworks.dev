import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const contact_section = ({ email_addr }) => (
  <section id="contact" className="section-padding section-contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-4 text-white">Ready to Solve Your Next Challenge</h2>
          <p className="lead text-white">
            Available for principal engineer, staff engineer, or technical leadership roles. 
            Remote preferred, open to hybrid arrangements.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card contact-card p-4 h-100">
                <h4 className="text-white mb-3">What I'm Looking For</h4>
                <ul className="list-unstyled text-white">
                  <li className="mb-2">• Hard problems with no clear playbook</li>
                  <li className="mb-2">• Enterprise systems worth building</li>
                  <li className="mb-2">• Teams that value adaptability</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card contact-card p-4 h-100">
                <h4 className="text-white mb-3">What You Get</h4>
                <ul className="list-unstyled text-white">
                  <li className="mb-2">• 25 years of problem solving experience</li>
                  <li className="mb-2">• Deep technical skills across the stack</li>
                  <li className="mb-2">• Enterprise architecture expertise</li>
                  <li className="mb-2">• Someone who adapts to needs</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href={`mailto:${email_addr}`} className="contact-link-button">
                <Mail className="me-2" size={20} />
                chris@watkinslabs.com
              </a>
              <a href="tel:(877) 731-4155" className="contact-link-button">
                <Phone className="me-2" size={20} />
                (877) 731-4155
              </a>
              <a href="https://watkinslabs.com" className="contact-link-button" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="me-2" size={20} />
                watkinslabs.com
              </a>

              <a href="https://www.linkedin.com/in/chris17453/recent-activity/all/" className="contact-link-button" target="_blank" rel="noopener noreferrer">
              
              <ExternalLink className="me-2" size={20} />
              LinkedIn Stalking
              </a>

            </div>
            <div className="mt-3">
              <span className="text-white d-flex align-items-center justify-content-center">
                <MapPin className="me-2" size={20} />
                Sugar Hill, GA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);