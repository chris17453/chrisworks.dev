// App.js
import { set_document_title, set_meta_name, set_meta_prop, set_link_rel, set_json_ld } from './utils/head_manager';
import React, { useEffect, useMemo, useState } from 'react';
import { NavigationComponent } from './components/navigation';
import { FooterComponent } from './components/footer';
import { portfolio_styles } from './styles/portfolio_styles';
import { site_sections, get_enabled_sections, get_section_ids } from './data/site_config';
import { site_data, process_template, get_email, get_template_vars } from './data/site_data';

const Portfolio = () => {
  const [active_section, set_active_section] = useState('home');
  const email_addr = useMemo(() => get_email(), []);
  const template_vars = useMemo(() => get_template_vars(), []);

  // Process structured data with template variables
  const person_json_ld = useMemo(() => {
    const template = JSON.stringify(site_data.structured_data.person);
    const processed = process_template(template, template_vars);
    return JSON.parse(processed);
  }, [template_vars]);

  const website_json_ld = useMemo(() => {
    const template = JSON.stringify(site_data.structured_data.website);
    const processed = process_template(template, template_vars);
    return JSON.parse(processed);
  }, [template_vars]);

  // Set all meta tags from data
  useEffect(() => {
    set_document_title(site_data.meta.title);
    set_meta_name('description', site_data.meta.description);
    set_meta_prop('og:title', site_data.meta.og_title);
    set_meta_prop('og:description', site_data.meta.og_description);
    set_meta_prop('og:image', site_data.meta.og_image);
    set_meta_prop('og:url', site_data.meta.url);
    set_meta_name('twitter:title', site_data.meta.twitter_title);
    set_meta_name('twitter:description', site_data.meta.twitter_description);
    set_meta_name('twitter:image', site_data.meta.og_image);
    set_link_rel('canonical', site_data.meta.canonical);
    set_link_rel('me', site_data.meta.github_profile);
    set_link_rel('alternate', site_data.meta.rss_feed);
    set_link_rel('sitemap', site_data.meta.sitemap);
    set_json_ld('person_ld', person_json_ld);
    set_json_ld('website_ld', website_json_ld);
  }, [person_json_ld, website_json_ld]);

  // Bootstrap loading
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

  // Scroll handling
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

  // Context object to pass to components
  const context = {
    scroll_to_section,
    email_addr,
    site_data,
    template_vars
  };

  // Get enabled sections
  const enabled_sections = get_enabled_sections();

  return (
    <>
      <style>{portfolio_styles}</style>

      <div className="no-animation">
        {NavigationComponent({ 
          active_section, 
          scroll_to_section,
          data: site_data.navigation,
          personal: site_data.personal
        })}

        {/* Dynamically render all enabled sections */}
        {enabled_sections.map(section => {
          const Component = section.component;
          const props = section.props(context);
          return <Component key={section.id} {...props} />;
        })}

        {FooterComponent({
          data: site_data.footer,
          personal: site_data.personal
        })}
      </div>
    </>
  );
};

export default Portfolio;