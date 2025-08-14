// Import all section components
import { HeroSection } from '../components/hero';
import { AboutSection } from '../components/about';
import { ExperienceSection } from '../components/experience';
import { SkillsSection } from '../components/skills';
import { VideoSection } from '../components/video';
import { ProjectsSection } from '../components/projects';
import { HobbiesSection } from '../components/hobbies';
import { SourcecodeSection } from '../components/source_code';
import { ContactSection } from '../components/contact';

// Import all data
import { site_data } from './site_data';
import { professional_experience } from './experience';
import { skills_data } from './skills';
import { project_categories } from './projects';
import { hobbies_data } from './hobbies';

// Build sections dynamically from site_data
export const site_sections = site_data.navigation.sections.map(nav_section => {
  const section_configs = {
    'home': {
      component: HeroSection,
      props: (context) => ({
        data: site_data.hero,
        personal: site_data.personal,
        scroll_to_section: context.scroll_to_section
      })
    },
    'about': {
      component: AboutSection,
      props: () => ({
        data: site_data.about
      })
    },
    'experience': {
      component: ExperienceSection,
      props: (context) => ({
        professional_experience,
        data: site_data.experience,
        personal: site_data.personal
      })
    },
    'skills': {
      component: SkillsSection,
      props: () => ({
        skills_data
      })
    },
    'hire-video': {
      component: VideoSection,
      props: () => ({
        data: site_data.video
      })
    },
    'projects': {
      component: ProjectsSection,
      props: () => ({
        project_categories,
        data: site_data.projects
      })
    },
    'hobbies': {
      component: HobbiesSection,
      props: () => ({
        hobbies_data,
        data: site_data.hobbies
      })
    },
    'source-code': {
      component: SourcecodeSection,
      props: () => ({
        data: site_data.source_code
      })
    },
    'contact': {
      component: ContactSection,
      props: (context) => ({
        data: site_data.contact,
        personal: site_data.personal,
        email_addr: context.email_addr
      })
    }
  };

  const config = section_configs[nav_section.id];
  
  return {
    id: nav_section.id,
    name: nav_section.name,
    component: config.component,
    props: config.props,
    include_in_nav: true,
    enabled: nav_section.enabled
  };
});

// Helper functions
export const get_enabled_sections = () =>
  site_sections.filter(section => section.enabled);

export const get_nav_sections = () =>
  site_sections.filter(section => section.enabled && section.include_in_nav);

export const get_section_ids = () =>
  get_enabled_sections().map(section => section.id);

export const get_nav_ids = () =>
  get_nav_sections().map(section => section.id);