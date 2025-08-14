import React, { useState, useEffect } from 'react';

export const AboutSection = () => {
  const [glitch_active, set_glitch_active] = useState(false);
  const [typed_text, set_typed_text] = useState('');
  const full_title = 'About Me';
  
  useEffect(() => {
    // Typewriter effect for title
    let char_index = 0;
    const type_interval = setInterval(() => {
      if (char_index <= full_title.length) {
        set_typed_text(full_title.slice(0, char_index));
        char_index++;
      } else {
        clearInterval(type_interval);
      }
    }, 100);
    
    // Random glitch effect
    const glitch_interval = setInterval(() => {
      set_glitch_active(true);
      setTimeout(() => set_glitch_active(false), 200);
    }, 8000);
    
    return () => {
      clearInterval(type_interval);
      clearInterval(glitch_interval);
    };
  }, []);
  
  return (
    <section id="about" className="section-padding about-section retro-game-section">
      <style>{`
        .retro-game-section {
          position: relative;
          background: linear-gradient(180deg, #0a0a0a 0%, #1a0f1f 100%);
          overflow: hidden;
        }
        
        .retro-game-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              0deg,
              rgba(0, 255, 0, 0.03) 0px,
              transparent 1px,
              transparent 2px,
              rgba(0, 255, 0, 0.03) 3px
            );
          pointer-events: none;
          animation: scanlines 8s linear infinite;
          z-index: 1;
        }
        
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
        
        .retro-terminal {
          position: relative;
          background: rgba(2, 15, 7, 0.9);
          border: 2px solid #00ff41;
          border-radius: 8px;
          padding: 40px;
          box-shadow: 
            0 0 20px rgba(0, 255, 65, 0.3),
            inset 0 0 20px rgba(0, 255, 65, 0.05);
          overflow: hidden;
          z-index: 2;
        }
        
        .terminal2-header {

          display: flex;
          gap: 8px;
          margin-bottom: 30px;
          padding-bottom: 15px;
          border-bottom: 1px solid #196a2d;
        }
        
        .terminal-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #00ff41;
        }
        
        .retro-title {
          font-family: 'Courier New', monospace;
          color: #00ff41;
          text-shadow: 
            0 0 10px #00ff41,
            0 0 20px #00ff41,
            0 0 30px #00ff41;
          margin-bottom: 40px;
          font-size: 3rem;
          letter-spacing: 3px;
        }
        
        .retro-title::after {
          content: '_';
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .terminal2-text {
          font-family: 'Courier New', monospace;
          color: #00ff41;
          line-height: 1.8;
          margin-bottom: 20px;
          padding: 15px;
          background: transparent;
          border-left: 3px solid #00ff41;
          position: relative;
          font-weight: 500;
        }
        
        .terminal2-text::before {
          content: '> ';
          color: #00ff88;
          font-weight: bold;
        }
        
        .glitch-effect {
          animation: glitch 0.3s infinite;
        }
        
        @keyframes glitch {
          0%, 100% { 
            transform: translate(0);
            filter: hue-rotate(0deg);
          }
          20% { 
            transform: translate(-1px, 1px);
            filter: hue-rotate(90deg);
          }
          40% { 
            transform: translate(-1px, -1px);
            filter: hue-rotate(180deg);
          }
          60% { 
            transform: translate(1px, 1px);
            filter: hue-rotate(270deg);
          }
          80% { 
            transform: translate(1px, -1px);
            filter: hue-rotate(360deg);
          }
        }
        
        .pixel-corners {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #00ff41;
        }
        
        .pixel-corners.top-left {
          top: -2px;
          left: -2px;
          border-right: none;
          border-bottom: none;
        }
        
        .pixel-corners.top-right {
          top: -2px;
          right: -2px;
          border-left: none;
          border-bottom: none;
        }
        
        .pixel-corners.bottom-left {
          bottom: -2px;
          left: -2px;
          border-right: none;
          border-top: none;
        }
        
        .pixel-corners.bottom-right {
          bottom: -2px;
          right: -2px;
          border-left: none;
          border-top: none;
        }
        
        .power-indicator {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 8px;
          height: 8px;
          background: #00ff41;
          border-radius: 50%;
          box-shadow: 0 0 10px #00ff41;
        }
        
        @media (max-width: 768px) {
          .retro-title { font-size: 2rem; }
          .retro-terminal { padding: 20px; }
        }
      `}</style>
      
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="retro-title">{typed_text}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className={`retro-terminal `}>
              <div className="pixel-corners top-left"></div>
              <div className="pixel-corners top-right"></div>
              <div className="pixel-corners bottom-left"></div>
              <div className="pixel-corners bottom-right"></div>
              <div className="power-indicator"></div>
              
              <div className="terminal2-header">
                <div className="terminal-dot"></div>
                <div className="terminal-dot"></div>
                <div className="terminal-dot"></div>
              </div>
              
              <div className="terminal-content">
                <div className="terminal2-text">
                  I have spent 25 years living and breathing technology, building, breaking, and fixing enterprise systems.
                </div>

                <div className="terminal2-text">
                  I began my career as a C/PHP consultant with a strong understanding of hardware, quickly expanding into infrastructure design, 
                  racking, and stacking. I built core infrastructure and systems for manufacturing companies and local boutiques, delivering 
                  accounting platforms, inventory management, e-commerce integrations, shipping systems with FedEx and UPS, and payment processing 
                  solutions. I developed long-term relationships with clients ranging from small shops to enterprise operations, keeping them 
                  running and evolving through cloud migrations and legacy system rebuilds.
                </div>

                <div className="terminal2-text">
                  I later explored corporate life to see what it was like not managing customers directly... yet I still found myself serving them. 
                  At Pitney Bowes, I worked as a Senior Engineer building and integrating hundreds of shipping platform integrations in C#, taking on 
                  both technical leadership and hands-on coding. When my division closed after a year, I joined E*TRADE as SRE in the 
                  infrastructure division, where I integrated systems, implemented platform scanning, developed VM automation, and integrated VMware. 
                  During COVID, I delivered critical remote workforce metrics to the C-suite. When Morgan Stanley acquired the company, I took the 
                  opportunity to seek new challenges.
                </div>

                <div className="terminal2-text">
                  I moved to IBM as SRE/Engineer in the Financial Services Division, traveling nationwide to implement OpenShift, Turbonomics, 
                  Instana, and WatsonX solutions for banks and Fortune 500 companies. I contributed not just as a designer but as an implementer, 
                  ensuring solutions worked in the real world. When the compensation structure changed, I chose to return to independent consulting.
                </div>

                <div className="terminal2-text">
                  After a year or so of running my own practice again, I am ready for the next leadership opportunity, bringing both the adaptability 
                  of a consultant and the process discipline of Fortune 500 environments. I lead from the front... architecting, building, and fixing 
                  systems myself when needed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};