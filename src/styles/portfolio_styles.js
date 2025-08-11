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
  }
  html {
    scroll-behavior: smooth;
  }
  .bg-gradient-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
    color: #fff !important;
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
    width: 300px;
    height: 300px;
    object-fit: cover;
    border: 4px solid var(--bs-primary);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  .section-padding {
    padding: 80px 0;
  }
  .no-animation * {
    animation: none !important;
    transition: opacity 0.3s ease, transform 0.3s ease !important;
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
  }
  .project-card:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: var(--bs-primary);
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
`;