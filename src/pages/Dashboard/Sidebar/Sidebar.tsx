import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css';
import websiteLogo from '../../../assets/svg/website-logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context';

interface ChildItem {
  path: string;
  icon?: string | "";
  requireRole: string[];
}

interface ContainerItem {
  path: string;
  icon?: string | "";
  child?: Record<string, ChildItem>;
  requireRole?: string[];
  isDropdown?: boolean;
}

interface Section {
  name: string;
  container: Record<string, ContainerItem>;
  requireRole?: string[];
}

interface Catalogue {
  [key: string]: Section;
}

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { user } = useAuth();

  const catalogue: Catalogue = {
    main: {
      name: "Main",
      container: {
        "dashboard": {
          path: "/dashboard",
          isDropdown: true,
          child: {
            "overview": { icon: "", path: "/dashboard/overview", requireRole: [] },
            "traffic-source": { icon: "", path: "/dashboard/traffic-source", requireRole: [] },
            "product-analysis": { icon: "", path: "/dashboard/product-analysis", requireRole: [] },
          },
          requireRole: [],
        },
        "messages": { icon: "fa-duotone fa-solid fa-inbox", path: "/dashboard/messages", requireRole: [] },
        "transactions": { icon: "fa-solid fa-credit-card-front", path: "/dashboard/transactions", requireRole: [] }
      },
      requireRole: []
    },
    personal: {
      name: "Personal",
      container: {
        "calendar": { icon: "fa-solid fa-calendar-range", path: "/dashboard/calendar", requireRole: [] },
        "settings": { icon: "fa-duotone fa-solid fa-gear-complex", path: "/dashboard/settings", requireRole: [] },
      },
      requireRole: []
    },
    manager: {
      name: "Manager",
      container: {
        "user-list": { icon: "fa-regular fa-users", path: "/dashboard/user-list", requireRole: [] },
      },
      requireRole: ["root", "admin"]
    },
  };

  const [activeItem, setActiveItem] = useState<string>(location.pathname);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  const handleItemClick = (path: string) => {
    setActiveItem(path);
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdowns(prev => ({ ...prev, [title]: !prev[title] }));
  };

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const hasAccess = (requireRole: string[]) => {
    return !requireRole.length || (user && requireRole.includes(user.role));
  };

  return (
    <>
      {/* Navbar for mobile */}
      <nav className={`${styles['navbar']} ${styles['navbar-dark']} ${styles['navbar-theme-primary']} ${styles['px-4']} ${styles['col-12']} ${styles['d-lg-none']}`}>
        <Link className={`${styles['navbar-brand']} ${styles['me-lg-5']}`} to="/">
          <img src={websiteLogo} alt="MentorNest logo" height={20} width={20} />
        </Link>
        <button className={`${styles['button']} ${styles['navbar-toggler']} ${styles['d-lg-none']} ${styles['collapsed']}`} type="button">
          <span className={`${styles['navbar-toggler-icon']}`} />
        </button>
      </nav>

      {/* Sidebar */}
      <nav id="sidebarMenu" className={`${styles['sidebar']} ${styles['d-lg-block']} ${styles['bg-gray-800']} ${styles['text-white']} ${styles['collapse']}`} data-simplebar="init">
        <div className={`${styles['sidebar-inner']} ${styles['px-4']} ${styles['pt-3']}`}>
          <ul className={`${styles['ul']} ${styles['nav']} ${styles['flex-column']} ${styles['pt-3']} ${styles['pt-md-0']}`}>
            <li className={`${styles['nav-item']}`}>
              <Link to="/" className={`${styles['nav-link']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                <span className={`${styles['sidebar-icon']}`}>
                  <img src={websiteLogo} alt="MentorNest Logo" height={20} width={20} />
                </span>
                <span className={`${styles['mt-1']} ${styles['sidebar-text']}`}>MentorNest</span>
              </Link>
            </li>

            {Object.entries(catalogue).map(([sectionKey, section]) => (
              <React.Fragment key={sectionKey}>
                {hasAccess(section.requireRole || []) && (
                  <>
                    <div className={`${styles['nav-divider']}`}>
                      <span>{section.name}</span>
                    </div>

                    {Object.entries(section.container).map(([itemKey, item]) => (
                      hasAccess(item.requireRole || []) && (
                        <li key={itemKey} className={`${styles['nav-item']}`}>
                          {item.isDropdown && item.child ? (
                            <>
                              <span
                                className={`${styles['nav-link']} ${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}
                                onClick={() => toggleDropdown(itemKey)}
                              >
                                <span>
                                  <span className={`${styles['sidebar-icon']}`}>
                                    <i className="fa-solid fa-chart-pie" />
                                  </span>
                                  <span className={`${styles['sidebar-text']}`}>
                                    {itemKey.charAt(0).toUpperCase() + itemKey.slice(1)}
                                  </span>
                                </span>
                                <span className={`${styles['link-arrow']}`}>
                                  <i className={`fa ${openDropdowns[itemKey] ? 'fa-chevron-down' : 'fa-chevron-right'}`} />
                                </span>
                              </span>
                              <div
                                className={`${styles['multi-level']} ${openDropdowns[itemKey] ? styles['collapse-show'] : styles['collapse']}`}
                                aria-expanded={openDropdowns[itemKey]}
                              >
                                <ul className={`${styles['ul']} ${styles['flex-column']} ${styles['nav']}`}>
                                  {Object.entries(item.child).map(([childKey, childItem]) => (
                                    hasAccess(childItem.requireRole) && (
                                      <li key={childKey} className={`${styles['nav-item']} ${activeItem === childItem.path ? styles['active'] : ''}`}>
                                        <Link to={childItem.path} className={`${styles['nav-link']}`} onClick={() => handleItemClick(childItem.path)}>
                                          <span className={`${styles['sidebar-text']}`}>{childKey}</span>
                                        </Link>
                                      </li>
                                    )
                                  ))}
                                </ul>
                              </div>
                            </>
                          ) : (
                            <Link
                              to={item.path}
                              className={`${styles['nav-link']} ${activeItem === item.path ? styles['active'] : ''}`}
                              onClick={() => handleItemClick(item.path)}
                            >
                              <span className={`${styles['sidebar-icon']}`}>
                                <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['me-2']} ${item.icon}`} />
                              </span>
                              <span className={`${styles['sidebar-text']}`}>
                                {itemKey.charAt(0).toUpperCase() + itemKey.slice(1)}
                              </span>
                            </Link>
                          )}
                        </li>
                      )
                    ))}
                  </>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
