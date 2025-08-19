// styles/portfolio_styles.js
export const portfolio_styles = `
  :root {
    --bs-dark: #000;
    --bs-primary: #6366f1;
    --bs-secondary: #64748b;
  }
  body {
    background-color: #000;
    color: #fff;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding-top: 56px; /* Account for fixed navbar */
  }
  html {
    scroll-behavior: smooth;
  }
  .bg-gradient-primary {
    background: linear-gradient(135deg, #624b22 0%, #15150b 100%)
  }
  .bg-gradient-dark {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  }
  .section-dark {
    background-color: #111;
  }
  .section-gray {
    background-color: #1a1a1a;
  }
  
  /* Section-specific backgrounds */
  .section-about {
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%);
  }
  .section-experience {
    background: linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 100%);
  }
  .section-video {
    background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
  }
  .section-solutions {
    background: linear-gradient(135deg, #1e1e2e 0%, #2a2a4e 100%);
  }
  .section-projects {
    background: linear-gradient(135deg, #715844 0%, #150d66 100%);
  }
  .section-hobbies {
    background: linear-gradient(135deg, #001a0d 0%, #002619 100%);
  }
  .section-source {
    background: #000;
    position: relative;
    overflow: hidden;
  }
  .section-source::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg at 50% 50%, 
      transparent 0deg, 
      #6366f1 60deg, 
      transparent 120deg, 
      #a855f7 180deg, 
      transparent 240deg, 
      #00ff88 300deg, 
      transparent 360deg);
    animation: rotate-gradient 20s linear infinite;
    opacity: 0.1;
  }
  @keyframes rotate-gradient {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  /* Contact Section Specific Styles */
  .section-contact {
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
  }
  .contact-card {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
  }
  .contact-link-button {
    display: inline-flex;
    align-items: center;
    padding: 15px 25px;
    margin: 10px;
    background: rgba(255, 255, 255, 0.95);
    color: #1e3c72 !important;
    font-weight: 600;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  .contact-link-button:hover {
    background: white;
    color: #2a5298 !important;
    text-decoration: none;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  
  .navbar-brand {
    font-weight: 700;
    font-size: 1.5rem;
    background: linear-gradient(135deg, #00ff88 0%, #00bbff 50%, #a855f7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    filter: brightness(1.2);
  }
  .navbar-brand:hover {
    background: linear-gradient(135deg, #a855f7 0%, #00bbff 50%, #00ff88 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: scale(1.05);
    filter: brightness(1.4);
  }
  .nav-link {
    font-weight: 500;
    transition: color 0.3s ease;
    color: #e0e0e0 !important;
  }
  .nav-link:hover {
    color: var(--bs-primary) !important;
  }
  .nav-link.active {
    color: var(--bs-primary) !important;
  }
  .card-professional {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    color: #fff;
  }
  .card-professional:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  .btn-professional {
    padding: 12px 30px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s ease;
  }
  .btn-professional:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
.profile-photo {
    margin-top: 0;  /* Reset to 0, no negative margins */
    width: 200px;
    height: 200px;
    max-width: 100%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  /* Add hero content alignment */
  .hero-content {
    display: flex;
    align-items: flex-start;
    gap: 3rem;
  }
  
  .hero-text {
    flex: 1;
  }
  
  .hero-image {
    flex-shrink: 0;
    padding-top: 0;  /* Align with title */
  }
    
  .hero-section {
    min-height: 100vh;
    padding-top: 50px;  /* Increased from 80px */
    padding-bottom: 80px; /* Increased from 40px */
  }


  @media (max-width: 768px) {
    .hero-section {
      min-height: auto;
    padding-top: 40px;  /* Increased from 100px */
    padding-bottom: 80px; /* Increased from 60px */    }
    .profile-photo {
      width: 200px;
      height: 200px;
    }
    .terminal-window {
      max-width: 100%;
      font-size: 12px;
      height: 210px;
    }
    .terminal-body {
      padding: 15px;
      min-height: 200px;
    }
    .display-5 {
      font-size: 2rem;
    }
    .lead {
      font-size: 1.1rem;
    }
    .btn-professional {
      padding: 10px 20px;
      font-size: 14px;
    }
  }
  .section-padding {
    padding: 80px 0;
  }
  
  .display-4 {
    font-weight: 300;
    color: #fff !important;
  }
  .display-5 {
    color: #fff !important;
  }
  .lead {
    color: #e0e0e0 !important;
  }
  .text-light {
    color: #e0e0e0 !important;
  }
  .text-muted {
    color: #b0b0b0 !important;
  }
  .text-white {
    color: #fff !important;
  }
  .project-card {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    transition: all 0.3s ease;
    color: #fff;
    overflow: hidden;
  }
  .project-card:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--bs-primary);
    transform: translateY(-5px);
  }
  .project-image-wrapper {
    position: relative;
    width: 100%;
    height: 200px;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    overflow: hidden;
    display: block;
    text-decoration: none;
    cursor: pointer;
  }
  .project-image-frame {
    position: relative;
    width: 100%;
    height: 100%;
    border-bottom: 3px solid var(--bs-primary);
    overflow: hidden;
  }
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: brightness(0.9);
  }
  .project-card:hover .project-image {
    transform: scale(1.1);
    filter: brightness(1);
  }
  .project-image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .project-card:hover .project-image-overlay {
    opacity: 1;
  }
  .project-image-frame::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--bs-primary) 0%, #a855f7 50%, var(--bs-primary) 100%);
    z-index: 10;
    animation: shimmer 3s infinite;
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  /* Hobby Card Styles */
  .hobby-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(0, 255, 136, 0.2);
    transition: all 0.3s ease;
    color: #fff;
    overflow: hidden;
  }
  .hobby-card:hover {
    background: rgba(0, 255, 136, 0.1);
    border-color: #00ff88;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 255, 136, 0.2);
  }
  .hobby-image-wrapper {
    position: relative;
    width: 100%;
    height: 220px;
    background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%);
    overflow: hidden;
  }
  .hobby-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: brightness(0.8);
  }
  .hobby-card:hover .hobby-image {
    transform: scale(1.1);
    filter: brightness(1);
  }
  .hobby-image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 255, 136, 0.7) 0%, rgba(0, 187, 255, 0.7) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .hobby-card:hover .hobby-image-overlay {
    opacity: 1;
  }
  
  /* GitHub Card Styles */
  .github-card-container {
    perspective: 1000px;
  }
  .github-card {
    background: linear-gradient(135deg, #0d1117 0%, #161b22 100%);
    border: 2px solid #30363d;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    transform-style: preserve-3d;
  }
  .github-card:hover {
    transform: rotateX(2deg) rotateY(-2deg);
    border-color: #58a6ff;
    box-shadow: 
      0 30px 60px rgba(88, 166, 255, 0.3),
      0 0 100px rgba(88, 166, 255, 0.1);
  }
  .github-card-header {
    background: #010409;
    padding: 12px 16px;
    border-bottom: 1px solid #30363d;
    display: flex;
    align-items: center;
    position: relative;
  }
  .github-dots {
    display: flex;
    gap: 8px;
  }
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .dot-red { background: #f85149; }
  .dot-yellow { background: #fba61a; }
  .dot-green { background: #3fb950; }
  .github-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #58a6ff;
    font-family: monospace;
    font-weight: 600;
  }
  .github-card-body {
    padding: 30px;
  }
  .code-preview {
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 6px;
    padding: 20px;
    margin-bottom: 30px;
  }
  .code-text {
    color: #58a6ff;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 14px;
    margin: 0;
    text-align: left;
  }
  .github-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 15px;
    background: rgba(88, 166, 255, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(88, 166, 255, 0.2);
    transition: all 0.3s ease;
  }
  .stat-item:hover {
    background: rgba(88, 166, 255, 0.2);
    transform: translateY(-3px);
  }
  .stat-icon {
    color: #58a6ff;
    transition: all 0.3s ease;
  }
  .stat-icon.animate {
    animation: icon-pulse 0.5s ease;
  }
  @keyframes icon-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }
  .stat-item span {
    color: #c9d1d9;
    font-size: 12px;
    font-weight: 500;
  }
  .github-action {
    margin-bottom: 20px;
  }
  .github-button {
    display: inline-flex;
    align-items: center;
    padding: 16px 32px;
    background: linear-gradient(135deg, #238636 0%, #2ea043 100%);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }
  .github-button:hover {
    background: linear-gradient(135deg, #2ea043 0%, #238636 100%);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(46, 160, 67, 0.4);
    border-color: #3fb950;
  }
  .github-footer {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #30363d;
    color: #8b949e;
    font-size: 14px;
  }
  .tech-badge {
    background: rgba(99, 102, 241, 0.3);
    color: #c7d2fe !important;
    border: 1px solid rgba(99, 102, 241, 0.5);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }
  .experience-item {
    background: rgba(255, 255, 255, 0.05);
    border-left: 4px solid var(--bs-primary);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 0 8px 8px 0;
  }
  .experience-title {
    color: #fff !important;
    font-weight: 600;
  }
  .experience-company {
    color: var(--bs-primary) !important;
    font-weight: 500;
  }
  .experience-date {
    color: #b0b0b0 !important;
    font-size: 0.9rem;
  }
  .experience-description {
    color: #e0e0e0 !important;
    line-height: 1.6;
  }
  h1, h2, h3, h4, h5, h6 {
    color: #fff !important;
  }
  p {
    color: #e0e0e0 !important;
  }
  .badge {
    color: #fff !important;
  }
  
  /* Terminal Styles */
  .terminal-window {
    background: #1e1e1e;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    max-width: 500px;
  }
  .terminal-header {
    background: #323232;
    padding: 10px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .terminal-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 8px;
  }
  .terminal-dot-red {
    background: #ff5f56;
  }
  .terminal-dot-yellow {
    background: #ffbd2e;
  }
  .terminal-dot-green {
    background: #27c93f;
  }
  .terminal-title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: #999;
    font-size: 12px;
  }
  .terminal-body {
    padding: 20px;
    min-height: 200px;
  }
  .terminal-text {
    overflow-wrap: normal;
    overflow-y: auto;
    height:200px;
    color: #0f0;
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .terminal-cursor {
    animation: blink 1s infinite;
    color: #0f0;
    font-weight: bold;
  }
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
    .contact-hero-badge {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50px;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  overflow: hidden;
}

.contact-hero-badge:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
  color: white;
}

.badge-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 100%);
  animation: pulse-shine 2s infinite;
}

@keyframes pulse-shine {
  0% {
    transform: translateX(-100%) skewX(-25deg);
  }
  50%, 100% {
    transform: translateX(200%) skewX(-25deg);
  }
}

/* Alternative: Neon glow style */
.contact-hero-badge.neon {
  background: rgba(102, 126, 234, 0.1);
  border: 2px solid #667eea;
  color: #667eea;
  text-shadow: 0 0 10px rgba(102, 126, 234, 0.8);
  box-shadow: 
    0 0 20px rgba(102, 126, 234, 0.4),
    inset 0 0 20px rgba(102, 126, 234, 0.1);
}

.contact-hero-badge.neon:hover {
  background: rgba(102, 126, 234, 0.2);
  box-shadow: 
    0 0 30px rgba(102, 126, 234, 0.6),
    inset 0 0 20px rgba(102, 126, 234, 0.2);
}

<!-- Add this CSS to your portfolio_styles.js in the terminal section -->

/* Terminal Scrollbar Styles */
.terminal-text {
    overflow-wrap: normal;
    height: 200px;
    overflow-y: auto;  /* Enable vertical scrolling */
    color: #0f0;
    margin: 0;
    font-size: 14px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
}

/* Dark green custom scrollbar for terminal */
.terminal-text::-webkit-scrollbar {
    width: 10px;
}

.terminal-text::-webkit-scrollbar-track {
    background: #0a0a0a;
    border-radius: 5px;
}

.terminal-text::-webkit-scrollbar-thumb {
    background: #0f5f0f;  /* Dark green */
    border-radius: 5px;
    border: 1px solid #0a0a0a;
}

.terminal-text::-webkit-scrollbar-thumb:hover {
    background: #0f7f0f;  /* Slightly lighter green on hover */
}

/* Firefox scrollbar support */
.terminal-text {
    scrollbar-width: thin;
    scrollbar-color: #0f5f0f #0a0a0a;
}

`;

