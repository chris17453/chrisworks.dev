// data/site_config.js

// Import all section components
import { hero_section } from '../components/hero';
import { AboutSection } from '../components/about';
import { experience_section } from '../components/experience';
import { SkillsSection } from '../components/skills';
import { video_section } from '../components/video';
import { projects_section } from '../components/projects';
import { hobbies_section } from '../components/hobbies';
import { source_code_section } from '../components/source_code';
import { contact_section } from '../components/contact';

// Import data dependencies
import { professional_experience } from './experience';
import { skills_data } from './skills';
import { project_categories } from './projects';
import { hobbies_data } from './hobbies';

export const site_sections = [
  {
    id: 'home',
    name: 'Home',
    component: hero_section,
    props: (context) => ({ scroll_to_section: context.scroll_to_section }),
    include_in_nav: true,
    enabled: true
  },
  {
    id: 'about',
    name: 'About',
    component: AboutSection,
    props: () => ({}),
    include_in_nav: true,
    enabled: true
  },
  {
    id: 'experience',
    name: 'Experience',
    component: experience_section,
    props: () => ({ professional_experience }),
    include_in_nav: true,
    enabled: true
  },
  {
    id: 'skills',
    name: 'Skills',
    component: SkillsSection,
    props: () => ({ skills_data }),
    include_in_nav: true,
    enabled: true
  },
  {
    id: 'hire-video',
    name: 'Hire Video',
    component: video_section,
    props: () => ({}),
    include_in_nav: true,
    enabled: true
  },
  {
    id: 'projects',
    name: 'Projects',
    component: projects_section,
    props: () => ({ project_categories }),
    include_in_nav: true,
    enabled: true
  },
  {
    id: 'hobbies',
    name: 'Hobbies',
    component: hobbies_section,
    props: () => ({ hobbies_data }),
    include_in_nav: true,
    enabled: true
  },
  {
    id: 'source-code',
    name: 'Source Code',
    component: source_code_section,
    props: () => ({}),
    include_in_nav: true,
    enabled: true
  },
  {
    id: 'contact',
    name: 'Contact',
    component: contact_section,
    props: (context) => ({ email_addr: context.email_addr }),
    include_in_nav: true,
    enabled: true
  }
];

// Helper functions
export const get_enabled_sections = () => 
  site_sections.filter(section => section.enabled);

export const get_nav_sections = () => 
  site_sections.filter(section => section.enabled && section.include_in_nav);

export const get_section_ids = () => 
  get_enabled_sections().map(section => section.id);

export const get_nav_ids = () => 
  get_nav_sections().map(section => section.id);