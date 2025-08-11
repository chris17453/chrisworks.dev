// components/solutions.jsx
import React from 'react';

const solution_card = ({ solution }) => (
  <div className="col-lg-6 mb-4">
    <div className="card card-professional h-100 p-4">
      <h4 className="text-primary mb-3">{solution.title}</h4>
      <p className="text-light mb-3">{solution.description}</p>
      <div className="mb-3">
        <strong className="text-success">Impact: </strong>
        <span className="text-light">{solution.impact}</span>
      </div>
      <div className="d-flex flex-wrap gap-2">
        {solution.tech.map((tech, index) => (
          <span key={index} className="tech-badge">{tech}</span>
        ))}
      </div>
    </div>
  </div>
);

export const solutions_section = ({ enterprise_solutions }) => (
  <section id="solutions" className="section-padding section-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">Enterprise Solutions</h2>
          <p className="lead">Key projects that demonstrate enterprise-scale problem solving</p>
        </div>
      </div>
      <div className="row">
        {enterprise_solutions.map((solution, index) => (
          <React.Fragment key={index}>{solution_card({ solution })}</React.Fragment>
        ))}
      </div>
    </div>
  </section>
);