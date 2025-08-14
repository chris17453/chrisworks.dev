import React from 'react';

export const VideoSection = ({ data }) => (
  <section id="hire-video" className="section-padding section-video">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">{data.title}</h2>
          <p className="lead">{data.description}</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="ratio ratio-16x9">
            <iframe
              src={`https://www.youtube.com/embed/${data.youtube_id}`}
              title={data.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center mt-4">
            <p className="text-light">{data.caption}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);