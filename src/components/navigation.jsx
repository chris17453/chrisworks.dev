import React from 'react';

export const NavigationComponent = ({ active_section, scroll_to_section, data, personal }) => {
  const brand_text = data.brand_text
    .replace('%first_name%', personal.first_name)
    .replace('%last_name%', personal.last_name);

  const enabled_sections = data.sections.filter(s => s.enabled);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href={data.brand_url} 
           onClick={(e) => { e.preventDefault(); scroll_to_section('home'); }}>
          {brand_text}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {enabled_sections.map(section => (
              <li key={section.id} className="nav-item">
                <a className={`nav-link ${active_section === section.id ? 'active' : ''}`}
                   href={`#${section.id}`}
                   onClick={(e) => { e.preventDefault(); scroll_to_section(section.id); }}>
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};