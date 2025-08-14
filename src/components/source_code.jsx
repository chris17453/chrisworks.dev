// components/source_code.jsx
import React, { useState, useEffect } from 'react';
import { Github, Code, GitBranch, Star, GitCommit, GitPullRequest, Terminal } from 'lucide-react';

export const SourcecodeSection = ({ data }) => {
  const [hover_state, set_hover_state] = useState(false);
  const [commit_count, set_commit_count] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      set_commit_count(prev => prev >= 999 ? 0 : prev + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Process code preview template
  const get_code_preview = () => {
    let preview = data.code_preview.template;
    Object.entries(data.code_preview.dynamic_values).forEach(([key, value]) => {
      const actual_value = value === 'counter' ? commit_count : value;
      preview = preview.replace(`%${key}%`, actual_value);
    });
    return preview;
  };

  // Map icon names to components
  const get_icon = (icon_name) => {
    const icons = {
      'GitCommit': GitCommit,
      'GitBranch': GitBranch,
      'GitPullRequest': GitPullRequest,
      'Star': Star
    };
    const IconComponent = icons[icon_name] || GitCommit;
    return <IconComponent className={`stat-icon ${hover_state ? 'animate' : ''}`} />;
  };

  return (
    <section id="source-code" className="section-padding section-source">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">
              <Terminal className="me-3" size={48} style={{ verticalAlign: 'middle' }} />
              {data.title}
            </h2>
            <p className="lead">{data.subtitle}</p>
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
                  <div className="github-title">{data.repo_name}</div>
                </div>

                <div className="github-card-body">
                  <div className="code-preview">
                    <pre className="code-text">{get_code_preview()}</pre>
                  </div>

                  <div className="github-stats">
                    {data.stats.map((stat, index) => (
                      <div key={index} className="stat-item">
                        {get_icon(stat.icon)}
                        <span>{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="github-action">
                    <a
                      href={data.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-button"
                    >
                      <Github className="me-2" size={24} />
                      <span>{data.cta_text}</span>
                      <Code className="ms-2" size={20} />
                    </a>
                  </div>

                  <div className="github-footer">
                    <p className="mb-0">
                      {data.status_indicators.map((indicator, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <span className="mx-3">|</span>}
                          {indicator.icon === 'active' && <span className="text-success">●</span>}
                          {indicator.icon === 'performance' && <span className="text-warning">⚡</span>}
                          {' ' + indicator.text}
                        </React.Fragment>
                      ))}
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