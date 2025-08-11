import React from 'react';

export const navigation_component = ({ active_section, scroll_to_section }) => {
  const format_section_name = (section) => {
    return section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => { e.preventDefault(); scroll_to_section('home'); }}>
          Chris Watkins
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {['home', 'about', 'hire-video', 'experience', 'solutions', 'projects', 'hobbies', 'source-code', 'contact'].map(section => (
              <li key={section} className="nav-item">
                <a className={`nav-link ${active_section === section ? 'active' : ''}`}
                   href={`#${section}`} 
                   onClick={(e) => { e.preventDefault(); scroll_to_section(section); }}>
                  {format_section_name(section)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};