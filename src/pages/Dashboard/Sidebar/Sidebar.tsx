import React, { useEffect, useState } from 'react';
import styles from './Sidebar.module.css'
import websiteLogo from '../../../assets/svg/website-logo.svg'
import { Link, useLocation } from 'react-router-dom';


const Sidebar: React.FC = () => {
  const location = useLocation();

  const pathList = {
    "overview": "/dashboard/overview",
    "traffic-source": "/dashboard/traffic-source",
    "product-analysis": "/dashboard/product-analysis",
    "messages": "/dashboard/messages",
    "user-list": "/dashboard/user-list",
    "transactions": "/dashboard/transactions",
    "task-list": "/dashboard/task-list",
    "settings": "/dashboard/settings",
    "calendar": "/dashboard/calendar",
    "map": "/dashboard/map",
  };

  const [activeItem, setActiveItem] = useState<string>(pathList['overview']);

  const handleItemClick = (path: string) => {
    setActiveItem(path);
  };

  const [openDropdowns, setOpenDropdowns] = useState<any>({});
  const dropdowns = [
    {
      title: 'Dashboard',
      items: [
        { text: 'Overview', path: pathList['overview'] },
        { text: 'All Traffic', path: pathList['traffic-source'] },
        { text: 'Product Analysis', path: pathList['product-analysis'] },
      ],
    },
  ];

  const handleItemClick2 = (path: string) => {
    setActiveItem(path);
    setOpenDropdowns((prev: any) => ({ ...prev, [path]: false }));
  };

  const toggleDropdown = (title: string) => {
    setOpenDropdowns((prev: Record<string, boolean>) => ({ ...prev, [title]: !prev[title] }));
  };

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <nav className={`${styles['navbar']} ${styles['navbar-dark']} ${styles['navbar-theme-primary']} ${styles['px-4']} ${styles['col-12']} ${styles['d-lg-none']}`}>
        <Link
          className={`${styles['navbar-brand']} ${styles['me-lg-5']}`}
          to="/"
        >
          <img
            className={`${styles['img']} ${styles['navbar-brand-dark']}`}
            src={websiteLogo}
            alt="MentorNest logo"
          />
          <img
            className={`${styles['img']} ${styles['navbar-brand-light']}`}
            src={websiteLogo}
            alt="MentorNest logo"
          />
        </Link>
        <div className={`${styles['d-flex']} ${styles['align-items-center']}`}>
          <button
            className={`${styles['button']} ${styles['navbar-toggler']} ${styles['d-lg-none']} ${styles['collapsed']}`}
            type="button"
          >
            <span className={`${styles['navbar-toggler-icon']}`} />
          </button>
        </div>
      </nav>

      <nav
        id="sidebarMenu"
        className={`${styles['sidebar']} ${styles['d-lg-block']} ${styles['bg-gray-800']} ${styles['text-white']} ${styles['collapse']}`}
        data-simplebar="init"
      >
        <div className={`${styles['simplebar-wrapper']}`} style={{ margin: 0 }}>
          <div className={`${styles['simplebar-mask']}`}>
            <div className={`${styles['simplebar-offset']}`} style={{ right: 0, bottom: 0 }}>
              <div
                className={`${styles['simplebar-content-wrapper']}`}
                style={{ height: "auto", overflow: "hidden" }}
              >
                <div className={`${styles['simplebar-content']}`} style={{ padding: 0 }}>
                  <div className={`${styles['sidebar-inner']} ${styles['px-4']} ${styles['pt-3']}`}>
                    <ul className={`${styles['ul']} ${styles['nav']} ${styles['flex-column']} ${styles['pt-3']} ${styles['pt-md-0']}`}>
                      <li className={`${styles['nav-item']}`}>
                        <Link to="/"
                          className={`${styles['nav-link']} ${styles['d-flex']} ${styles['align-items-center']}`}
                        >
                          <span className={`${styles['sidebar-icon']}`}>
                            <img className={`${styles['img']}`}
                              src={websiteLogo}
                              height={20}
                              width={20}
                              alt="MentorNest Logo"
                            />
                          </span>
                          <span className={`${styles['mt-1']} ${styles['sidebar-text']}`}>MentorNest</span>
                        </Link>
                      </li>
                      {dropdowns.map((dropdown, index) => (
                        <li key={index} className={`${styles['nav-item']}`}>
                          <span
                            className={`${styles['nav-link']} ${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}
                            onClick={() => toggleDropdown(dropdown.title)} // Gọi hàm toggle khi nhấp
                          >
                            <span>
                              <span className={`${styles['sidebar-icon']}`}>
                                <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['me-2']} fa-solid fa-chart-pie`} />
                              </span>
                              <span className={`${styles['sidebar-text']}`}>{dropdown.title}</span>
                            </span>
                            <span className={`${styles['link-arrow']}`}>
                              <i className={
                                `${styles['icon']} 
                                ${styles['icon-sm']} 
                                fa-solid 
                                ${openDropdowns[dropdown.title] ?
                                  `${styles['icon-rotate']} fa-chevron-down` :
                                  `${styles['icon-rotate']} fa-chevron-right`}`
                              }
                              ></i>
                            </span>
                          </span>
                          <div
                            className={`${styles['multi-level']} ${openDropdowns[dropdown.title] ? styles['collapse-show'] : styles['collapse']}`}
                            role="list"
                            aria-expanded={openDropdowns[dropdown.title]}
                          >
                            <ul className={`${styles['ul']} ${styles['flex-column']} ${styles['nav']}`}>
                              {dropdown.items.map((item, idx) => (
                                <li key={idx} className={`${styles['nav-item']} ${activeItem === item.path ? styles['active'] : ''}`}>
                                  <Link
                                    to={item.path}
                                    className={`${styles['nav-link']}`}
                                    onClick={() => handleItemClick2(item.path)}
                                  >
                                    <span className={`${styles['sidebar-text-contracted']}`}>{item.text.charAt(0)}</span>
                                    <span className={`${styles['sidebar-text']}`}>{item.text}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                      <li className={`${styles['nav-item']} ${activeItem === pathList['messages'] ? styles['active'] : ''}`}>
                        <Link
                          to={pathList['messages']}
                          className={`${styles['nav-link']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['justify-content-between']}`}
                          onClick={() => handleItemClick(pathList['messages'])}
                        >
                          <span>
                            <span className={`${styles['sidebar-icon']}`}>
                              <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['me-2']} fa-duotone fa-solid fa-inbox`} />

                            </span>
                            <span className={`${styles['sidebar-text']}`}>Messages</span>
                          </span>
                          <span className={`${styles['badge']} ${styles['badge-sm']} ${styles['bg-danger']} ${styles['badge-pill']} ${styles['notification-count']}`}>
                            4
                          </span>
                        </Link>
                      </li>
                      <li className={`${styles['nav-item']} ${activeItem === pathList['user-list'] ? styles['active'] : ''}`}>
                        <Link
                          to={pathList['user-list']}
                          className={`${styles['nav-link']}`}
                          onClick={() => handleItemClick(pathList['user-list'])}
                        >
                          <span className={`${styles['sidebar-icon']}`}>
                            <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['me-2']} fa-regular fa-users`} />

                          </span>
                          <span className={`${styles['sidebar-text']}`}>Users List</span>
                        </Link>
                      </li>
                      <li className={`${styles['nav-item']} ${activeItem === pathList['transactions'] ? styles['active'] : ''}`}>
                        <Link
                          to={pathList['transactions']}
                          className={`${styles['nav-link']}`}
                          onClick={() => handleItemClick(pathList['transactions'])}
                        >
                          <span className={`${styles['sidebar-icon']}`}>
                            <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['me-2']} fa-solid fa-credit-card-front`} />

                          </span>
                          <span className={`${styles['sidebar-text']}`}>Transactions</span>
                        </Link>
                      </li>
                      <li className={`${styles['nav-item']} ${activeItem === pathList['task-list'] ? styles['active'] : ''}`}>
                        <Link
                          to={pathList['task-list']}
                          className={`${styles['nav-link']}`}
                          onClick={() => handleItemClick(pathList['task-list'])}
                        >
                          <span className={`${styles['sidebar-icon']}`}>
                            <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['me-2']} fa-solid fa-list-ul`} />
                          </span>
                          <span className={`${styles['sidebar-text']}`}>Task List</span>
                        </Link>
                      </li>

                      <li className={`${styles['nav-item']} ${activeItem === pathList['settings'] ? styles['active'] : ''}`}>
                        <Link
                          to={pathList['settings']}
                          className={`${styles['nav-link']}`}
                          onClick={() => handleItemClick(pathList['settings'])}
                        >
                          <span className={`${styles['sidebar-icon']}`}>
                            <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['me-2']} fa-duotone fa-solid fa-gear-complex`} />
                          </span>
                          <span className={`${styles['sidebar-text']}`}>Settings</span>
                        </Link>
                      </li>
                      <li className={`${styles['nav-item']} ${activeItem === pathList['calendar'] ? styles['active'] : ''}`}>
                        <Link
                          to={pathList['calendar']}
                          className={`${styles['nav-link']}`}
                          onClick={() => handleItemClick(pathList['calendar'])}
                        >
                          <span className={`${styles['sidebar-icon']}`}>
                            <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['me-2']} fa-solid fa-calendar-range`} />
                          </span>
                          <span className={`${styles['sidebar-text']}`}>Calendar</span>
                        </Link>
                      </li>
                      <li className={`${styles['nav-item']} ${activeItem === pathList['map'] ? styles['active'] : ''}`}>
                        <Link
                          to={pathList['map']}
                          className={`${styles['nav-link']}`}
                          onClick={() => handleItemClick(pathList['map'])}
                        >
                          <span className={`${styles['sidebar-icon']}`}>
                            <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['me-2']} fa-regular fa-map-location-dot`} />
                          </span>
                          <span className={`${styles['sidebar-text']}`}>Map</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Sidebar;
