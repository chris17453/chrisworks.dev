// components/projects.jsx
import React from 'react';
import { Github, Play } from 'lucide-react';

const project_card = ({ project }) => (
  <div className="col-lg-6 mb-4">
    <div className="card project-card h-100 p-0 overflow-hidden">
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-image-wrapper">
        <div className="project-image-frame">
          <img 
            src={project.image || `https://via.placeholder.com/600x400/1a1a2e/6366f1?text=${encodeURIComponent(project.name)}`}
            alt={project.name}
            className="project-image"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/600x400/1a1a2e/6366f1?text=${encodeURIComponent(project.name)}`;
            }}
          />
          <div className="project-image-overlay">
            <Github size={40} className="text-white" />
          </div>
        </div>
      </a>
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <h5 className="text-light">{project.name}</h5>
          <a href={project.url} className="text-primary" target="_blank" rel="noopener noreferrer">
            <Github size={20} />
          </a>
        </div>
        <p className="text-light small mb-3">{project.description}</p>
        <div className="d-flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const projects_section = ({ project_categories }) => (
  <section id="projects" className="section-padding section-dark">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">Open Source Projects</h2>
          <p className="lead">Demonstrating technical depth across multiple domains</p>
        </div>
      </div>
      
      {project_categories.map((category, cat_index) => (
        <div key={cat_index} className="mb-5">
          <h3 className="h3 mb-4 d-flex align-items-center">
            {category.icon}
            {category.category}
          </h3>
          <div className="row">
            {category.projects.map((project, proj_index) => (
              <React.Fragment key={proj_index}>{project_card({ project })}</React.Fragment>
            ))}
          </div>
        </div>
      ))}
      
      <div className="mt-5">
        <h3 className="h3 mb-4 d-flex align-items-center">
          <Play className="me-2" size={20} />
          Technical Demonstrations
        </h3>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card project-card p-0 overflow-hidden">
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/JJKnIDl8ob0" 
                  title="Technical Deep Dive"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h5 className="text-light">Technical Deep Dive</h5>
                <p className="text-light small">Demonstrating complex system integration and problem-solving approach</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-4">
            <div className="card project-card p-0 overflow-hidden">
              <div className="ratio ratio-16x9">
                <iframe 
                  src="https://www.youtube.com/embed/tTli8XvmKPs" 
                  title="Infrastructure Automation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h5 className="text-light">Infrastructure Automation</h5>
                <p className="text-light small">Live automation and deployment workflows in action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);