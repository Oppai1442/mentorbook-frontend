import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Navbar.module.css'
import { useAuth } from '../../../context';


const Navbar: React.FC = () => {
    const [togglleNotifyDropdown, setNotifyDropdown] = useState<boolean>(false);
    const notifyRef = useRef<HTMLLIElement | null>(null);
    const [toggleProfileDropdown, setProfileDropdown] = useState<boolean>(false);
    const profileRef = useRef<HTMLLIElement | null>(null);
    const { user, logOut } = useAuth();

    const handleClickOutside = useCallback(
        (event: MouseEvent) => {

            if (notifyRef.current && !notifyRef.current.contains(event.target as Node)) {
                setNotifyDropdown(false);
            } else if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setProfileDropdown(false);
            }
        },
        [setNotifyDropdown, setProfileDropdown]
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

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
                                className={`${styles['button']} ${styles['sidebar-toggle']} ${styles['me-3']} ${styles['btn']} ${styles['btn-icon-only']} ${styles['d-none']} ${styles['d-lg-inline-block']} ${styles['align-items-center']} ${styles['justify-content-center']}`}
                            >
                                <i className={`${styles['toggle-icon']} fa-regular fa-bars-staggered`} />
                            </button>
                            {/* Search form */}
                            <form className={`${styles['navbar-search']} ${styles['form-inline']}`} id="navbar-search-main">
                                <div className={`${styles['input-group']} ${styles['input-group-merge']} ${styles['search-bar']}`}>
                                    <span className={`${styles['input-group-text']}`} id="topbar-addon">
                                        <i className="fa-light fa-magnifying-glass" />
                                    </span>
                                    <input
                                        type="text"
                                        className={`${styles['input']} ${styles['form-control']}`}
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
                        <ul className={`${styles['ul']} ${styles['navbar-nav']} ${styles['align-items-center']}`}>
                            <li
                                ref={notifyRef}
                                className={`${styles['nav-item']} ${styles['dropdown']}`}
                                onClick={() => {
                                    setNotifyDropdown(prevState => !prevState)
                                }}>
                                <div
                                    className={`${styles['nav-link']} ${styles['text-dark']} ${styles['notification-bell']} ${styles['unread']} ${styles['dropdown-toggle']}`}
                                >
                                    <i className="fa-solid fa-bell fa-lg" style={{ color: "#000000" }} />
                                </div>
                                <div data-dropdown-notification={togglleNotifyDropdown}
                                    className={`${styles['dropdown-menu']} ${styles['dropdown-menu-lg']} ${styles['dropdown-menu-center']} ${styles['mt-2']} ${styles['py-0']} ${styles['notification-container']}`}>
                                    <div className={`${styles['list-group']} ${styles['list-group-flush']}`}>
                                        <div
                                            className={`${styles['text-center']} ${styles['text-primary']} ${styles['fw-bold']} ${styles['border-bottom']} ${styles['border-light']} ${styles['py-3']}`}
                                        >
                                            Notifications
                                        </div>
                                        <div
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        src="../assets/img/team/profile-picture-1.jpg"
                                                        className={`${styles['img']} ${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['ms-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h4']} ${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Jose Leos</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small className={`${styles['small']} ${styles['text-danger']}`}>a few moments ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['p']} ${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        Added you to an event "Project stand-up" tomorrow at 12:30
                                                        AM.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        src="../assets/img/team/profile-picture-2.jpg"
                                                        className={`${styles['img']} ${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['ms-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h4']} ${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Neil Sims</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small className={`${styles['small']} ${styles['text-danger']}`}>2 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['p']} ${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        You've been assigned a task for "Awesome new project".
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        src="../assets/img/team/profile-picture-3.jpg"
                                                        className={`${styles['img']} ${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['m-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h4']} ${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Roberta Casas</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small className={`${styles['small']}`}>5 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['p']} ${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        Tagged you in a document called "Financial plans",
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        src="../assets/img/team/profile-picture-4.jpg"
                                                        className={`${styles['img']} ${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['ms-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h4']} ${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Joseph Garth</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small className={`${styles['small']}`}>1 d ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['p']} ${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        New message: "Hey, what's up? All set for the
                                                        presentation?"
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`${styles['list-group-item']} ${styles['list-group-item-action']} ${styles['border-bottom']}`}
                                        >
                                            <div className={`${styles['row']} ${styles['align-items-center']}`}>
                                                <div className={`${styles['col-auto']}`}>
                                                    {/* Avatar */}
                                                    <img
                                                        src="../assets/img/team/profile-picture-5.jpg"
                                                        className={`${styles['img']} ${styles['avatar-md']} ${styles['rounded']}`}
                                                    />
                                                </div>
                                                <div className={`${styles['col']} ${styles['ps-0']} ${styles['ms-2']}`}>
                                                    <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                                                        <div>
                                                            <h4 className={`${styles['h4']} ${styles['h6']} ${styles['mb-0']} ${styles['text-small']}`}>Bonnie Green</h4>
                                                        </div>
                                                        <div className={`${styles['text-end']}`}>
                                                            <small className={`${styles['small']}`}>2 hrs ago</small>
                                                        </div>
                                                    </div>
                                                    <p className={`${styles['p']} ${styles['font-small']} ${styles['mt-1']} ${styles['mb-0']}`}>
                                                        New message: "We need to improve the UI/UX for the landing
                                                        page."
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['text-center']} ${styles['fw-bold']} ${styles['rounded-bottom']} ${styles['py-3']}`}
                                        >
                                            <i className={`${styles['icon']} ${styles['icon-xxs']} ${styles['text-gray-400']} ${styles['me-1']} fa-light fa-eye fa-lg`} />

                                            View all
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li
                                ref={profileRef}
                                className={`${styles['nav-item']} ${styles['dropdown']} ${styles['ms-lg-3']}`}
                                onClick={() => {
                                    setProfileDropdown(prevState => !prevState)
                                }}
                            >
                                <div
                                    className={`${styles['nav-link']} ${styles['dropdown-toggle']} ${styles['pt-1']} ${styles['px-0']}`}
                                >
                                    <div className={`${styles['media']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                                        <img
                                            className={`${styles['img']} ${styles['avatar']} ${styles['rounded-circle']}`}
                                            alt="Image placeholder"
                                            src={user?.avatarUrl}
                                        />
                                        <div className={`${styles['media-body']} ${styles['ms-2']} ${styles['text-dark']} ${styles['align-items-center']} ${styles['d-none']} ${styles['d-lg-block']}`}>
                                            <span className={`${styles['mb-0']} ${styles['font-small']} ${styles['fw-bold']} ${styles['text-gray-900']}`}>
                                                {user?.fullName}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div data-dropdown-profile={toggleProfileDropdown}
                                    className={`${styles['dropdown-menu']} ${styles['dashboard-dropdown']} ${styles['dropdown-menu-end']} ${styles['mt-2']} ${styles['py-1']} ${styles['profile']}`}>
                                    <div
                                        className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                                        <i
                                            className={`${styles['dropdown-icon']} ${styles['text-gray-400']} ${styles['me-2']} fa-duotone fa-solid fa-circle-user fa-lg`}
                                        />

                                        My Profile
                                    </div>
                                    <div className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                                        <i
                                            className={`${styles['dropdown-icon']} ${styles['text-gray-400']} ${styles['me-2']} fa-duotone fa-solid fa-gear`}
                                        />
                                        Settings
                                    </div>
                                    <div className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                                        <i
                                            className={`${styles['dropdown-icon']} ${styles['text-gray-400']} ${styles['me-2']} fa-duotone fa-solid fa-inbox`}
                                        />
                                        Messages
                                    </div>
                                    <div className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                                        <i
                                            className={`${styles['dropdown-icon']} ${styles['text-gray-400']} ${styles['me-2']} fa-duotone fa-solid fa-circle-question`}
                                        />
                                        Support
                                    </div>
                                    <div role="separator" className={`${styles['dropdown-divider']} ${styles['my-1']}`} />
                                    <div 
                                        className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}
                                        onClick={logOut}>
                                        <i
                                            className={`${styles['dropdown-icon']} ${styles['me-2']} fa-regular fa-right-from-bracket`}
                                            style={{ color: "#ff1a1a" }}
                                        />

                                        Logout
                                    </div>
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