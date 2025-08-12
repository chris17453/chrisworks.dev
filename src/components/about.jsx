import React from 'react';

export const about_section = () => (
 <section id="about" className="section-padding" style={{ 
   background: 'linear-gradient(135deg, rgb(19 53 110) 0%, rgb(139 144 161) 100%)',
   overflow: 'hidden'
 }}>
   <div className="container">
     <div className="row">
       <div className="col-lg-12 text-center mb-5">
         <h2 className="display-5 fw-bold mb-4 text-white">About Me</h2>
       </div>
     </div>
     <div className="row">
       <div className="col-lg-10 offset-lg-1">
         <div className="card shadow-lg" style={{ 
           borderRadius: '20px', 
           background: 'rgba(20, 20, 30, 0.95)',
           backdropFilter: 'blur(10px)',
           border: '2px solid rgba(255, 255, 255, 0.2)',
           transform: window.innerWidth > 768 ? 'rotate(-1deg)' : 'none'
         }}>
           <div className="p-3 p-md-5" style={{ 
             transform: window.innerWidth > 768 ? 'rotate(1deg)' : 'none' 
           }}>
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
         </div>
       </div>
     </div>
   </div>
 </section>
);