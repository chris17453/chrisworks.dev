import React, { useState, useEffect } from 'react';

export const AboutSection = ({ data }) => {
  const [glitch_active, set_glitch_active] = useState(false);
  const [typed_text, set_typed_text] = useState('');
  const full_title = data.title;

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

    // Random glitch effect if terminal style is enabled
    let glitch_interval;
    if (data.terminal_style) {
      glitch_interval = setInterval(() => {
        set_glitch_active(true);
        setTimeout(() => set_glitch_active(false), 200);
      }, 8000);
    }

    return () => {
      clearInterval(type_interval);
      if (glitch_interval) clearInterval(glitch_interval);
    };
  }, [full_title, data.terminal_style]);

  const terminal_styles = data.terminal_style ? `
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
  ` : '';

  return (
    <section id="about" className="section-padding about-section retro-game-section">
      {data.terminal_style && <style>{terminal_styles}</style>}

      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className={data.terminal_style ? "retro-title" : "display-5 fw-bold mb-4"}>
              {typed_text}
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className={data.terminal_style ? "retro-terminal" : "card card-professional p-4"}>
              {data.terminal_style && (
                <>
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
                </>
              )}

              <div className="terminal-content">
                {data.content.map((item, index) => (
                  <div key={index} className={data.terminal_style ? "terminal2-text" : "mb-3"}>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};