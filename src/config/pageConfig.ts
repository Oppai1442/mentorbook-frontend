interface PageConfig {
  showNav: boolean;
  showFooter: boolean;
  showChatBubble: boolean;
  showCookie: boolean;
}

export const pageConfigs: { [key: string]: PageConfig } = {
  about: { showNav: true, showFooter: true, showChatBubble: true, showCookie: true },
  auth: { showNav: true, showFooter: true, showChatBubble: true, showCookie: true },
  contact: { showNav: true, showFooter: true, showChatBubble: true, showCookie: true },
  FAQs: { showNav: true, showFooter: true, showChatBubble: true, showCookie: true },
  home: { showNav: true, showFooter: true, showChatBubble: true, showCookie: true },
  mentors: { showNav: true, showFooter: true, showChatBubble: true, showCookie: true },
  Policy: { showNav: true, showFooter: true, showChatBubble: true, showCookie: true },
  ToS: { showNav: true, showFooter: true, showChatBubble: true, showCookie: true },
  notFound: { showNav: false, showFooter: false, showChatBubble: false, showCookie: false },
};
