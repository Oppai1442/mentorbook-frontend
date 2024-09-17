import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="header header-five">
      <div className="header-fixed">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="container">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </a>
              <a
                href="https://mentoring.dreamstechnologies.com/html/template/index.html"
                className="navbar-brand logo"
              >
                <img
                  src="./mentoring_files/logo-5.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a
                  href="https://mentoring.dreamstechnologies.com/html/template/index.html"
                  className="menu-logo"
                >
                  <img
                    src="./mentoring_files/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </a>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times" />
                </a>
              </div>
              <ul className="main-nav">
                <li className="active megamenu has-submenu">
                  <a href="https://mentoring.dreamstechnologies.com/html/template/index.html">
                    Home <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu mega-submenu">
                    <li>
                      <div className="megamenu-wrapper">
                        <div className="row">
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="./mentoring_files/home-1.jpg"
                                    className="img-fluid "
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index.html"
                                  className="inner-demo-img"
                                >
                                  Home - 1
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo ">
                              <div className="demo-img">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-2.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="./mentoring_files/home-2.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-2.html"
                                  className="inner-demo-img"
                                >
                                  Home - 2
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-3.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="./mentoring_files/home-3.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-3.html"
                                  className="inner-demo-img"
                                >
                                  Home - 3
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-4.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="./mentoring_files/home-4.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-4.html"
                                  className="inner-demo-img"
                                >
                                  Home - 4
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo active">
                              <div className="demo-img">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-5.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="./mentoring_files/home-6.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-5.html"
                                  className="inner-demo-img"
                                >
                                  Home - 5
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-6.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="./mentoring_files/home-8.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-6.html"
                                  className="inner-demo-img"
                                >
                                  Home - 6
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-7.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="./mentoring_files/home-7.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-7.html"
                                  className="inner-demo-img"
                                >
                                  Home - 7
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3">
                            <div className="single-demo">
                              <div className="demo-img">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-8.html"
                                  className="inner-demo-img"
                                >
                                  <img
                                    src="./mentoring_files/home-5.jpg"
                                    className="img-fluid"
                                    alt="img"
                                  />
                                </a>
                              </div>
                              <div className="demo-info">
                                <a
                                  href="https://mentoring.dreamstechnologies.com/html/template/index-8.html"
                                  className="inner-demo-img"
                                >
                                  Home - 8
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="https://mentoring.dreamstechnologies.com/html/template/index-5.html">
                    Mentor <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/dashboard.html">
                        Mentor Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/bookings.html">
                        Bookings
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/schedule-timings.html">
                        Schedule Timing
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/mentee-list.html">
                        Mentee List
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/profile-mentee.html">
                        Mentee Profile
                      </a>
                    </li>
                    <li className="has-submenu">
                      <a href="https://mentoring.dreamstechnologies.com/html/template/blog.html">
                        Blog
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="https://mentoring.dreamstechnologies.com/html/template/blog.html">
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="https://mentoring.dreamstechnologies.com/html/template/blog-details.html">
                            Blog View
                          </a>
                        </li>
                        <li>
                          <a href="https://mentoring.dreamstechnologies.com/html/template/add-blog.html">
                            Add Blog
                          </a>
                        </li>
                        <li>
                          <a href="https://mentoring.dreamstechnologies.com/html/template/edit-blog.html">
                            Edit Blog
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/chat.html">
                        Chat
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/invoices.html">
                        Invoices
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/profile-settings.html">
                        Profile Settings
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/reviews.html">
                        Reviews
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/mentor-register.html">
                        Mentor Register
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="https://mentoring.dreamstechnologies.com/html/template/index-5.html">
                    Mentee <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li className="has-submenu">
                      <a href="https://mentoring.dreamstechnologies.com/html/template/index-5.html#">
                        Mentors
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="https://mentoring.dreamstechnologies.com/html/template/map-grid.html">
                            Map Grid
                          </a>
                        </li>
                        <li>
                          <a href="https://mentoring.dreamstechnologies.com/html/template/map-list.html">
                            Map List
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/search.html">
                        Search Mentor
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/profile.html">
                        Mentor Profile
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/bookings-mentee.html">
                        Bookings
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/checkout.html">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/booking-success.html">
                        Booking Success
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/dashboard-mentee.html">
                        Mentee Dashboard
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/favourites.html">
                        Favourites
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/chat-mentee.html">
                        Chat
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/profile-settings-mentee.html">
                        Profile Settings
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/change-password.html">
                        Change Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="https://mentoring.dreamstechnologies.com/html/template/index-5.html">
                    Pages <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/voice-call.html">
                        Voice Call
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/video-call.html">
                        Video Call
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/search.html">
                        Search Mentors
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/components.html">
                        Components
                      </a>
                    </li>
                    <li className="has-submenu">
                      <a href="https://mentoring.dreamstechnologies.com/html/template/invoices.html">
                        Invoices
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="https://mentoring.dreamstechnologies.com/html/template/invoices.html">
                            Invoices
                          </a>
                        </li>
                        <li>
                          <a href="https://mentoring.dreamstechnologies.com/html/template/invoice-view.html">
                            Invoice View
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/blank-page.html">
                        Starter Page
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/login.html">
                        Login
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/register.html">
                        Register
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/forgot-password.html">
                        Forgot Password
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="https://mentoring.dreamstechnologies.com/html/template/index-5.html">
                    Blog <i className="fas fa-chevron-down" />
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/blog-list.html">
                        Blog List
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/blog-grid.html">
                        Blog Grid
                      </a>
                    </li>
                    <li>
                      <a href="https://mentoring.dreamstechnologies.com/html/template/blog-details.html">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="https://mentoring.dreamstechnologies.com/html/template/admin/index.html"
                    target="_blank"
                  >
                    Admin
                  </a>
                </li>
                <li className="login-link">
                  <a href="https://mentoring.dreamstechnologies.com/html/template/login.html">
                    Login / Signup
                  </a>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://mentoring.dreamstechnologies.com/html/template/register.html"
                >
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link header-login"
                  href="https://mentoring.dreamstechnologies.com/html/template/login.html"
                >
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="sidebar-overlay" />
        <div className="sidebar-overlay" />
      </div>
    </header>
  
  );
};

export default Navbar;