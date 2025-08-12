
import React, { useEffect, useRef, useState } from 'react';

export const AboutSection = () => {
  const card_ref = useRef(null);
  const animation_frame = useRef(null);
  const [swing_state, set_swing_state] = useState({
    angle: 0,
    velocity: 0,
    dampening: 0.95,
    spring: 0.02,
    max_angle: 15
  });
  
  const last_scroll_y = useRef(0);
  const scroll_timeout = useRef(null);
  
  useEffect(() => {
    let angle = 0;
    let velocity = 0;
    let is_animating = false;
    const dampening = 0.96;  // Increased from 0.92 - faster energy loss
    const spring = 0.008;     // Reduced from 0.015 - gentler pull to center
    const max_angle = 6;      // Reduced from 12 - smaller max swing
    
    const animate = () => {
      // Apply spring force toward center
      velocity += -angle * spring;
      
      // Apply dampening
      velocity *= dampening;
      
      // Update angle - clamp to max
      angle += velocity;
      angle = Math.max(-max_angle, Math.min(max_angle, angle));
      
      // Apply to element
      if (card_ref.current) {
        card_ref.current.style.transform = `rotate(${angle}deg)`;
        
        // Update shadow based on swing
        const shadow = card_ref.current.querySelector('.swing-shadow');
        if (shadow) {
          const shadow_offset = angle * 2;
          const shadow_scale = 1 + Math.abs(angle) * 0.02;
          const shadow_opacity = 0.3 + Math.abs(angle) * 0.01;
          shadow.style.transform = `translateX(${shadow_offset}px) scale(${shadow_scale})`;
          shadow.style.opacity = shadow_opacity;
        }
      }
      
      // Continue animation if there's motion
      if (Math.abs(velocity) > 0.001 || Math.abs(angle) > 0.01) {
        animation_frame.current = requestAnimationFrame(animate);
        is_animating = true;
      } else {
        is_animating = false;
        animation_frame.current = null;
      }
    };
    
    const start_animation = () => {
      if (!is_animating && !animation_frame.current) {
        is_animating = true;
        animate();
      }
    };
    
    const handle_scroll = () => {
      const scroll_y = window.scrollY;
      const scroll_delta = scroll_y - last_scroll_y.current;
      last_scroll_y.current = scroll_y;
      
      // Much gentler energy addition - reduced from 0.3 to 0.05
      const energy = Math.min(Math.max(scroll_delta * 0.05, -1), 1);
      velocity += energy;
      
      // Tighter velocity clamp - reduced from 2 to 0.5
      velocity = Math.min(Math.max(velocity, -0.5), 0.5);
      
      // Start animation if not running
      start_animation();
      
      // Clear existing timeout
      if (scroll_timeout.current) {
        clearTimeout(scroll_timeout.current);
      }
      
      // Keep animating for a bit after scroll stops
      scroll_timeout.current = setTimeout(() => {
        // Let natural dampening take over
      }, 100);
    };
    
    // Handle visibility changes (tab switching)
    const handle_visibility_change = () => {
      if (!document.hidden) {
        // Tab became visible - restart animation if there's motion
        if (Math.abs(velocity) > 0.01 || Math.abs(angle) > 0.01) {
          start_animation();
        }
      }
    };
    
    // Handle resize events
    const handle_resize = () => {
      // Give a small nudge on resize
      velocity += 0.1;
      start_animation();
    };
    
    // Add listeners
    window.addEventListener('scroll', handle_scroll);
    document.addEventListener('visibilitychange', handle_visibility_change);
    window.addEventListener('resize', handle_resize);
    
    // Also trigger on intersection for initial animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && Math.abs(velocity) < 0.1) {
            // Gentler initial push - reduced from 0.5 to 0.2
            velocity = 0.2;
            start_animation();
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (card_ref.current) {
      observer.observe(card_ref.current);
    }
    
    return () => {
      window.removeEventListener('scroll', handle_scroll);
      document.removeEventListener('visibilitychange', handle_visibility_change);
      window.removeEventListener('resize', handle_resize);
      if (animation_frame.current) {
        cancelAnimationFrame(animation_frame.current);
      }
      if (scroll_timeout.current) {
        clearTimeout(scroll_timeout.current);
      }
      if (card_ref.current) {
        observer.unobserve(card_ref.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="section-padding about-swing-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="display-5 fw-bold mb-4 text-white">About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div ref={card_ref} className="about-card-physics-swing">
              <div className="about-card-content">
              <p className="lead mb-4 text-white">
                I have spent 25 years living and breathing technology, building, breaking, and fixing enterprise systems. 
              </p>

              <p className="lead mb-4 text-white">
                I began my career as a C/PHP consultant with a strong understanding of hardware, quickly expanding into infrastructure design, 
                racking, and stacking. I built core infrastructure and systems for manufacturing companies and local boutiques, delivering 
                accounting platforms, inventory management, e-commerce integrations, shipping systems with FedEx and UPS, and payment processing 
                solutions. I developed long-term relationships with clients ranging from small shops to enterprise operations, keeping them 
                running and evolving through cloud migrations and legacy system rebuilds.
              </p>

              <p className="lead mb-4 text-white">
                I later explored corporate life to see what it was like not managing customers directly... yet I still found myself serving them. 
                At Pitney Bowes, I worked as a Senior Engineer building and integrating hundreds of shipping platform integrations in C#, taking on 
                both technical leadership and hands-on coding. When my division closed after a year, I joined E*TRADE as SRE in the 
                infrastructure division, where I integrated systems, implemented platform scanning, developed VM automation, and integrated VMware. 
                During COVID, I delivered critical remote workforce metrics to the C-suite. When Morgan Stanley acquired the company, I took the 
                opportunity to seek new challenges.
              </p>

              <p className="lead mb-4 text-white">
                I moved to IBM as SRE/Engineer in the Financial Services Division, traveling nationwide to implement OpenShift, Turbonomics, 
                Instana, and WatsonX solutions for banks and Fortune 500 companies. I contributed not just as a designer but as an implementer, 
                ensuring solutions worked in the real world. When the compensation structure changed, I chose to return to independent consulting.
              </p>

              <p className="lead mb-4 text-white">
                After a year or so of running my own practice again, I am ready for the next leadership opportunity, bringing both the adaptability 
                of a consultant and the process discipline of Fortune 500 environments. I lead from the front... architecting, building, and fixing 
                systems myself when needed.
              </p>
  
              </div>
              <div className="swing-shadow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};