import React from 'react';

export const about_section = () => (
  <section id="about" className="section-padding section-dark">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">About Me</h2>
        </div>
      </div>
      <div className="row">
        {[
          { 
            title: 'The Reality', 
            text: "I'm a middle-aged guy with another decade of solid work left in my career. I expect to be hired for one thing and end up doing something completely different. That's always been my experience, and I'm good with it." 
          },
          { 
            title: 'The Innovation', 
            text: "I'm often asked to take on work I've never done before, armed only with a general understanding of the field. I enjoy being a tourist in these new spaces, learning quickly, and applying their best practices to deliver results. I've built multi-million-dollar APIs, constructed AI models from scratch, and designed data workflows from AWS to Snowflake. I'm technically nimble and never stuck in the mud." 
          },
          { 
            title: 'The Commitment', 
            text: "I maintain a full enterprise lab at home because staying current matters. I can code in almost any language. I work heavily with infrastructure and systems, security etc. All the usual guests at the .. I know that party. I've worked with AWS, GCP and a little Azure. I have half a dozen mentee's that I help with on an ongoing basis and provide free web hosting to. We work on thing form techincal to communictions skills." 
          }
        ].map((item, index) => (
          <div key={index} className="col-lg-4 mb-4">
            <div className="card card-professional h-100 p-4">
              <h4 className="text-primary mb-3">{item.title}</h4>
              <p className="text-light">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);