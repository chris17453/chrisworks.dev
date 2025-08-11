// components/source_code.jsx
import React from 'react';
import { Github, Code, GitBranch, Star } from 'lucide-react';

export const source_code_section = () => (
  <section id="source-code" className="section-padding section-gray">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">View This Site's Code</h2>
          <p className="lead">Full source code available on GitHub</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card card-professional p-5 text-center">
            <div className="mb-4">
              <Github size={64} className="text-primary" />
            </div>
            <h3 className="text-white mb-3">chrisworks.dev</h3>
            <p className="text-light mb-4">
              This portfolio is built with React, Bootstrap 5, and modern web standards. 
              The complete source code is available for review, fork, or inspiration.
            </p>
            
            <div className="d-flex justify-content-center gap-4 mb-4">
              <div className="text-center">
                <Code className="text-primary mb-2" size={32} />
                <p className="text-light small mb-0">Component-Based</p>
                <p className="text-muted small">Modular Architecture</p>
              </div>
              <div className="text-center">
                <GitBranch className="text-primary mb-2" size={32} />
                <p className="text-light small mb-0">MIT Licensed</p>
                <p className="text-muted small">Fork Friendly</p>
              </div>
              <div className="text-center">
                <Star className="text-primary mb-2" size={32} />
                <p className="text-light small mb-0">Open Source</p>
                <p className="text-muted small">Star if Useful</p>
              </div>
            </div>
            
            <div className="d-flex justify-content-center">
              <a 
                href="https://github.com/chris17453/chrisworks.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg btn-professional d-inline-flex align-items-center"
              >
                <Github className="me-2" size={20} />
                View on GitHub
              </a>
            </div>
            
            <div className="mt-4">
              <p className="text-muted small mb-0">
                Feel free to use this as a template for your own portfolio
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);