// components/hero.jsx
import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

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
        <h1 className="display-4 fw-bold mb-3">Looking for work...</h1>
        <h2 className="display-4 fw-bold mb-3">Engineer & Leader</h2>
          
          {/* Quick contact info - animated badges */}
          <div className="d-flex gap-3 mb-4">
            <a 
              href="tel:8777314155" 
              className="text-decoration-none"
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                color: 'white',
                borderRadius: '50px',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                animation: 'glow 2s ease-in-out infinite alternate',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(42,82,152,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
              }}
            >
              <Phone size={16} className="me-2" />
              (877) 731-4155
            </a>
            <a 
              href="mailto:chris@watkinslabs.com" 
              className="text-decoration-none"
              style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                color: 'white',
                borderRadius: '50px',
                fontSize: '0.95rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                overflow: 'hidden',
                animation: 'glow 2s ease-in-out infinite alternate'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(42,82,152,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
              }}
            >
              <Mail size={16} className="me-2" />
              chris@watkinslabs.com
            </a>
          </div>
          
          <style jsx>{`
            @keyframes glow {
              from {
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
              }
              to {
                box-shadow: 0 4px 30px rgba(42,82,152,0.6), 0 0 20px rgba(42,82,152,0.4);
              }
            }
          `}</style>
          
          <p className="lead mb-4">
          I have close to 25 years of experience in the IT field. I've owned consulting companies, and worked for big corps. I'm passionate,
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
          </div>
        </div>
    </div>
  </section>
);