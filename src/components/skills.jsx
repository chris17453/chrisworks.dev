// components/skills.jsx
import React, { useState, useEffect } from 'react';

export const SkillsSection = ({ skills_data }) => {
  const [active_category, set_active_category] = useState('all');
  const [search_term, set_search_term] = useState('');
  const [terminal_text, set_terminal_text] = useState('');
  const [show_cursor, set_show_cursor] = useState(true);

  // Terminal cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      set_show_cursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const command = `skills --filter "${search_term || 'all'}" --category "${active_category}"`;
    let index = 0;
    set_terminal_text('');
    
    const type_interval = setInterval(() => {
      if (index <= command.length) {
        set_terminal_text(command.slice(0, index));
        index++;
      } else {
        clearInterval(type_interval);
      }
    }, 30);

    return () => clearInterval(type_interval);
  }, [search_term, active_category]);

  // Filter skills based on search and category
  const filter_skills = () => {
    let filtered_categories = skills_data.categories;
    
    if (active_category !== 'all') {
      filtered_categories = filtered_categories.filter(cat => 
        cat.name.toLowerCase().includes(active_category.toLowerCase())
      );
    }

    if (search_term) {
      filtered_categories = filtered_categories.map(cat => ({
        ...cat,
        skills: cat.skills.filter(skill => 
          skill.name.toLowerCase().includes(search_term.toLowerCase()) ||
          skill.description.toLowerCase().includes(search_term.toLowerCase()) ||
          skill.comment.toLowerCase().includes(search_term.toLowerCase())
        )
      })).filter(cat => cat.skills.length > 0);
    }

    return filtered_categories;
  };

  // Render skill level as visual bars
  const render_skill_level = (level) => {
    const max_level = 5;
    const filled = Math.floor(level);
    const partial = level % 1;
    
    return (
      <div className="skill-level">
        {[...Array(max_level)].map((_, i) => (
          <div 
            key={i} 
            className={`skill-bar ${i < filled ? 'filled' : ''} ${i === filled && partial > 0 ? 'partial' : ''}`}
            style={i === filled && partial > 0 ? { '--partial-fill': `${partial * 100}%` } : {}}
          />
        ))}
        <span className="skill-level-text">{level}/5</span>
      </div>
    );
  };

  const filtered_categories = filter_skills();
  const total_skills = skills_data.categories.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="section-padding section-skills">
      <style>{`
        .section-skills {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
        }

        .section-skills::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(99,102,241,0.05)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)" /%3E%3C/svg%3E');
          pointer-events: none;
        }

        .skills-intro {
          background: rgba(99, 102, 241, 0.1);
          border-left: 4px solid #6366f1;
          padding: 20px;
          margin-bottom: 40px;
          border-radius: 0 8px 8px 0;
          font-style: italic;
          color: #e0e0e0;
        }

        .skills-terminal {
          background: #0a0a0a;
          border: 1px solid #333;
          border-radius: 8px;
          padding: 15px;
          margin-bottom: 30px;
          font-family: 'Courier New', monospace;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
        }

        .terminal-prompt {
          color: #00ff41;
          font-size: 14px;
        }

        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: #00ff41;
          margin-left: 2px;
          vertical-align: text-bottom;
        }

        .skills-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 30px;
          align-items: center;
        }

        .category-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .category-btn {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #e0e0e0;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .category-btn:hover {
          background: rgba(99, 102, 241, 0.2);
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .category-btn.active {
          background: #6366f1;
          border-color: #6366f1;
          color: white;
        }

        .search-box {
          flex: 1;
          min-width: 250px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: white;
          font-size: 14px;
        }

        .search-box::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        .skills-grid {
          display: grid;
          gap: 30px;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 25px;
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid rgba(99, 102, 241, 0.3);
          color: white;
        }

        .category-header h3 {
          margin: 0;
          font-size: 1.3rem;
        }

        .skills-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 15px;
        }

        .skill-item {
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 15px;
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateX(5px);
        }

        .skill-name {
          font-weight: 600;
          color: #00ff41;
          margin-bottom: 4px;
          font-size: 1rem;
        }

        .skill-description {
          font-size: 0.85rem;
          color: #a0a0a0;
          margin-bottom: 8px;
        }

        .skill-comment {
          font-size: 0.85rem;
          color: #6366f1;
          font-style: italic;
          margin-bottom: 8px;
          min-height: 20px;
        }

        .skill-level {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .skill-bar {
          width: 20px;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
        }

        .skill-bar.filled {
          background: #00ff41;
          border-color: #00ff41;
          box-shadow: 0 0 5px rgba(0, 255, 65, 0.5);
        }

        .skill-bar.partial::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: var(--partial-fill);
          background: #00ff41;
        }

        .skill-level-text {
          margin-left: 10px;
          font-size: 0.85rem;
          color: #a0a0a0;
        }

        .skills-stats {
          text-align: center;
          margin-top: 30px;
          padding: 20px;
          background: rgba(99, 102, 241, 0.1);
          border-radius: 8px;
          color: #e0e0e0;
        }

        @media (max-width: 768px) {
          .skills-list {
            grid-template-columns: 1fr;
          }
          
          .skills-controls {
            flex-direction: column;
          }
          
          .search-box {
            width: 100%;
          }
        }
      `}</style>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Technical Skills</h2>
            <p className="lead">A comprehensive view of my technical toolkit</p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Intro blurb */}
            <div className="skills-intro">
              {skills_data.intro_blurb}
            </div>

            {/* Terminal display */}
            <div className="skills-terminal">
              <div className="terminal-prompt">
                $ {terminal_text}
                {show_cursor && <span className="terminal-cursor"></span>}
              </div>
            </div>

            {/* Controls */}
            <div className="skills-controls">
              <div className="category-filters">
                <button 
                  className={`category-btn ${active_category === 'all' ? 'active' : ''}`}
                  onClick={() => set_active_category('all')}
                >
                  All Categories
                </button>
                {skills_data.categories.map((cat, index) => (
                  <button 
                    key={index}
                    className={`category-btn ${active_category === cat.name ? 'active' : ''}`}
                    onClick={() => set_active_category(cat.name)}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
              <input 
                type="text" 
                className="search-box"
                placeholder="Search skills..."
                value={search_term}
                onChange={(e) => set_search_term(e.target.value)}
              />
            </div>

            {/* Skills Grid */}
            <div className="skills-grid">
              {filtered_categories.map((category, cat_index) => (
                <div key={cat_index} className="skill-category">
                  <div className="category-header">
                    {category.icon}
                    <h3>{category.name}</h3>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill, skill_index) => (
                      <div key={skill_index} className="skill-item">
                        <div className="skill-name">{skill.name}</div>
                        <div className="skill-description">{skill.description}</div>
                        <div className="skill-comment">{skill.comment || '\u00A0'}</div>
                        {render_skill_level(skill.level)}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="skills-stats">
              <strong>{total_skills}</strong> skills across <strong>{skills_data.categories.length}</strong> categories
              <br />
              <small className="text-muted">{skills_data.scale_description}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};