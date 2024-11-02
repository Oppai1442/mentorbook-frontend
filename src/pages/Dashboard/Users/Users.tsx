import React, { useEffect, useState } from 'react';
import styles from './Users.module.css';


const Users: React.FC = () => {
    return (
        <>
            <div className={`${styles['table-settings']} ${styles['mb-4']}`}>
                <div className={`${styles['row']} ${styles['justify-content-between']} ${styles['align-items-center']}`}>
                    <div className={`${styles['col-9']} ${styles['col-lg-8']} ${styles['d-md-flex']}`}>
                        <div className={`${styles['input-group']} ${styles['me-2']} ${styles['me-lg-3']} ${styles['fmxw-300']}`}>
                            <span className={`${styles['input-group-text']}`}>
                                <i className={`fa-light fa-magnifying-glass`} />
                            </span>
                            <input
                                type="text"
                                className={`${styles['input']} ${styles['form-control']}`}
                                placeholder="Search users"
                            />
                        </div>
                        <select
                            className={`${styles['select']} ${styles['form-select']} ${styles['fmxw-200']} ${styles['d-none']} ${styles['d-md-inline']}`}
                            aria-label="Message select example 2"
                        >
                            <option >All</option>
                            <option value={1}>Active</option>
                            <option value={2}>Inactive</option>
                            <option value={3}>Pending</option>
                            <option value={3}>Cancelled</option>
                        </select>
                    </div>
                    <div className={`${styles['col-3']} ${styles['col-lg-4']} ${styles['d-flex']} ${styles['justify-content-end']}`}>
                        <div className={`${styles['btn-group']}`}>
                            <div className={`${styles['dropdown']}`}>
                                <button
                                    className={`${styles['button']} ${styles['btn']} ${styles['btn-link']} ${styles['text-dark']} ${styles['dropdown-toggle']} ${styles['dropdown-toggle-split']} ${styles['m-0']} ${styles['p-1']}`}
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <i className={`fa-duotone fa-solid fa-gear fa-lg`} />

                                    <span className={`${styles['visually-hidden']}`}>Toggle Dropdown</span>
                                </button>
                                <div className={`${styles['dropdown-menu']} ${styles['dropdown-menu-xs']} ${styles['dropdown-menu-end']} ${styles['pb-0']}`}>
                                    <span className={`${styles['small']} ${styles['ps-3']} ${styles['fw-bold']} ${styles['text-dark']}`}>Show</span>
                                    <div
                                        className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']} ${styles['fw-bold']}`}
                                    >
                                        10
                                        <i className={`${styles['icon']} ${styles['icon-xxs']} ${styles['ms-auto']} fa-regular fa-check`} />
                                    </div>
                                    <div
                                        className={`${styles['dropdown-item']} ${styles['fw-bold']}`}
                                    >
                                        20
                                    </div>
                                    <div
                                        className={`${styles['dropdown-item']} ${styles['fw-bold']} ${styles['rounded-bottom']}`}
                                    >
                                        30
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles['card']} ${styles['card-body']} ${styles['shadow']} ${styles['border-0']} ${styles['table-wrapper']} ${styles['table-responsive']}`}>
                <div className={`${styles['d-flex']} ${styles['mb-3']}`}>
                    <select
                        className={`${styles['select']} ${styles['form-select']} ${styles['fmxw-200']}`}
                        aria-label="Message select example"
                    >
                        <option >Bulk Action</option>
                        <option value={1}>Send Email</option>
                        <option value={2}>Change Group</option>
                        <option value={3}>Delete User</option>
                    </select>
                    <button className={`${styles['btn']} ${styles['btn-sm']} ${styles['px-3']} ${styles['btn-secondary']} ${styles['ms-3']}`}>Apply</button>
                </div>
                <table className={`${styles['table']} ${styles['user-table']} ${styles['table-hover']} ${styles['align-items-center']}`}>
                    <thead className={`${styles['thead']}`}>
                        <tr className={`${styles['tr']}`}>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>
                                <div className={`${styles['form-check']} ${styles['dashboard-check']}`}>
                                    <input
                                        className={`${styles['input']} ${styles['form-check-input']}`}
                                        type="checkbox"
                                        defaultValue=""
                                        id="userCheck55"
                                    />
                                    <label className={`${styles['label']} ${styles['form-check-label']}`} htmlFor="userCheck55" />
                                </div>
                            </th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Name</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Role</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Date Created</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Verified</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Status</th>
                            <th className={`${styles['th']} ${styles['border-bottom']}`}>Action</th>
                        </tr>
                    </thead>
                    <tbody className={`${styles['tbody']}`}>
                        <tr className={`${styles['tr']}`}>
                            <td className={`${styles['td']}`}>
                                <div className={`${styles['form-check']} ${styles['dashboard-check']}`}>
                                    <input
                                        className={`${styles['input']} ${styles['form-check-input']}`}
                                        type="checkbox"
                                        defaultValue=""
                                        id="userCheck1"
                                    />
                                    <label className={`${styles['label']} ${styles['form-check-label']}`} htmlFor="userCheck1" />
                                </div>
                            </td>
                            <td className={`${styles['td']}`}>
                                <div
                                    className={`${styles['d-flex']} ${styles['align-items-center']}`}
                                >
                                    <img
                                        src="./volt7_files/profile-picture-1.jpg"
                                        className={`${styles['img']} ${styles['avatar']} ${styles['rounded-circle']} ${styles['me-3']}`}
                                        alt="Avatar"
                                    />
                                    <div className={`${styles['d-block']}`}>
                                        <span className={`${styles['fw-bold']}`}>Roy Fendley</span>
                                        <div className={`${styles['small']} ${styles['text-gray']}`}>info@example.com</div>
                                    </div>
                                </div>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>Users</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>10 Feb 2020</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']} ${styles['d-flex']} ${styles['align-items-center']}`}>
                                    <i
                                        className={`${styles['icon']} ${styles['icon-xxs']} ${styles['text-success']} ${styles['me-1']} fa-solid fa-circle-check`}
                                        style={{ color: "#04ff00" }} />

                                    Email
                                </span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']} ${styles['text-success']}`}>Active</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <div className={`${styles['btn-group']}`}>
                                    <button
                                        className={`${styles['btn']} ${styles['btn-link']} ${styles['text-dark']} ${styles['dropdown-toggle']} ${styles['dropdown-toggle-split']} ${styles['m-0']} ${styles['p-0']}`}
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className={`fa-solid fa-ellipsis fa-lg`}/>
                                        <span className={`${styles['visually-hidden']}`}>Toggle Dropdown</span>
                                    </button>
                                    <div className={`${styles['dropdown-menu']} ${styles['dashboard-dropdown']} ${styles['dropdown-menu-start']} ${styles['mt-2']} ${styles['py-1']}`}>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}
                                        >
                                            <i className={`${styles['text-gray-400']} ${styles['me-2']} fa-solid fa-shield-exclamation fa-lg`} />

                                            Reset Pass
                                        </div>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}
                                        >
                                            <i className={`${styles['text-gray-400']} ${styles['me-2']} fa-regular fa-eye fa-lg`} />
                                            View Details
                                        </div>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['d-flex']} ${styles['align-items-center']}`}
                                        >
                                            <i className={`${styles['me-2']} fa-solid fa-user-minus fa-lg`}
                                                style={{ color: "#f01919" }} />
                                            Suspend
                                        </div>
                                    </div>
                                </div>
                                <i className={`${styles['icon']} ${styles['icon-xs']} ${styles['text-danger']} ${styles['ms-1']} fa-solid fa-circle-xmark fa-lg`}
                                    style={{ color: "#f21818" }} />

                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={`${styles['card-footer']} ${styles['px-3']} ${styles['border-0']} ${styles['d-flex']} ${styles['flex-column']} ${styles['flex-lg-row']} ${styles['align-items-center']} ${styles['justify-content-between']}`}>
                    <nav aria-label="Page navigation example">
                        <ul className={`${styles['ul']} ${styles['pagination']} ${styles['mb-0']}`}>
                            <li className={`${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    Previous
                                </div>
                            </li>
                            <li className={`${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    1
                                </div>
                            </li>
                            <li className={`${styles['page-item']} ${styles['active']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    2
                                </div>
                            </li>
                            <li className={`${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    3
                                </div>
                            </li>
                            <li className={`${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    4
                                </div>
                            </li>
                            <li className={`${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    5
                                </div>
                            </li>
                            <li className={`${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    Next
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <div className={`${styles['fw-normal']} ${styles['small']} ${styles['mt-4']} ${styles['mt-lg-0']}`}>
                        Showing <b className={`${styles['b']}`}>5</b> out of <b className={`${styles['b']}`}>25</b> entries
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;