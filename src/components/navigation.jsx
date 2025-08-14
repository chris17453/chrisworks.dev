// components/navigation.jsx
import React from 'react';
import { get_nav_sections } from '../data/site_config';

export const navigation_component = ({ active_section, scroll_to_section }) => {
  const nav_sections = get_nav_sections();

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
            {nav_sections.map(section => (
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