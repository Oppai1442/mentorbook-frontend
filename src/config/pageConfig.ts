import { mentors } from "../pages/MentorList/mockData";

// src/pageConfig.ts
interface PageConfig {
    showNav: boolean;
    showFooter: boolean;
    showContact: boolean;
  }
  
  export const pageConfigs: { [key: string]: PageConfig } = {
    home: { showNav: true, showFooter: true, showContact: false },
    about: { showNav: true, showFooter: true, showContact: false },
    contact: { showNav: true, showFooter: true, showContact: false },
    mentors: { showNav: true, showFooter: true, showContact: false },
    auth: { showNav: true, showFooter: true, showContact: false },
    FAQs: { showNav: true, showFooter: true, showContact: false },
    notFound: { showNav: false, showFooter: false, showContact: false },
  };
  