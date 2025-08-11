import React from 'react';

export const hero_section = ({ scroll_to_section }) => (
  <section id="home" className="bg-gradient-primary min-vh-100 d-flex align-items-center">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold mb-4">Principal Engineer & Technical Leader</h1>
          <p className="lead mb-4">
            I lived 20+ years solving enterprise technology problems. I adapt to what you actually need 
            rather than what we originally planned. Available, for principal engineer, 
            staff engineer, or technical leadership roles.
          </p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <span className="badge bg-primary fs-6 py-2 px-3">20+ Years Experience</span>
            <span className="badge bg-secondary fs-6 py-2 px-3">Enterprise Scale</span>
            <span className="badge bg-success fs-6 py-2 px-3">Remote/Hybrid Ready</span>
          </div>
          <div className="d-flex gap-3">
            <button className="btn btn-light btn-professional" onClick={() => scroll_to_section('contact')}>
              Hire Me
            </button>
            <button className="btn btn-outline-light btn-professional" onClick={() => scroll_to_section('projects')}>
              View Projects
            </button>
          </div>
        </div>
        <div className="col-lg-4 text-center">
          <img src="/static/chris.webp" alt="Chris Watkins" className="profile-photo rounded-circle" />
        </div>
      </div>
    </div>
  </section>
);