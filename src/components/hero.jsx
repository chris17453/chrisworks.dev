// components/hero.jsx
import React, { useState, useEffect } from 'react';

const TerminalTypewriter = () => {
  const [display_text, set_display_text] = useState('');
  const [current_line, set_current_line] = useState(0);
  const [typing, set_typing] = useState(true);
  
  const terminal_lines = [
    '$ whoami',
    'chris_watkins',
    '$ experience --years',
    '24+',
    '$ skills --list',
    'linux, kubernetes, openshift, VMWare, aws, terraform, ansible, python, golang, php, c, c# ' ,
    '$ availability --status',
    'ready_for_new_challenges',
    '$ contact --hire',
    'Initializing connection...'
  ];
  
  useEffect(() => {
    if (current_line >= terminal_lines.length) {
      setTimeout(() => {
        set_display_text('');
        set_current_line(0);
      }, 3000);
      return;
    }
    
    const line = terminal_lines[current_line];
    let char_index = 0;
    
    const typing_interval = setInterval(() => {
      if (char_index <= line.length) {
        set_display_text(prev => {
          const lines = prev.split('\n');
          if (current_line > 0 && lines.length === current_line) {
            return prev + '\n' + line.substring(0, char_index);
          } else if (lines.length === current_line + 1) {
            lines[current_line] = line.substring(0, char_index);
            return lines.join('\n');
          } else {
            return line.substring(0, char_index);
          }
        });
        char_index++;
      } else {
        clearInterval(typing_interval);
        setTimeout(() => {
          set_current_line(prev => prev + 1);
        }, 800);
      }
    }, 50);
    
    return () => clearInterval(typing_interval);
  }, [current_line]);
  
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red"></span>
        <span className="terminal-dot terminal-dot-yellow"></span>
        <span className="terminal-dot terminal-dot-green"></span>
        <span className="terminal-title">portfolio.sh</span>
      </div>
      <div className="terminal-body">
        <pre className="terminal-text">{display_text}<span className="terminal-cursor">_</span></pre>
      </div>
    </div>
  );
};

export const hero_section = ({ scroll_to_section }) => (
  <section id="home" className="bg-gradient-primary min-vh-100 d-flex align-items-center">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h1 className="display-4 fw-bold mb-4">Principal Engineer & Technical Leader</h1>
          <p className="lead mb-4">
          I have close to 25 years of experience in the IT field. I've owned consulting comapnies, and worked for big corps. I’m passionate, 
          adaptable, and technically hands-on. Available for principal engineer, staff engineer, or technical leadership roles.
          </p>

          <div className="mb-4">
            {TerminalTypewriter()}
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
        <div className="d-flex flex-wrap gap-3 mb-4">
            <span className="badge bg-primary fs-6 py-2 px-3">Functional Engineer</span>
          </div>
          </div>
        </div>
    </div>
  </section>
);