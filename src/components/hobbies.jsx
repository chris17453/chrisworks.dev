import React from 'react';
import { Cpu, Sparkles, Keyboard, Github, Youtube } from 'lucide-react';

const get_hobby_icon = (icon_name) => {
  const icons = {
    cpu: <Cpu size={40} className="text-white" />,
    sparkles: <Sparkles size={40} className="text-white" />,
    keyboard: <Keyboard size={40} className="text-white" />
  };
  return icons[icon_name] || <Cpu size={40} className="text-white" />;
};

const hobby_card = ({ hobby }) => (
  <div className="col-lg-4 mb-4">
    <div className="card hobby-card h-100 p-0 overflow-hidden">
      <div className="hobby-image-wrapper">
        <img
          src={hobby.image || `https://via.placeholder.com/400x300/1a1a2e/00ff88?text=${encodeURIComponent(hobby.name)}`}
          alt={hobby.name}
          className="hobby-image"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/400x300/1a1a2e/00ff88?text=${encodeURIComponent(hobby.name)}`;
          }}
        />
        <div className="hobby-image-overlay">
          {get_hobby_icon(hobby.icon)}
        </div>
      </div>
      <div className="p-4">
        <h5 className="text-light mb-3">{hobby.name}</h5>
        <p className="text-light small mb-3">{hobby.description}</p>
        <a
          href={hobby.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary btn-sm d-inline-flex align-items-center"
        >
          {hobby.type === 'github' ? <Github size={16} className="me-2" /> : <Youtube size={16} className="me-2" />}
          View {hobby.type === 'github' ? 'Code' : 'Demo'}
        </a>
      </div>
    </div>
  </div>
);

export const HobbiesSection = ({ hobbies_data, data }) => {
  return (
    <section id="hobbies" className="section-padding section-hobbies">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">{data.title}</h2>
            <p className="lead">{data.subtitle}</p>
          </div>
        </div>
        <div className="row">
          {hobbies_data.map((hobby, index) => (
            <React.Fragment key={index}>{hobby_card({ hobby })}</React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};