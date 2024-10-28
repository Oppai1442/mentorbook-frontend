import React, { useState } from 'react';
import styles from './Dashboard.module.css'

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const faqs = [
    {
      question: "Làm thế nào để đặt lịch hẹn?",
      shortAnswer: "Để đặt lịch hẹn, bạn chỉ cần truy cập vào trang đặt lịch và chọn thời gian phù hợp.",
      fullAnswer: ""
    },
    {
      question: "Có thể hủy lịch hẹn không?",
      shortAnswer: "Có, bạn có thể hủy lịch hẹn trong vòng 24 giờ trước thời điểm đã đặt.",
      fullAnswer: ""
    },
    {
      question: "Tôi có thể thay đổi thông tin cá nhân không?",
      shortAnswer: "Có, bạn có thể thay đổi thông tin cá nhân thông qua trang hồ sơ của mình.",
      fullAnswer: "ax"
    }
  ];

  const toggleAccordion = (index: number) => {
    if (isAnimating) return; // Ngăn chặn click khi đang animating
    setIsAnimating(true);

    // Đặt activeIndex
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));

    // Đặt lại isAnimating sau khoảng thời gian tương ứng với thời gian chuyển tiếp
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Thời gian phải đồng bộ với thời gian transition CSS
  };

  return (
    <>
      {/* <div className={`${styles['wrapper']}`}>
        <nav id="sidebar" className={`${styles['sidebar']} ${styles['js-sidebar']}`}>
          <div className={`${styles['sidebar-content']} ${styles['js-simplebar']}`} data-simplebar="init">
            <div className={`${styles['simplebar-wrapper']}`} style={{ margin: 0 }}>
              <div className={`${styles['simplebar-height-auto-observer-wrapper']}`}>
                <div className={`${styles['simplebar-height-auto-observer']}`} />
              </div>
              <div className={`${styles['simplebar-mask']}`}>
                <div className={`${styles['simplebar-offset']}`} style={{ right: 0, bottom: 0 }}>
                  <div
                    className={`${styles['simplebar-content-wrapper']}`}
                    tabIndex={0}
                    role="region"
                    aria-label="scrollable content"
                    style={{ height: "100%", overflow: "hidden scroll" }}
                  >
                    <div className={`${styles['simplebar-content']}`} style={{ padding: 0 }}>
                      <a className={`${styles['sidebar-brand']}`} href="https://demo.adminkit.io/">
                        <span className={`${styles['sidebar-brand-text']} ${styles['align-middle']}`}>
                          {" "}
                          AdminKit{" "}
                          <sup>
                            <small className={`${styles['badge']} ${styles['bg-primary']} ${styles['text-uppercase']}`}>
                              Pro
                            </small>
                          </sup>
                        </span>
                        <svg
                          className={`${styles['sidebar-brand-icon']} ${styles['align-middle']}`}
                          width="32px"
                          height="32px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                          strokeLinejoin="miter"
                          color="#FFFFFF"
                          style={{ marginLeft: "-3px" }}
                        >
                          <path d="M12 4L20 8.00004L12 12L4 8.00004L12 4Z" />
                          <path d="M20 12L12 16L4 12" />
                          <path d="M20 16L12 20L4 16" />
                        </svg>
                      </a>
                      <div className={`${styles['sidebar-user']}`}>
                        <div className={`${styles['d-flex']} ${styles['justify-content-center']}`}>
                          <div className={`${styles['flex-shrink-0']}`}>
                            <img
                              src="./Profile _ AdminKit Demo_files/avatar.jpg"
                              className={`${styles['avatar']} ${styles['img-fluid']} ${styles['rounded']} ${styles['me-1']}`}
                              alt="Charles Hall"
                            />
                          </div>
                          <div className={`${styles['flex-grow-1']} ${styles['ps-2']}`}>
                            <a
                              className={`${styles['sidebar-user-title']} ${styles['dropdown-toggle']}`}
                              href="https://demo.adminkit.io/pages-profile#"
                              data-bs-toggle="dropdown"
                            >
                              {" "}
                              Charles Hall{" "}
                            </a>
                            <div className={`${styles['dropdown-menu']} ${styles['dropdown-menu-start']}`}>
                              <a
                                className={`${styles['dropdown-item']}`}
                                href="https://demo.adminkit.io/pages-profile"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={`${styles['feather']} ${styles['feather-user']} ${styles['align-middle']} ${styles['me-1']}`}
                                >
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>{" "}
                                Profile{" "}
                              </a>
                              <a
                                className={`${styles['dropdown-item']}`}
                                href="https://demo.adminkit.io/pages-profile#"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={`${styles['feather']} ${styles['feather-pie-chart']} ${styles['align-middle']} ${styles['me-1']}`}
                                >
                                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                                  <path d="M22 12A10 10 0 0 0 12 2v10z" />
                                </svg>{" "}
                                Analytics{" "}
                              </a>
                              <div className={`${styles['dropdown-divider']}`} />
                              <a
                                className={`${styles['dropdown-item']}`}
                                href="https://demo.adminkit.io/pages-settings"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={`${styles['feather']} ${styles['feather-settings']} ${styles['align-middle']} ${styles['me-1']}`}
                                >
                                  <circle cx={12} cy={12} r={3} />
                                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                </svg>{" "}
                                Settings &amp; Privacy{" "}
                              </a>
                              <a
                                className={`${styles['dropdown-item']}`}
                                href="https://demo.adminkit.io/pages-profile#"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className={`${styles['feather']} ${styles['feather-help-circle']} ${styles['align-middle']} ${styles['me-1']}`}
                                >
                                  <circle cx={12} cy={12} r={10} />
                                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                  <line x1={12} y1={17} x2="12.01" y2={17} />
                                </svg>{" "}
                                Help Center{" "}
                              </a>
                              <div className={`${styles['dropdown-divider']}`} />
                              <a
                                className={`${styles['dropdown-item']}`}
                                href="https://demo.adminkit.io/pages-profile#"
                              >
                                Log out
                              </a>
                            </div>
                            <div className={`${styles['sidebar-user-subtitle']}`}>Designer</div>
                          </div>
                        </div>
                      </div>
                      <ul className={`${styles['sidebar-nav']}`}>
                        <li className={`${styles['sidebar-header']}`}> Pages </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#dashboards"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-sliders']} ${styles['align-middle']}`}
                            >
                              <line x1={4} y1={21} x2={4} y2={14} />
                              <line x1={4} y1={10} x2={4} y2={3} />
                              <line x1={12} y1={21} x2={12} y2={12} />
                              <line x1={12} y1={8} x2={12} y2={3} />
                              <line x1={20} y1={21} x2={20} y2={16} />
                              <line x1={20} y1={12} x2={20} y2={3} />
                              <line x1={1} y1={14} x2={7} y2={14} />
                              <line x1={9} y1={8} x2={15} y2={8} />
                              <line x1={17} y1={16} x2={23} y2={16} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Dashboards</span>
                          </a>
                          <ul
                            id="dashboards"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/"
                              >
                                Analytics
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/dashboard-ecommerce"
                              >
                                E-Commerce{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/dashboard-crypto"
                              >
                                Crypto{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#pages"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-layout']} ${styles['align-middle']}`}
                            >
                              <rect
                                x={3}
                                y={3}
                                width={18}
                                height={18}
                                rx={2}
                                ry={2}
                              />
                              <line x1={3} y1={9} x2={21} y2={9} />
                              <line x1={9} y1={21} x2={9} y2={9} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Pages</span>
                          </a>
                          <ul
                            id="pages"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-settings"
                              >
                                Settings
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-projects"
                              >
                                Projects{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-clients"
                              >
                                Clients{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-orders"
                              >
                                Orders{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-pricing"
                              >
                                Pricing{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-chat"
                              >
                                Chat{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-blank"
                              >
                                Blank Page
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-item']} ${styles['active']}`}>
                          <a
                            className={`${styles['sidebar-link']}`}
                            href="https://demo.adminkit.io/pages-profile"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-user']} ${styles['align-middle']}`}
                            >
                              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                              <circle cx={12} cy={7} r={4} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Profile</span>
                          </a>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            className={`${styles['sidebar-link']}`}
                            href="https://demo.adminkit.io/pages-invoice"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-credit-card']} ${styles['align-middle']}`}
                            >
                              <rect
                                x={1}
                                y={4}
                                width={22}
                                height={16}
                                rx={2}
                                ry={2}
                              />
                              <line x1={1} y1={10} x2={23} y2={10} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Invoice</span>
                          </a>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            className={`${styles['sidebar-link']}`}
                            href="https://demo.adminkit.io/pages-tasks"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-list']} ${styles['align-middle']}`}
                            >
                              <line x1={8} y1={6} x2={21} y2={6} />
                              <line x1={8} y1={12} x2={21} y2={12} />
                              <line x1={8} y1={18} x2={21} y2={18} />
                              <line x1={3} y1={6} x2="3.01" y2={6} />
                              <line x1={3} y1={12} x2="3.01" y2={12} />
                              <line x1={3} y1={18} x2="3.01" y2={18} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Tasks</span>
                            <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                              Pro
                            </span>
                          </a>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            className={`${styles['sidebar-link']}`}
                            href="https://demo.adminkit.io/calendar"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-calendar']} ${styles['align-middle']}`}
                            >
                              <rect
                                x={3}
                                y={4}
                                width={18}
                                height={18}
                                rx={2}
                                ry={2}
                              />
                              <line x1={16} y1={2} x2={16} y2={6} />
                              <line x1={8} y1={2} x2={8} y2={6} />
                              <line x1={3} y1={10} x2={21} y2={10} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Calendar</span>
                            <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                              Pro
                            </span>
                          </a>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            href="https://demo.adminkit.io/pages-profile#auth"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-users']} ${styles['align-middle']}`}
                            >
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx={9} cy={7} r={4} />
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Auth</span>
                          </a>
                          <ul
                            id="auth"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-sign-in"
                              >
                                Sign In
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-sign-up"
                              >
                                Sign Up
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-reset-password"
                              >
                                Reset Password{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-404"
                              >
                                404 Page{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/pages-500"
                              >
                                500 Page{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-header']}`}> Components </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#ui"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-briefcase']} ${styles['align-middle']}`}
                            >
                              <rect
                                x={2}
                                y={7}
                                width={20}
                                height={14}
                                rx={2}
                                ry={2}
                              />
                              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                            </svg>
                            <span className={`${styles['align-middle']}`}>UI Elements</span>
                          </a>
                          <ul
                            id="ui"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-alerts"
                              >
                                Alerts{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-buttons"
                              >
                                Buttons
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-cards"
                              >
                                Cards
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-general"
                              >
                                General
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-grid"
                              >
                                Grid
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-modals"
                              >
                                Modals{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-offcanvas"
                              >
                                Offcanvas{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-placeholders"
                              >
                                Placeholders{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-tabs"
                              >
                                Tabs{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/ui-typography"
                              >
                                Typography
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#icons"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-coffee']} ${styles['align-middle']}`}
                            >
                              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                              <line x1={6} y1={1} x2={6} y2={4} />
                              <line x1={10} y1={1} x2={10} y2={4} />
                              <line x1={14} y1={1} x2={14} y2={4} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Icons</span>
                            <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-light']}`}>
                              1.500+
                            </span>
                          </a>
                          <ul
                            id="icons"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/icons-feather"
                              >
                                Feather
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/icons-font-awesome"
                              >
                                Font Awesome{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#forms"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-check-circle']} ${styles['align-middle']}`}
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Forms</span>
                          </a>
                          <ul
                            id="forms"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/forms-basic-inputs"
                              >
                                Basic Inputs
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/forms-layouts"
                              >
                                Form Layouts{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/forms-input-groups"
                              >
                                Input Groups{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            className={`${styles['sidebar-link']}`}
                            href="https://demo.adminkit.io/tables-bootstrap"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-list']} ${styles['align-middle']}`}
                            >
                              <line x1={8} y1={6} x2={21} y2={6} />
                              <line x1={8} y1={12} x2={21} y2={12} />
                              <line x1={8} y1={18} x2={21} y2={18} />
                              <line x1={3} y1={6} x2="3.01" y2={6} />
                              <line x1={3} y1={12} x2="3.01" y2={12} />
                              <line x1={3} y1={18} x2="3.01" y2={18} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Tables</span>
                          </a>
                        </li>
                        <li className={`${styles['sidebar-header']}`}> Plugins &amp; Addons </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#form-plugins"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-check-square']} ${styles['align-middle']}`}
                            >
                              <polyline points="9 11 12 14 22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Form Plugins</span>
                          </a>
                          <ul
                            id="form-plugins"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/forms-advanced-inputs"
                              >
                                Advanced Inputs{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/forms-editors"
                              >
                                Editors{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/forms-validation"
                              >
                                Validation{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#datatables"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-list']} ${styles['align-middle']}`}
                            >
                              <line x1={8} y1={6} x2={21} y2={6} />
                              <line x1={8} y1={12} x2={21} y2={12} />
                              <line x1={8} y1={18} x2={21} y2={18} />
                              <line x1={3} y1={6} x2="3.01" y2={6} />
                              <line x1={3} y1={12} x2="3.01" y2={12} />
                              <line x1={3} y1={18} x2="3.01" y2={18} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>DataTables</span>
                          </a>
                          <ul
                            id="datatables"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/tables-datatables-responsive"
                              >
                                Responsive Table{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/tables-datatables-buttons"
                              >
                                Table with Buttons{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/tables-datatables-column-search"
                              >
                                Column Search{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/tables-datatables-fixed-header"
                              >
                                Fixed Header{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/tables-datatables-multi"
                              >
                                Multi Selection{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/tables-datatables-ajax"
                              >
                                Ajax Sourced Data{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#charts"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-bar-chart-2']} ${styles['align-middle']}`}
                            >
                              <line x1={18} y1={20} x2={18} y2={10} />
                              <line x1={12} y1={20} x2={12} y2={4} />
                              <line x1={6} y1={20} x2={6} y2={14} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Charts</span>
                          </a>
                          <ul
                            id="charts"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/charts-chartjs"
                              >
                                Chart.js
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/charts-apexcharts"
                              >
                                ApexCharts{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            className={`${styles['sidebar-link']}`}
                            href="https://demo.adminkit.io/notifications"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-bell']} ${styles['align-middle']}`}
                            >
                              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Notifications</span>
                            <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                              Pro
                            </span>
                          </a>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#maps"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-map']} ${styles['align-middle']}`}
                            >
                              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                              <line x1={8} y1={2} x2={8} y2={18} />
                              <line x1={16} y1={6} x2={16} y2={22} />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Maps</span>
                          </a>
                          <ul
                            id="maps"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/maps-google"
                              >
                                Google Maps
                              </a>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                className={`${styles['sidebar-link']}`}
                                href="https://demo.adminkit.io/maps-vector"
                              >
                                Vector Maps{" "}
                                <span className={`${styles['sidebar-badge']} ${styles['badge']} ${styles['bg-primary']}`}>
                                  Pro
                                </span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className={`${styles['sidebar-item']}`}>
                          <a
                            data-bs-target="#multi"
                            data-bs-toggle="collapse"
                            className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-corner-right-down']} ${styles['align-middle']}`}
                            >
                              <polyline points="10 15 15 20 20 15" />
                              <path d="M4 4h7a4 4 0 0 1 4 4v12" />
                            </svg>
                            <span className={`${styles['align-middle']}`}>Multi Level</span>
                          </a>
                          <ul
                            id="multi"
                            className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                            data-bs-parent="#sidebar"
                          >
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                data-bs-target="#multi-2"
                                data-bs-toggle="collapse"
                                className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                              >
                                Two Levels
                              </a>
                              <ul
                                id="multi-2"
                                className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                              >
                                <li className={`${styles['sidebar-item']}`}>
                                  <a
                                    className={`${styles['sidebar-link']}`}
                                    href="https://demo.adminkit.io/pages-profile#"
                                  >
                                    Item 1
                                  </a>
                                </li>
                                <li className={`${styles['sidebar-item']}`}>
                                  <a
                                    className={`${styles['sidebar-link']}`}
                                    href="https://demo.adminkit.io/pages-profile#"
                                  >
                                    Item 2
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className={`${styles['sidebar-item']}`}>
                              <a
                                data-bs-target="#multi-3"
                                data-bs-toggle="collapse"
                                className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                              >
                                Three Levels
                              </a>
                              <ul
                                id="multi-3"
                                className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                              >
                                <li className={`${styles['sidebar-item']}`}>
                                  <a
                                    data-bs-target="#multi-3-1"
                                    data-bs-toggle="collapse"
                                    className={`${styles['sidebar-link']} ${styles['collapsed']}`}
                                  >
                                    Item 1
                                  </a>
                                  <ul
                                    id="multi-3-1"
                                    className={`${styles['sidebar-dropdown']} ${styles['list-unstyled']} ${styles['collapse']}`}
                                  >
                                    <li className={`${styles['sidebar-item']}`}>
                                      <a
                                        className={`${styles['sidebar-link']}`}
                                        href="https://demo.adminkit.io/pages-profile#"
                                      >
                                        Item 1
                                      </a>
                                    </li>
                                    <li className={`${styles['sidebar-item']}`}>
                                      <a
                                        className={`${styles['sidebar-link']}`}
                                        href="https://demo.adminkit.io/pages-profile#"
                                      >
                                        Item 2
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className={`${styles['sidebar-item']}`}>
                                  <a
                                    className={`${styles['sidebar-link']}`}
                                    href="https://demo.adminkit.io/pages-profile#"
                                  >
                                    Item 2
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className={`${styles['sidebar-cta']}`}>
                        <div className={`${styles['sidebar-cta-content']}`}>
                          <strong className={`${styles['d-inline-block']} ${styles['mb-2']}`}>
                            Weekly Sales Report
                          </strong>
                          <div className={`${styles['mb-3']} ${styles['text-sm']}`}>
                            {" "}
                            Your weekly sales report is ready for download!{" "}
                          </div>
                          <div className={`${styles['d-grid']}`}>
                            <a
                              href="https://adminkit.io/"
                              className={`${styles['btn']} ${styles['btn-outline-primary']}`}
                              target="_blank"
                            >
                              Download
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles['simplebar-placeholder']}`}
                style={{ width: "auto", height: 1217 }}
              />
            </div>
            <div
              className={`${styles['simplebar-track']} ${styles['simplebar-horizontal']}`}
              style={{ visibility: "hidden" }}
            >
              <div
                className={`${styles['simplebar-scrollbar']}`}
                style={{ width: 0, display: "none" }}
              />
            </div>
            <div
              className={`${styles['simplebar-track']} ${styles['simplebar-vertical']}`}
              style={{ visibility: "visible" }}
            >
              <div
                className={`${styles['simplebar-scrollbar']}`}
                style={{
                  height: 738,
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "block"
                }}
              />
            </div>
          </div>
        </nav>
        <div className={`${styles['main']}`}>
          <nav className={`${styles['navbar']} ${styles['navbar-expand']} ${styles['navbar-light']} ${styles['navbar-bg']}`}>
            <a className={`${styles['sidebar-toggle']} ${styles['js-sidebar-toggle']}`}>
              <i className={`${styles['hamburger']} ${styles['align-self-center']}`} />
            </a>
            <form className={`${styles['d-none']} ${styles['d-sm-inline-block']}`}>
              <div className={`${styles['input-group']} ${styles['input-group-navbar']}`}>
                <input
                  type="text"
                  className={`${styles['form-control']}`}
                  placeholder="Search…"
                  aria-label="Search"
                />
                <button className={`${styles['btn']}`} type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${styles['feather']} ${styles['feather-search']} ${styles['align-middle']}`}
                  >
                    <circle cx={11} cy={11} r={8} />
                    <line x1={21} y1={21} x2="16.65" y2="16.65" />
                  </svg>
                </button>
              </div>
            </form>
            <ul className={`${styles['navbar-nav']} ${styles['d-none']} ${styles['d-lg-flex']}`}>
              <li className={`${styles['nav-item']} ${styles['px-2']} ${styles['dropdown']}`}>
                <a
                  className={`${styles['nav-link']} ${styles['dropdown-toggle']}`}
                  href="https://demo.adminkit.io/pages-profile#"
                  id="megaDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Mega Menu{" "}
                </a>
                <div
                  className={`${styles['dropdown-menu']} ${styles['dropdown-menu-start']} ${styles['dropdown-mega']}`}
                  aria-labelledby="megaDropdown"
                >
                  <div className={`${styles['d-md-flex']} ${styles['align-items-start']} ${styles['justify-content-start']}`}>
                    <div className={`${styles['dropdown-mega-list']}`}>
                      <div className={`${styles['dropdown-header']}`}>UI Elements</div>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Alerts
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Buttons
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Cards
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Carousel
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        General
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Grid
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Modals
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Tabs
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Typography
                      </a>
                    </div>
                    <div className={`${styles['dropdown-mega-list']}`}>
                      <div className={`${styles['dropdown-header']}`}>Forms</div>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Layouts
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Basic Inputs
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Input Groups
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Advanced Inputs
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Editors
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Validation
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Wizard
                      </a>
                    </div>
                    <div className={`${styles['dropdown-mega-list']}`}>
                      <div className={`${styles['dropdown-header']}`}>Tables</div>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Basic Tables
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Responsive Table
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Table with Buttons
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Column Search
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Muulti Selection
                      </a>
                      <a
                        className={`${styles['dropdown-item']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Ajax Sourced Data
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className={`${styles['nav-item']} ${styles['dropdown']}`}>
                <a
                  className={`${styles['nav-link']} ${styles['dropdown-toggle']}`}
                  href="https://demo.adminkit.io/pages-profile#"
                  id="resourcesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {" "}
                  Resources{" "}
                </a>
                <div className={`${styles['dropdown-menu']}`} aria-labelledby="resourcesDropdown">
                  <a
                    className={`${styles['dropdown-item']}`}
                    href="https://adminkit.io/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${styles['feather']} ${styles['feather-home']} ${styles['align-middle']} ${styles['me-1']}`}
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>{" "}
                    Homepage{" "}
                  </a>
                  <a
                    className={`${styles['dropdown-item']}`}
                    href="https://adminkit.io/docs/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${styles['feather']} ${styles['feather-book-open']} ${styles['align-middle']} ${styles['me-1']}`}
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>{" "}
                    Documentation{" "}
                  </a>
                  <a
                    className={`${styles['dropdown-item']}`}
                    href="https://adminkit.io/docs/getting-started/changelog/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${styles['feather']} ${styles['feather-edit']} ${styles['align-middle']} ${styles['me-1']}`}
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>{" "}
                    Changelog{" "}
                  </a>
                </div>
              </li>
            </ul>
            <div className={`${styles['navbar-collapse']} ${styles['collapse']}`}>
              <ul className={`${styles['navbar-nav']} ${styles['navbar-align']}`}>
                <li className={`${styles['nav-item']} ${styles['dropdown']}`}>
                  <a
                    className={`${styles['nav-icon']} ${styles['dropdown-toggle']}`}
                    href="https://demo.adminkit.io/pages-profile#"
                    id="alertsDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <div className={`${styles['position-relative']}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${styles['feather']} ${styles['feather-bell']} ${styles['align-middle']}`}
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                      <span className={`${styles['indicator']}`}>4</span>
                    </div>
                  </a>
                  <div
                    className={`${styles['dropdown-menu']} ${styles['dropdown-menu-lg']} ${styles['dropdown-menu-end']} ${styles['py-0']}`}
                    aria-labelledby="alertsDropdown"
                  >
                    <div className={`${styles['dropdown-menu-header']}`}> 4 New Notifications </div>
                    <div className={`${styles['list-group']}`}>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['list-group-item']}`}
                      >
                        <div className={`${styles['row']} ${styles['g-0']} ${styles['align-items-center']}`}>
                          <div className={`${styles['col-2']}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-alert-circle']} ${styles['text-danger']}`}
                            >
                              <circle cx={12} cy={12} r={10} />
                              <line x1={12} y1={8} x2={12} y2={12} />
                              <line x1={12} y1={16} x2="12.01" y2={16} />
                            </svg>
                          </div>
                          <div className={`${styles['col-10']}`}>
                            <div className={`${styles['text-dark']}`}>Update completed</div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>
                              Restart server 12 to complete the update.
                            </div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>30m ago</div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['list-group-item']}`}
                      >
                        <div className={`${styles['row']} ${styles['g-0']} ${styles['align-items-center']}`}>
                          <div className={`${styles['col-2']}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-bell']} ${styles['text-warning']}`}
                            >
                              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                          </div>
                          <div className={`${styles['col-10']}`}>
                            <div className={`${styles['text-dark']}`}>Lorem ipsum</div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>
                              Aliquam ex eros, imperdiet vulputate hendrerit et.
                            </div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['list-group-item']}`}
                      >
                        <div className={`${styles['row']} ${styles['g-0']} ${styles['align-items-center']}`}>
                          <div className={`${styles['col-2']}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-home']} ${styles['text-primary']}`}
                            >
                              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                              <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                          </div>
                          <div className={`${styles['col-10']}`}>
                            <div className={`${styles['text-dark']}`}>Login from 192.186.1.8</div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>5h ago</div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['list-group-item']}`}
                      >
                        <div className={`${styles['row']} ${styles['g-0']} ${styles['align-items-center']}`}>
                          <div className={`${styles['col-2']}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-user-plus']} ${styles['text-success']}`}
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                              <circle cx="8.5" cy={7} r={4} />
                              <line x1={20} y1={8} x2={20} y2={14} />
                              <line x1={23} y1={11} x2={17} y2={11} />
                            </svg>
                          </div>
                          <div className={`${styles['col-10']}`}>
                            <div className={`${styles['text-dark']}`}>New connection</div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>
                              Christina accepted your request.{" "}
                            </div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>14h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={`${styles['dropdown-menu-footer']}`}>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['text-muted']}`}
                      >
                        Show all notifications
                      </a>
                    </div>
                  </div>
                </li>
                <li className={`${styles['nav-item']} ${styles['dropdown']}`}>
                  <a
                    className={`${styles['nav-icon']} ${styles['dropdown-toggle']}`}
                    href="https://demo.adminkit.io/pages-profile#"
                    id="messagesDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <div className={`${styles['position-relative']}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${styles['feather']} ${styles['feather-message-square']} ${styles['align-middle']}`}
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                  </a>
                  <div
                    className={`${styles['dropdown-menu']} ${styles['dropdown-menu-lg']} ${styles['dropdown-menu-end']} ${styles['py-0']}`}
                    aria-labelledby="messagesDropdown"
                  >
                    <div className={`${styles['dropdown-menu-header']}`}>
                      <div className={`${styles['position-relative']}`}> 4 New Messages </div>
                    </div>
                    <div className={`${styles['list-group']}`}>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['list-group-item']}`}
                      >
                        <div className={`${styles['row']} ${styles['g-0']} ${styles['align-items-center']}`}>
                          <div className={`${styles['col-2']}`}>
                            <img
                              src="./Profile _ AdminKit Demo_files/avatar-5.jpg"
                              className={`${styles['avatar']} ${styles['img-fluid']} ${styles['rounded-circle']}`}
                              alt="Vanessa Tucker"
                            />
                          </div>
                          <div className={`${styles['col-10']} ${styles['ps-2']}`}>
                            <div className={`${styles['text-dark']}`}>Vanessa Tucker</div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>
                              Nam pretium turpis et arcu. Duis arcu tortor.
                            </div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>15m ago</div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['list-group-item']}`}
                      >
                        <div className={`${styles['row']} ${styles['g-0']} ${styles['align-items-center']}`}>
                          <div className={`${styles['col-2']}`}>
                            <img
                              src="./Profile _ AdminKit Demo_files/avatar-2.jpg"
                              className={`${styles['avatar']} ${styles['img-fluid']} ${styles['rounded-circle']}`}
                              alt="William Harris"
                            />
                          </div>
                          <div className={`${styles['col-10']} ${styles['ps-2']}`}>
                            <div className={`${styles['text-dark']}`}>William Harris</div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>
                              Curabitur ligula sapien euismod vitae.
                            </div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['list-group-item']}`}
                      >
                        <div className={`${styles['row']} ${styles['g-0']} ${styles['align-items-center']}`}>
                          <div className={`${styles['col-2']}`}>
                            <img
                              src="./Profile _ AdminKit Demo_files/avatar-4.jpg"
                              className={`${styles['avatar']} ${styles['img-fluid']} ${styles['rounded-circle']}`}
                              alt="Christina Mason"
                            />
                          </div>
                          <div className={`${styles['col-10']} ${styles['ps-2']}`}>
                            <div className={`${styles['text-dark']}`}>Christina Mason</div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>
                              Pellentesque auctor neque nec urna.{" "}
                            </div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>4h ago</div>
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['list-group-item']}`}
                      >
                        <div className={`${styles['row']} ${styles['g-0']} ${styles['align-items-center']}`}>
                          <div className={`${styles['col-2']}`}>
                            <img
                              src="./Profile _ AdminKit Demo_files/avatar-3.jpg"
                              className={`${styles['avatar']} ${styles['img-fluid']} ${styles['rounded-circle']}`}
                              alt="Sharon Lessman"
                            />
                          </div>
                          <div className={`${styles['col-10']} ${styles['ps-2']}`}>
                            <div className={`${styles['text-dark']}`}>Sharon Lessman</div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>
                              Aenean tellus metus, bibendum sed, posuere ac, mattis
                              non.
                            </div>
                            <div className={`${styles['text-muted']} ${styles['small']} ${styles['mt-1']}`}>5h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className={`${styles['dropdown-menu-footer']}`}>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['text-muted']}`}
                      >
                        Show all messages
                      </a>
                    </div>
                  </div>
                </li>
                <li className={`${styles['nav-item']} ${styles['dropdown']}`}>
                  <a
                    className={`${styles['nav-flag']} ${styles['dropdown-toggle']}`}
                    href="https://demo.adminkit.io/pages-profile#"
                    id="languageDropdown"
                    data-bs-toggle="dropdown"
                  >
                    <img src="./Profile _ AdminKit Demo_files/us.png" alt="English" />
                  </a>
                  <div
                    className={`${styles['dropdown-menu']} ${styles['dropdown-menu-end']}`}
                    aria-labelledby="languageDropdown"
                  >
                    <a
                      className={`${styles['dropdown-item']}`}
                      href="https://demo.adminkit.io/pages-profile#"
                    >
                      <img
                        src="./Profile _ AdminKit Demo_files/us.png"
                        alt="English"
                        width={20}
                        className={`${styles['align-middle']} ${styles['me-1']}`}
                      />
                      <span className={`${styles['align-middle']}`}>English</span>
                    </a>
                    <a
                      className={`${styles['dropdown-item']}`}
                      href="https://demo.adminkit.io/pages-profile#"
                    >
                      <img
                        src="./Profile _ AdminKit Demo_files/es.png"
                        alt="Spanish"
                        width={20}
                        className={`${styles['align-middle']} ${styles['me-1']}`}
                      />
                      <span className={`${styles['align-middle']}`}>Spanish</span>
                    </a>
                    <a
                      className={`${styles['dropdown-item']}`}
                      href="https://demo.adminkit.io/pages-profile#"
                    >
                      <img
                        src="./Profile _ AdminKit Demo_files/ru.png"
                        alt="Russian"
                        width={20}
                        className={`${styles['align-middle']} ${styles['me-1']}`}
                      />
                      <span className={`${styles['align-middle']}`}>Russian</span>
                    </a>
                    <a
                      className={`${styles['dropdown-item']}`}
                      href="https://demo.adminkit.io/pages-profile#"
                    >
                      <img
                        src="./Profile _ AdminKit Demo_files/de.png"
                        alt="German"
                        width={20}
                        className={`${styles['align-middle']} ${styles['me-1']}`}
                      />
                      <span className={`${styles['align-middle']}`}>German</span>
                    </a>
                  </div>
                </li>
                <li className={`${styles['nav-item']}`}>
                  <a
                    className={`${styles['nav-icon']} ${styles['js-fullscreen']} ${styles['d-none']} ${styles['d-lg-block']}`}
                    href="https://demo.adminkit.io/pages-profile#"
                  >
                    <div className={`${styles['position-relative']}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${styles['feather']} ${styles['feather-maximize']} ${styles['align-middle']}`}
                      >
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                    </div>
                  </a>
                </li>
                <li className={`${styles['nav-item']} ${styles['dropdown']}`}>
                  <a
                    className={`${styles['nav-icon']} ${styles['pe-md-0']} ${styles['dropdown-toggle']}`}
                    href="https://demo.adminkit.io/pages-profile#"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src="./Profile _ AdminKit Demo_files/avatar.jpg"
                      className={`${styles['avatar']} ${styles['img-fluid']} ${styles['rounded']}`}
                      alt="Charles Hall"
                    />
                  </a>
                  <div className={`${styles['dropdown-menu']} ${styles['dropdown-menu-end']}`}>
                    <a
                      className={`${styles['dropdown-item']}`}
                      href="https://demo.adminkit.io/pages-profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${styles['feather']} ${styles['feather-user']} ${styles['align-middle']} ${styles['me-1']}`}
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>{" "}
                      Profile{" "}
                    </a>
                    <a
                      className={`${styles['dropdown-item']}`}
                      href="https://demo.adminkit.io/pages-profile#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${styles['feather']} ${styles['feather-pie-chart']} ${styles['align-middle']} ${styles['me-1']}`}
                      >
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                        <path d="M22 12A10 10 0 0 0 12 2v10z" />
                      </svg>{" "}
                      Analytics{" "}
                    </a>
                    <div className={`${styles['dropdown-divider']}`} />
                    <a
                      className={`${styles['dropdown-item']}`}
                      href="https://demo.adminkit.io/pages-settings"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${styles['feather']} ${styles['feather-settings']} ${styles['align-middle']} ${styles['me-1']}`}
                      >
                        <circle cx={12} cy={12} r={3} />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>{" "}
                      Settings &amp; Privacy{" "}
                    </a>
                    <a
                      className={`${styles['dropdown-item']}`}
                      href="https://demo.adminkit.io/pages-profile#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`${styles['feather']} ${styles['feather-help-circle']} ${styles['align-middle']} ${styles['me-1']}`}
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <line x1={12} y1={17} x2="12.01" y2={17} />
                      </svg>{" "}
                      Help Center{" "}
                    </a>
                    <div className={`${styles['dropdown-divider']}`} />
                    <a
                      className={`${styles['dropdown-item']}`}
                      href="https://demo.adminkit.io/pages-profile#"
                    >
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className={`${styles['content']}`}>
            <div className={`${styles['container-fluid']} ${styles['p-0']}`}>
              <h1 className={`${styles['h3']} ${styles['mb-3']}`}>Profile</h1>
              <div className={`${styles['row']}`}>
                <div className={`${styles['col-md-4']} ${styles['col-xl-3']}`}>
                  <div className={`${styles['card']} ${styles['mb-3']}`}>
                    <div className={`${styles['card-header']}`}>
                      <h5 className={`${styles['card-title']} ${styles['mb-0']}`}>Profile Details</h5>
                    </div>
                    <div className={`${styles['card-body']} ${styles['text-center']}`}>
                      <img
                        src="./Profile _ AdminKit Demo_files/avatar-4.jpg"
                        alt="Christina Mason"
                        className={`${styles['img-fluid']} ${styles['rounded-circle']} ${styles['mb-2']}`}
                        width={128}
                        height={128}
                      />
                      <h5 className={`${styles['card-title']} ${styles['mb-0']}`}>Christina Mason</h5>
                      <div className={`${styles['text-muted']} ${styles['mb-2']}`}>Lead Developer</div>
                      <div>
                        <a
                          className={`${styles['btn']} ${styles['btn-primary']} ${styles['btn-sm']}`}
                          href="https://demo.adminkit.io/pages-profile#"
                        >
                          Follow
                        </a>
                        <a
                          className={`${styles['btn']} ${styles['btn-primary']} ${styles['btn-sm']}`}
                          href="https://demo.adminkit.io/pages-profile#"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${styles['feather']} ${styles['feather-message-square']}`}
                          >
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                          </svg>{" "}
                          Message{" "}
                        </a>
                      </div>
                    </div>
                    <hr className={`${styles['my-0']}`} />
                    <div className={`${styles['card-body']}`}>
                      <h5 className={`${styles['h6']} ${styles['card-title']}`}>Skills</h5>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['badge']} ${styles['bg-primary']} ${styles['me-1']} ${styles['my-1']}`}
                      >
                        HTML
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['badge']} ${styles['bg-primary']} ${styles['me-1']} ${styles['my-1']}`}
                      >
                        JavaScript
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['badge']} ${styles['bg-primary']} ${styles['me-1']} ${styles['my-1']}`}
                      >
                        Sass
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['badge']} ${styles['bg-primary']} ${styles['me-1']} ${styles['my-1']}`}
                      >
                        Angular
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['badge']} ${styles['bg-primary']} ${styles['me-1']} ${styles['my-1']}`}
                      >
                        Vue
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['badge']} ${styles['bg-primary']} ${styles['me-1']} ${styles['my-1']}`}
                      >
                        React
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['badge']} ${styles['bg-primary']} ${styles['me-1']} ${styles['my-1']}`}
                      >
                        Redux
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['badge']} ${styles['bg-primary']} ${styles['me-1']} ${styles['my-1']}`}
                      >
                        UI
                      </a>
                      <a
                        href="https://demo.adminkit.io/pages-profile#"
                        className={`${styles['badge']} ${styles['bg-primary']} ${styles['me-1']} ${styles['my-1']}`}
                      >
                        UX
                      </a>
                    </div>
                    <hr className={`${styles['my-0']}`} />
                    <div className={`${styles['card-body']}`}>
                      <h5 className={`${styles['h6']} ${styles['card-title']}`}>About</h5>
                      <ul className={`${styles['list-unstyled']} ${styles['mb-0']}`}>
                        <li className={`${styles['mb-1']}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${styles['feather']} ${styles['feather-home']} ${styles['feather-sm']} ${styles['me-1']}`}
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>{" "}
                          Lives in{" "}
                          <a href="https://demo.adminkit.io/pages-profile#">
                            San Francisco, SA
                          </a>
                        </li>
                        <li className={`${styles['mb-1']}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${styles['feather']} ${styles['feather-briefcase']} ${styles['feather-sm']} ${styles['me-1']}`}
                          >
                            <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          </svg>{" "}
                          Works at{" "}
                          <a href="https://demo.adminkit.io/pages-profile#">GitHub</a>
                        </li>
                        <li className={`${styles['mb-1']}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${styles['feather']} ${styles['feather-map-pin']} ${styles['feather-sm']} ${styles['me-1']}`}
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx={12} cy={10} r={3} />
                          </svg>{" "}
                          From{" "}
                          <a href="https://demo.adminkit.io/pages-profile#">Boston</a>
                        </li>
                      </ul>
                    </div>
                    <hr className={`${styles['my-0']}`} />
                    <div className={`${styles['card-body']}`}>
                      <h5 className={`${styles['h6']} ${styles['card-title']}`}>Elsewhere</h5>
                      <ul className={`${styles['list-unstyled']} ${styles['mb-0']}`}>
                        <li className={`${styles['mb-1']}`}>
                          <span className={`${styles['fas']} ${styles['fa-globe']} ${styles['fa-fw']} ${styles['me-1']}`} />
                          <a href="https://demo.adminkit.io/pages-profile#">
                            staciehall.co
                          </a>
                        </li>
                        <li className={`${styles['mb-1']}`}>
                          <span className={`${styles['fab']} ${styles['fa-twitter']} ${styles['fa-fw']} ${styles['me-1']}`} />
                          <a href="https://demo.adminkit.io/pages-profile#">
                            Twitter
                          </a>
                        </li>
                        <li className={`${styles['mb-1']}`}>
                          <span className={`${styles['fab']} ${styles['fa-facebook']} ${styles['fa-fw']} ${styles['me-1']}`} />
                          <a href="https://demo.adminkit.io/pages-profile#">
                            Facebook
                          </a>
                        </li>
                        <li className={`${styles['mb-1']}`}>
                          <span className={`${styles['fab']} ${styles['fa-instagram']} ${styles['fa-fw']} ${styles['me-1']}`} />
                          <a href="https://demo.adminkit.io/pages-profile#">
                            Instagram
                          </a>
                        </li>
                        <li className={`${styles['mb-1']}`}>
                          <span className={`${styles['fab']} ${styles['fa-linkedin']} ${styles['fa-fw']} ${styles['me-1']}`} />
                          <a href="https://demo.adminkit.io/pages-profile#">
                            LinkedIn
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`${styles['col-md-8']} ${styles['col-xl-9']}`}>
                  <div className={`${styles['card']}`}>
                    <div className={`${styles['card-header']}`}>
                      <h5 className={`${styles['card-title']} ${styles['mb-0']}`}>Activities</h5>
                    </div>
                    <div className={`${styles['card-body']} ${styles['h-100']}`}>
                      <div className={`${styles['d-flex']} ${styles['align-items-start']}`}>
                        <img
                          src="./Profile _ AdminKit Demo_files/avatar-5.jpg"
                          width={36}
                          height={36}
                          className={`${styles['rounded-circle']} ${styles['me-2']}`}
                          alt="Vanessa Tucker"
                        />
                        <div className={`${styles['flex-grow-1']}`}>
                          <small className={`${styles['float-end']} ${styles['text-navy']}`}>5m ago</small>
                          <strong>Vanessa Tucker</strong> started following{" "}
                          <strong>Christina Mason</strong>
                          <br />
                          <small className={`${styles['text-muted']}`}>Today 7:51 pm</small>
                          <br />
                        </div>
                      </div>
                      <hr />
                      <div className={`${styles['d-flex']} ${styles['align-items-start']}`}>
                        <img
                          src="./Profile _ AdminKit Demo_files/avatar.jpg"
                          width={36}
                          height={36}
                          className={`${styles['rounded-circle']} ${styles['me-2']}`}
                          alt="Charles Hall"
                        />
                        <div className={`${styles['flex-grow-1']}`}>
                          <small className={`${styles['float-end']} ${styles['text-navy']}`}>30m ago</small>
                          <strong>Charles Hall</strong> posted something on{" "}
                          <strong>Christina Mason</strong>'s timeline <br />
                          <small className={`${styles['text-muted']}`}>Today 7:21 pm</small>
                          <div className={`${styles['border']} ${styles['text-sm']} ${styles['text-muted']} ${styles['p-2']} ${styles['mt-1']}`}>
                            {" "}
                            Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                            rhoncus, sem quam semper libero, sit amet adipiscing sem
                            neque sed ipsum. Nam quam nunc, blandit vel, luctus
                            pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                            tincidunt tempus. Donec vitae sapien ut libero venenatis
                            faucibus. Nullam quis ante.{" "}
                          </div>
                          <a
                            href="https://demo.adminkit.io/pages-profile#"
                            className={`${styles['btn']} ${styles['btn-sm']} ${styles['btn-danger']} ${styles['mt-1']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-heart']} ${styles['feather-sm']}`}
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>{" "}
                            Like{" "}
                          </a>
                        </div>
                      </div>
                      <hr />
                      <div className={`${styles['d-flex']} ${styles['align-items-start']}`}>
                        <img
                          src="./Profile _ AdminKit Demo_files/avatar-4.jpg"
                          width={36}
                          height={36}
                          className={`${styles['rounded-circle']} ${styles['me-2']}`}
                          alt="Christina Mason"
                        />
                        <div className={`${styles['flex-grow-1']}`}>
                          <small className={`${styles['float-end']} ${styles['text-navy']}`}>1h ago</small>
                          <strong>Christina Mason</strong> posted a new blog <br />
                          <small className={`${styles['text-muted']}`}>Today 6:35 pm</small>
                        </div>
                      </div>
                      <hr />
                      <div className={`${styles['d-flex']} ${styles['align-items-start']}`}>
                        <img
                          src="./Profile _ AdminKit Demo_files/avatar-2.jpg"
                          width={36}
                          height={36}
                          className={`${styles['rounded-circle']} ${styles['me-2']}`}
                          alt="William Harris"
                        />
                        <div className={`${styles['flex-grow-1']}`}>
                          <small className={`${styles['float-end']} ${styles['text-navy']}`}>3h ago</small>
                          <strong>William Harris</strong> posted two photos on{" "}
                          <strong>Christina Mason</strong>'s timeline <br />
                          <small className={`${styles['text-muted']}`}>Today 5:12 pm</small>
                          <div className={`${styles['row']} ${styles['g-0']} ${styles['mt-1']}`}>
                            <div className={`${styles['col-6']} ${styles['col-md-4']} ${styles['col-lg-4']} ${styles['col-xl-3']}`}>
                              <img
                                src="./Profile _ AdminKit Demo_files/unsplash-1.jpg"
                                className={`${styles['img-fluid']} ${styles['pe-2']}`}
                                alt="Unsplash"
                              />
                            </div>
                            <div className={`${styles['col-6']} ${styles['col-md-4']} ${styles['col-lg-4']} ${styles['col-xl-3']}`}>
                              <img
                                src="./Profile _ AdminKit Demo_files/unsplash-2.jpg"
                                className={`${styles['img-fluid']} ${styles['pe-2']}`}
                                alt="Unsplash"
                              />
                            </div>
                          </div>
                          <a
                            href="https://demo.adminkit.io/pages-profile#"
                            className={`${styles['btn']} ${styles['btn-sm']} ${styles['btn-danger']} ${styles['mt-1']}`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className={`${styles['feather']} ${styles['feather-heart']} ${styles['feather-sm']}`}
                            >
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                            </svg>{" "}
                            Like{" "}
                          </a>
                        </div>
                      </div>
                      <hr />
                      <div className={`${styles['d-flex']} ${styles['align-items-start']}`}>
                        <img
                          src="./Profile _ AdminKit Demo_files/avatar-2.jpg"
                          width={36}
                          height={36}
                          className={`${styles['rounded-circle']} ${styles['me-2']}`}
                          alt="William Harris"
                        />
                        <div className={`${styles['flex-grow-1']}`}>
                          <small className={`${styles['float-end']} ${styles['text-navy']}`}>1d ago</small>
                          <strong>William Harris</strong> started following{" "}
                          <strong>Christina Mason</strong>
                          <br />
                          <small className={`${styles['text-muted']}`}>Yesterday 3:12 pm</small>
                          <div className={`${styles['d-flex']} ${styles['align-items-start']} ${styles['mt-1']}`}>
                            <a
                              className={`${styles['pe-3']}`}
                              href="https://demo.adminkit.io/pages-profile#"
                            >
                              <img
                                src="./Profile _ AdminKit Demo_files/avatar-4.jpg"
                                width={36}
                                height={36}
                                className={`${styles['rounded-circle']} ${styles['me-2']}`}
                                alt="Christina Mason"
                              />
                            </a>
                            <div className={`${styles['flex-grow-1']}`}>
                              <div className={`${styles['border']} ${styles['text-sm']} ${styles['text-muted']} ${styles['p-2']} ${styles['mt-1']}`}>
                                {" "}
                                Nam quam nunc, blandit vel, luctus pulvinar, hendrerit
                                id, lorem. Maecenas nec odio et ante tincidunt tempus.{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className={`${styles['d-flex']} ${styles['align-items-start']}`}>
                        <img
                          src="./Profile _ AdminKit Demo_files/avatar-4.jpg"
                          width={36}
                          height={36}
                          className={`${styles['rounded-circle']} ${styles['me-2']}`}
                          alt="Christina Mason"
                        />
                        <div className={`${styles['flex-grow-1']}`}>
                          <small className={`${styles['float-end']} ${styles['text-navy']}`}>1d ago</small>
                          <strong>Christina Mason</strong> posted a new blog <br />
                          <small className={`${styles['text-muted']}`}>Yesterday 2:43 pm</small>
                        </div>
                      </div>
                      <hr />
                      <div className={`${styles['d-flex']} ${styles['align-items-start']}`}>
                        <img
                          src="./Profile _ AdminKit Demo_files/avatar.jpg"
                          width={36}
                          height={36}
                          className={`${styles['rounded-circle']} ${styles['me-2']}`}
                          alt="Charles Hall"
                        />
                        <div className={`${styles['flex-grow-1']}`}>
                          <small className={`${styles['float-end']} ${styles['text-navy']}`}>1d ago</small>
                          <strong>Charles Hall</strong> started following{" "}
                          <strong>Christina Mason</strong>
                          <br />
                          <small className={`${styles['text-muted']}`}>Yesterdag 1:51 pm</small>
                        </div>
                      </div>
                      <hr />
                      <div className={`${styles['d-grid']}`}>
                        <a
                          href="https://demo.adminkit.io/pages-profile#"
                          className={`${styles['btn']} ${styles['btn-primary']}`}
                        >
                          Load more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className={`${styles['footer']}`}>
            <div className={`${styles['container-fluid']}`}>
              <div className={`${styles['row']} ${styles['text-muted']}`}>
                <div className={`${styles['col-6']} ${styles['text-start']}`}>
                  <p className={`${styles['mb-0']}`}>
                    <a
                      href="https://adminkit.io/"
                      target="_blank"
                      className={`${styles['text-muted']}`}
                    >
                      <strong>AdminKit</strong>
                    </a>{" "}
                    ©
                  </p>
                </div>
                <div className={`${styles['col-6']} ${styles['text-end']}`}>
                  <ul className={`${styles['list-inline']}`}>
                    <li className={`${styles['list-inline-item']}`}>
                      <a
                        className={`${styles['text-muted']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Support
                      </a>
                    </li>
                    <li className={`${styles['list-inline-item']}`}>
                      <a
                        className={`${styles['text-muted']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Help Center
                      </a>
                    </li>
                    <li className={`${styles['list-inline-item']}`}>
                      <a
                        className={`${styles['text-muted']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className={`${styles['list-inline-item']}`}>
                      <a
                        className={`${styles['text-muted']}`}
                        href="https://demo.adminkit.io/pages-profile#"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div> */}

    </>
  );
};

export default Dashboard;