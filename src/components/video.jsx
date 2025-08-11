// components/video.jsx
import React from 'react';

export const video_section = () => (
  <section id="hire-video" className="section-padding section-dark">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">Hire Me .. AI Generated Demo</h2>
          <p className="lead">Created with Stable Diffusion, Google Veo 2, Facebook AudioGen & Suno AI</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="ratio ratio-16x9">
            <iframe 
              src="https://www.youtube.com/embed/teLgCZQmHC0" 
              title="Hire Me - AI Generated Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <p className="text-light">This video demonstrates nothing more than me being creative with AI tooling. Anyone could do it, But I did it before the tools were mainstream.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);