import React from 'react';

const experience_card = ({ job }) => (
  <div className="experience-item">
    <div className="row">
      <div className="col-lg-8">
        <h4 className="experience-title">{job.title}</h4>
        <h5 className="experience-company">{job.company}</h5>
        <p className="experience-description mb-3">{job.description}</p>
        <ul className="mb-3">
          {job.achievements.map((achievement, index) => (
            <li key={index} className="experience-description">{achievement}</li>
          ))}
        </ul>
        <div className="d-flex flex-wrap gap-2">
          {job.tech.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
      <div className="col-lg-4 text-lg-end">
        <div className="experience-date">{job.date}</div>
        <div className="experience-date">{job.location}</div>
      </div>
    </div>
  </div>
);

export const experience_section = ({ professional_experience }) => (
  <section id="experience" className="section-padding section-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">Professional Experience</h2>
          <p className="lead">20+ years of enterprise technology leadership</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {professional_experience.map((job, index) => (
            <div key={index}>{experience_card({ job })}</div>
          ))}
        </div>
      </div>
    </div>
  </section>
);