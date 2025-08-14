import React from 'react';

export const ExperienceSection = ({ professional_experience, data, personal }) => {
  const subtitle = data.subtitle_template.replace('%years%', personal.years_experience);
  
  return (
    <section id="experience" className="section-padding section-experience">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">{data.title}</h2>
            <p className="lead">{subtitle}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              {professional_experience.map((job, index) => (
                <div key={index} className="badge bg-primary p-3 text-start" style={{fontSize: '1rem', maxWidth: '100%'}}>
                  <div className="fw-bold">{job.company}</div>
                  <div className="small">{job.title}</div>
                  <div className="small opacity-75">{job.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
   