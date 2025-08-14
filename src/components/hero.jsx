// components/hero.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail } from 'lucide-react';

const TerminalTypewriter = ({ data }) => {
  const [display_text, set_display_text] = useState('');
  const [current_line, set_current_line] = useState(0);
  const [typing, set_typing] = useState(true);
  const terminal_ref = useRef(null);

  const terminal_lines = data.lines;
  const typing_speed = data.typing_speed || 50;
  const line_delay = data.line_delay || 800;
  const loop_delay = data.loop_delay || 3000;

  useEffect(() => {
    if (current_line >= terminal_lines.length) {
      setTimeout(() => {
        set_display_text('');
        set_current_line(0);
      }, loop_delay);
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
        }, line_delay);
      }
    }, typing_speed);

    return () => clearInterval(typing_interval);
  }, [current_line, terminal_lines, typing_speed, line_delay, loop_delay]);

  useEffect(() => {
    if (terminal_ref.current) {
      terminal_ref.current.scrollTop = terminal_ref.current.scrollHeight;
    }
  }, [display_text]);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <span className="terminal-dot terminal-dot-red"></span>
        <span className="terminal-dot terminal-dot-yellow"></span>
        <span className="terminal-dot terminal-dot-green"></span>
        <span className="terminal-title">portfolio.sh</span>
      </div>
      <div className="terminal-body">
        <pre className="terminal-text" ref={terminal_ref}>
          {display_text}<span className="terminal-cursor">_</span>
        </pre>
      </div>
    </div>
  );
};

export const HeroSection = ({ data, personal, scroll_to_section }) => {
  const email = `${personal.email_user}@${personal.email_domain}`;
  
  const handle_cta_click = (action) => {
    if (action) {
      scroll_to_section(action);
    }
  };

  return (
    <section id="home" className="hero-section bg-gradient-primary min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="display-4 fw-bold mb-3">{data.status_message}</h1>
            <h2 className="display-4 fw-bold mb-3">{data.headline}</h2>

            {/* Quick contact info - animated badges */}
            <div className="d-flex gap-3 mb-4">
              <a
                href={`tel:${personal.phone.replace(/[^0-9]/g, '')}`}
                className="text-decoration-none"
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '0.90rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  animation: '2s ease-in-out infinite alternate',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <Phone size={16} className="me-2" />
                {personal.phone}
              </a>
              <a
                href={`mailto:${email}`}
                className="text-decoration-none"
                style={{
                  position: 'relative',
                  display: 'inline-flex',
                  alignItems: 'center',
                  color: 'white',
                  fontSize: '0.90rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  animation: '2s ease-in-out infinite alternate',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <Mail size={16} className="me-2" />
                {email}
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

            <p className="lead mb-4">{data.intro_text}</p>

            <div className="mb-4">
              {TerminalTypewriter({ data: data.terminal_animation })}
            </div>

            <div className="d-flex gap-3">
              <button 
                className="btn btn-light btn-professional" 
                onClick={() => handle_cta_click(data.cta_primary.action)}
              >
                {data.cta_primary.text}
              </button>
              <button 
                className="btn btn-outline-light btn-professional" 
                onClick={() => handle_cta_click(data.cta_secondary.action)}
              >
                {data.cta_secondary.text}
              </button>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            <img 
              src={personal.profile_image} 
              alt={personal.full_name} 
              className="profile-photo rounded-circle" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};