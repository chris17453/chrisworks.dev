// App.js
import { set_document_title, set_meta_name, set_meta_prop, set_link_rel, set_json_ld } from './utils/head_manager';
import React, { useEffect, useMemo, useState } from 'react';
import { navigation_component } from './components/navigation';
import { footer_component } from './components/footer';
import { portfolio_styles } from './styles/portfolio_styles';
import { site_sections, get_enabled_sections, get_section_ids } from './data/site_config';

const Portfolio = () => {
  const [active_section, set_active_section] = useState('home');
  const email_addr = useMemo(() => 'chris' + '@' + 'watkinslabs' + '.' + 'com', []);

  const person_json_ld = (email_addr) => ({
    "@context":"https://schema.org",
    "@type":"Person",
    "name":"Chris Watkins",
    "url":"https://chrisworks.dev/",
    "image":"https://chrisworks.dev/static/chris.webp",
    "sameAs":[ "https://github.com/chris17453", "https://www.linkedin.com/in/YOUR_LINKEDIN" ],
    "jobTitle":"Principal Engineer",
    "email":"mailto:" + email_addr,
    "worksFor":{"@type":"Organization","name":"Watkins Labs"},
    "knowsAbout":["Linux","Kubernetes","AWS","SRE","AI/ML","Networking","Security"]
  });

  const website_json_ld = {
    "@context":"https://schema.org",
    "@type":"WebSite",
    "url":"https://chrisworks.dev/",
    "name":"Chris Watkins Portfolio",
    "potentialAction": {
      "@type":"SearchAction",
      "target":"https://chrisworks.dev/?q={search_term_string}",
      "query-input":"required name=search_term_string"
    }
  };

  useEffect(() => {
    set_document_title('chris watkins ... principal engineer ... linux + backend');
    set_meta_name('description', 'principal engineer ... 20+ years ... linux, kubernetes, aws, ai/ml ... built infra for finance at scale.');
    set_meta_prop('og:title', 'chris watkins ... principal engineer');
    set_meta_prop('og:description', 'linux + backend ... enterprise scale ... projects, case studies, contact.');
    set_meta_prop('og:image', 'https://chrisworks.dev/static/og.png');
    set_meta_prop('og:url', 'https://chrisworks.dev/');
    set_meta_name('twitter:title', 'chris watkins ... principal engineer');
    set_meta_name('twitter:description', 'linux + backend ... enterprise scale.');
    set_meta_name('twitter:image', 'https://chrisworks.dev/static/og.png');
    set_link_rel('canonical', 'https://chrisworks.dev/');
    set_link_rel('me', 'https://github.com/chris17453');
    set_link_rel('alternate', '/rss.xml');
    set_link_rel('sitemap', '/sitemap.xml');
    set_json_ld('person_ld', person_json_ld(email_addr));
    set_json_ld('website_ld', website_json_ld);
  }, [email_addr]);

  useEffect(() => {
    if (!document.querySelector('link[href*="bootstrap"]')) {
      const bootstrap_link = document.createElement('link');
      bootstrap_link.rel = 'stylesheet';
      bootstrap_link.href = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css';
      document.head.appendChild(bootstrap_link);
    }

    if (!document.querySelector('script[src*="bootstrap"]')) {
      const bootstrap_script = document.createElement('script');
      bootstrap_script.src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
      document.body.appendChild(bootstrap_script);
    }
  }, []);

  useEffect(() => {
    const handle_scroll = () => {
      const sections = get_section_ids();
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) set_active_section(current);
    };
    window.addEventListener('scroll', handle_scroll);
    return () => window.removeEventListener('scroll', handle_scroll);
  }, []);

  const scroll_to_section = (section_id) => {
    document.getElementById(section_id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Context object to pass to components that need it
  const context = {
    scroll_to_section,
    email_addr
  };

  // Get enabled sections
  const enabled_sections = get_enabled_sections();

  return (
    <>
      <style>{portfolio_styles}</style>

      <div className="no-animation">
        {navigation_component({ active_section, scroll_to_section })}
        
        {/* Dynamically render all enabled sections */}
        {enabled_sections.map(section => {
          const Component = section.component;
          const props = section.props(context);
          return <Component key={section.id} {...props} />;
        })}
        
        {footer_component()}
      </div>
    </>
  );
};

export default Portfolio;