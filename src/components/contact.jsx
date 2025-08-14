import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export const ContactSection = ({ data, personal, email_addr }) => (
  <section id="contact" className="section-padding section-contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-4 text-white">{data.headline}</h2>
          <p className="lead text-white">{data.subheadline}</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card contact-card p-4 h-100">
                <h4 className="text-white mb-3">{data.looking_for.title}</h4>
                <ul className="list-unstyled text-white">
                  {data.looking_for.items.map((item, index) => (
                    <li key={index} className="mb-2">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card contact-card p-4 h-100">
                <h4 className="text-white mb-3">{data.offering.title}</h4>
                <ul className="list-unstyled text-white">
                  {data.offering.items.map((item, index) => (
                    <li key={index} className="mb-2">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a href={`mailto:${email_addr}`} className="contact-link-button">
                <Mail className="me-2" size={20} />
                {email_addr}
              </a>
              <a href={`tel:${personal.phone.replace(/[^0-9]/g, '')}`} className="contact-link-button">
                <Phone className="me-2" size={20} />
                {personal.phone}
              </a>
              <a href={personal.company_url} className="contact-link-button" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="me-2" size={20} />
                {personal.company}
              </a>
              {data.linkedin_activity && (
                <a href={data.linkedin_activity.url} className="contact-link-button" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="me-2" size={20} />
                  {data.linkedin_activity.text}
                </a>
              )}
            </div>
            <div className="mt-3">
              <span className="text-white d-flex align-items-center justify-content-center">
                <MapPin className="me-2" size={20} />
                {personal.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
