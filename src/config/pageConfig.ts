interface PageConfig {
    showNav: boolean;
    showFooter: boolean;
    showContact: boolean;
  }
  
  export const pageConfigs: { [key: string]: PageConfig } = {
    about: { showNav: true, showFooter: true, showContact: false },
    auth: { showNav: true, showFooter: true, showContact: false },
    contact: { showNav: true, showFooter: true, showContact: false },
    FAQs: { showNav: true, showFooter: true, showContact: false },
    home: { showNav: true, showFooter: true, showContact: false },
    mentors: { showNav: true, showFooter: true, showContact: false },
    Policy: { showNav: true, showFooter: true, showContact: false },
    ToS: { showNav: true, showFooter: true, showContact: false },
    notFound: { showNav: false, showFooter: false, showContact: false },
  };
  