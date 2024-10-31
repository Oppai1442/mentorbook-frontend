import React, { } from 'react';
import styles from './Navbar.module.css'


const Navbar: React.FC = () => {
    return (
        <>
            <nav className={`${styles['navbar']} ${styles['navbar-top']} ${styles['navbar-expand']} ${styles['navbar-dashboard']} ${styles['navbar-dark']}`}>
                <div className={`${styles['container-fluid']} ${styles['px-0']}`}>
                    <div
                        className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['w-100']}`}
                        id="navbarSupportedContent"
                    >
                        <div className={`${styles['d-flex']} ${styles['align-items-center']}`}>
                            <button
                                id="sidebar-toggle"
                                className={`${styles['sidebar-toggle']} ${styles['me-3']} ${styles['btn']} ${styles['btn-icon-only']} ${styles['d-none']} ${styles['d-lg-inline-block']} ${styles['align-items-center']} ${styles['justify-content-center']}`}
                            >
                                <i className={`${styles['toggle-icon']} fa-regular fa-bars`} />
                            </button>
                            {/* Search form */}
                            <form className={`${styles['navbar-search']} ${styles['form-inline']}`} id="navbar-search-main">
                                <div className={`${styles['input-group']} ${styles['input-group-merge']} ${styles['search-bar']}`}>
                                    <span className={`${styles['input-group-text']}`} id="topbar-addon">
                                        <i className="fa-light fa-magnifying-glass" />
                                    </span>
                                    <input
                                        type="text"
                                        className={`${styles['form-control']}`}
                                        id="topbarInputIconLeft"
                                        placeholder="Search"
                                        aria-label="Search"
                                        aria-describedby="topbar-addon"
                                    />
                                </div>
                            </form>
                            {/* / Search form */}
                        </div>
                        {/* Navbar links */}
                        <ul className={`${styles['navbar-nav']} ${styles['align-items-center']}`}>
                            <li className={`${styles['nav-item']} ${styles['dropdown']}`}>
                                <a
                                    className={`${styles['nav-link']} ${styles['text-dark']} ${styles['notification-bell']} ${styles['unread']} ${styles['dropdown-toggle']}`}
                                    data-unread-notifications="true"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    data-bs-display="static"
                                    aria-expanded="false"
                                >
                                    <i className="fa-solid fa-bell fa-lg" style={{ color: "#000000" }} />

                                </a>
                                <div className={`${styles['dropdown-menu']} ${styles['dropdown-menu-lg']} ${styles['dropdown-menu-center']} ${styles['mt-2']} ${styles['py-0']}`}>
                                    <div className={`${styles['list-group']} ${styles['list-group-flush']}`}>
                                        <a
                                            href="#"
                                            className={`${styles['text-center']} ${styles['text-primary']} ${styles['fw-bold']} ${styles['border-bottom']} ${styles['border-light']} ${styles['py-3']}`}
                                        >
                                            Notifications
                                        </a>
                                        <a
                                            href="../pages/calendar.html"
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        alt="Image placeholder"
                                                        src="../assets/img/team/profile-picture-1.jpg"
                                                        className={`${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['ms-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Jose Leos</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small className={`${styles['text-danger']}`}>a few moments ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        Added you to an event "Project stand-up" tomorrow at 12:30
                                                        AM.
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="../pages/tasks.html"
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        alt="Image placeholder"
                                                        src="../assets/img/team/profile-picture-2.jpg"
                                                        className={`${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['ms-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Neil Sims</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small className={`${styles['text-danger']}`}>2 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        You've been assigned a task for "Awesome new project".
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="../pages/tasks.html"
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        alt="Image placeholder"
                                                        src="../assets/img/team/profile-picture-3.jpg"
                                                        className={`${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['m-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Roberta Casas</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small>5 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        Tagged you in a document called "Financial plans",
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="../pages/single-message.html"
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        alt="Image placeholder"
                                                        src="../assets/img/team/profile-picture-4.jpg"
                                                        className={`${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['ms-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Joseph Garth</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small>1 d ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        New message: "Hey, what's up? All set for the
                                                        presentation?"
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="../pages/single-message.html"
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        alt="Image placeholder"
                                                        src="../assets/img/team/profile-picture-5.jpg"
                                                        className={`${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['ms-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Bonnie Green</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small>2 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        New message: "We need to improve the UI/UX for the landing
                                                        page."
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="#"
                                            className={`${styles['dropdown-item']} ${styles['text-center']} ${styles['fw-bold']} ${styles['rounded-bottom']} ${styles['py-3']}`}
                                        >
                                            <svg
                                                className={`${styles['icon']} ${styles['icon-xxs']} ${styles['text-gray-400']} ${styles['me-1']}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className={`${styles['nav-item']} ${styles['dropdown']} ${styles['ms-lg-3']}`}>
                                <a
                                    className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['pt-1']} ${styles['px-0']}`}
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <div className={`${styles['media']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                                        <img
                                            className={`${styles['avatar']} ${styles['rounded-circle']}`}
                                            alt="Image placeholder"
                                            src="../assets/img/team/profile-picture-3.jpg"
                                        />
                                        <div className={`${styles['media-body']} ${styles['ms-2']} ${styles['text-dark']} ${styles['align-items-center']} ${styles['d-none']} ${styles['d-lg-block']}`}>
                                            <span className={`${styles['mb-0']} ${styles['font-small']} ${styles['fw-bold']} ${styles['text-gray-900']}`}>
                                                Bonnie Green
                                            </span>
                                        </div>
                                    </div>
                                </a>
                                <div className={`${styles['dropdown-menu']} ${styles['dashboard-dropdown']} ${styles['dropdown-menu-end']} ${styles['mt-2']} ${styles['py-1']}`}>
                                    <a className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`} href="#">
                                        <svg
                                            className={`${styles['dropdown-icon']} ${styles['text-gray-400']} ${styles['me-2']}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        My Profile
                                    </a>
                                    <a className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`} href="#">
                                        <svg
                                            className={`${styles['dropdown-icon']} ${styles['text-gray-400']} ${styles['me-2']}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Settings
                                    </a>
                                    <a className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`} href="#">
                                        <svg
                                            className={`${styles['dropdown-icon']} ${styles['text-gray-400']} ${styles['me-2']}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Messages
                                    </a>
                                    <a className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`} href="#">
                                        <svg
                                            className={`${styles['dropdown-icon']} ${styles['text-gray-400']} ${styles['me-2']}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Support
                                    </a>
                                    <div role="separator" className={`${styles['dropdown-divider']} ${styles['my-1']}`} />
                                    <a className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`} href="#">
                                        <svg
                                            className={`${styles['dropdown-icon']} ${styles['text-danger']} ${styles['me-2']}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            />
                                        </svg>
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;