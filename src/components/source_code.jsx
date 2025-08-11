import React, { useState, useEffect } from 'react';
import { Github, Code, GitBranch, Star, GitCommit, GitPullRequest, Terminal } from 'lucide-react';

export const SourceCodeSection = () => {
  const [hover_state, set_hover_state] = useState(false);
  const [commit_count, set_commit_count] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      set_commit_count(prev => prev >= 999 ? 0 : prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="source-code" className="section-padding section-source">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              <Terminal className="me-3" size={48} style={{ verticalAlign: 'middle' }} />
              View This Site's Code
            </h2>
            <p className="lead">Full source available • MIT Licensed • Fork it, break it, make it better</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div 
              className="github-card-container"
              onMouseEnter={() => set_hover_state(true)}
              onMouseLeave={() => set_hover_state(false)}
            >
              <div className="github-card">
                <div className="github-card-header">
                  <div className="github-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="github-title">chrisworks.dev</div>
                </div>
                
                <div className="github-card-body">
                  <div className="code-preview">
                    <pre className="code-text">
{`<Portfolio>
  <Experience years={20} />
  <Projects count={11} status="open-source" />
  <Coffee cups={${commit_count}} />
  <Bugs fixed="eventually" />
</Portfolio>`}
                    </pre>
                  </div>
                  
                  <div className="github-stats">
                    <div className="stat-item">
                      <GitCommit className={`stat-icon ${hover_state ? 'animate' : ''}`} />
                      <span>Clean Code</span>
                    </div>
                    <div className="stat-item">
                      <GitBranch className={`stat-icon ${hover_state ? 'animate' : ''}`} />
                      <span>Well Structured</span>
                    </div>
                    <div className="stat-item">
                      <GitPullRequest className={`stat-icon ${hover_state ? 'animate' : ''}`} />
                      <span>PR Welcome</span>
                    </div>
                    <div className="stat-item">
                      <Star className={`stat-icon ${hover_state ? 'animate' : ''}`} />
                      <span>Star Worthy</span>
                    </div>
                  </div>
                  
                  <div className="github-action">
                    <a 
                      href="https://github.com/chris17453/chrisworks.dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="github-button"
                    >
                      <Github className="me-2" size={24} />
                      <span>Clone This Portfolio</span>
                      <Code className="ms-2" size={20} />
                    </a>
                  </div>
                  
                  <div className="github-footer">
                    <p className="mb-0">
                      <span className="text-success">●</span> Active development
                      <span className="mx-3">|</span>
                      React + Bootstrap
                      <span className="mx-3">|</span>
                      <span className="text-warning">⚡</span> Performance optimized
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export const source_code_section = SourceCodeSection;