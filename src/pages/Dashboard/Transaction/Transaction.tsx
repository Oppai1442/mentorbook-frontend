import React from 'react';
import styles from './Transaction.module.css'

const Transaction: React.FC = () => {
    return (
        <>
            <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['flex-wrap']} ${styles['flex-md-nowrap']} ${styles['align-items-center']} ${styles['py-4']}`}>
                <div className={`${styles['d-block']} ${styles['mb-4']} ${styles['mb-md-0']}`}>
                    <h2 className={`${styles['h2']} ${styles['h4']}`}>All Orders</h2>
                    <p className={`${styles['p']} ${styles['mb-0']}`}>Your web analytics dashboard template.</p>
                </div>
                <div className={`${styles['btn-toolbar']} ${styles['mb-2']} ${styles['mb-md-0']}`}>
                    <div
                        className={`${styles['btn']} ${styles['btn-sm']} ${styles['btn-gray-800']} ${styles['d-inline-flex']} ${styles['align-items-center']}`}
                    >
                        <i className={`${styles['me-2']} fa-regular fa-plus`}></i>
                        New Plan
                    </div>
                    <div className={`${styles['btn-group']} ${styles['ms-2']} ${styles['ms-lg-3']}`}>
                        <button type="button" className={`${styles['button']} ${styles['btn']} ${styles['btn-sm']} ${styles['btn-outline-gray-600']}`}>
                            Share
                        </button>
                        <button type="button" className={`${styles['button']} ${styles['btn']} ${styles['btn-sm']} ${styles['btn-outline-gray-600']}`}>
                            Export
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${styles['table-settings']} ${styles['mb-4']}`}>
                <div className={`${styles['row']} ${styles['align-items-center']} ${styles['justify-content-between']}`}>
                    <div className={`${styles['col']} ${styles['col-md-6']} ${styles['col-lg-3']} ${styles['col-xl-4']}`}>
                        <div className={`${styles['input-group']} ${styles['me-2']} ${styles['me-lg-3']} ${styles['fmxw-400']}`}>
                            <span className={`${styles['input-group-text']}`}>
                                <i className={`fa-light fa-magnifying-glass`} />
                            </span>
                            <input
                                type="text"
                                className={`${styles['input']} ${styles['form-control']}`}
                                placeholder="Search orders"
                            />
                        </div>
                    </div>
                    <div className={`${styles['col-4']} ${styles['col-md-2']} ${styles['col-xl-1']} ${styles['ps-md-0']} ${styles['text-end']}`}>
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
            <div className={`${styles['card']} ${styles['card-body']} ${styles['border-0']} ${styles['shadow']} ${styles['table-wrapper']} ${styles['table-responsive']}`}>
                <table className={`${styles['table']} ${styles['table-hover']}`}>
                    <thead className={`${styles['thead']}`}>
                        <tr className={`${styles['tr']}`}>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>#</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Transaction for</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Create Date</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Complete Date</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Total</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Status</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Action</th>
                        </tr>
                    </thead>
                    <tbody className={`${styles['tbody']}`}>
                        {/* Item */}
                        <tr className={`${styles['tr']}`}>
                            <td className={`${styles['td']}`}>
                                <div
                                    className={`${styles['fw-bold']}`}
                                >
                                    456478
                                </div>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>Platinum Subscription Plan</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>1 May 2020</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>1 Jun 2020</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-bold']}`}>$799,00</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-bold']} ${styles['text-warning']}`}>Due</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <div className={`${styles['btn-group']}`}>
                                    <button
                                        className={`${styles['button']} ${styles['btn']} ${styles['btn-link']} ${styles['text-dark']} ${styles['dropdown-toggle']} ${styles['dropdown-toggle-split']} ${styles['m-0']} ${styles['p-0']}`}
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className={`fa-solid fa-ellipsis fa-lg`}/>
                                        <span className={`${styles['visually-hidden']}`}>Toggle Dropdown</span>
                                    </button>
                                    <div className={`${styles['dropdown-menu']} ${styles['py-0']}`}>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['rounded-top']}`}
                                        >
                                            <span className={`${styles['fas']} ${styles['fa-eye']} ${styles['me-2']}`} />
                                            View Details
                                        </div>
                                        <div
                                            className={`${styles['dropdown-item']}`}
                                        >
                                            <span className={`${styles['fas']} ${styles['fa-edit']} ${styles['me-2']}`} />
                                            Edit
                                        </div>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['text-danger']} ${styles['rounded-bottom']}`}
                                        >
                                            <span className={`${styles['fas']} ${styles['fa-trash-alt']} ${styles['me-2']}`} />
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {/* Item */}
                        <tr className={`${styles['tr']}`}>
                            <td className={`${styles['td']}`}>
                                <div
                                    className={`${styles['fw-bold']}`}
                                >
                                    456423
                                </div>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>Platinum Subscription Plan</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>1 Apr 2020</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>1 May 2020</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-bold']}`}>$799,00</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-bold']} ${styles['text-success']}`}>Paid</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <div className={`${styles['btn-group']}`}>
                                    <button
                                        className={`${styles['button']} ${styles['btn']} ${styles['btn-link']} ${styles['text-dark']} ${styles['dropdown-toggle']} ${styles['dropdown-toggle-split']} ${styles['m-0']} ${styles['p-0']}`}
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className={`fa-solid fa-ellipsis fa-lg`}/>
                                    </button>
                                    <div className={`${styles['dropdown-menu']} ${styles['py-0']}`}>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['rounded-top']}`}
                                        >
                                            <span className={`${styles['fas']} ${styles['fa-eye']} ${styles['me-2']}`} />
                                            View Details
                                        </div>
                                        <div
                                            className={`${styles['dropdown-item']}`}
                                        >
                                            <span className={`${styles['fas']} ${styles['fa-edit']} ${styles['me-2']}`} />
                                            Edit
                                        </div>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['text-danger']} ${styles['rounded-bottom']}`}
                                        >
                                            <span className={`${styles['fas']} ${styles['fa-trash-alt']} ${styles['me-2']}`} />
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        {/* Item */}
                        <tr className={`${styles['tr']}`}>
                            <td className={`${styles['td']}`}>
                                <div
                                    className={`${styles['fw-bold']}`}
                                >
                                    453673
                                </div>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>Gold Subscription Plan</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>1 Oct 2019</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-normal']}`}>1 Nov 2019</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-bold']}`}>$533,42</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <span className={`${styles['fw-bold']} ${styles['text-danger']}`}>Cancelled</span>
                            </td>
                            <td className={`${styles['td']}`}>
                                <div className={`${styles['btn-group']}`}>
                                    <button
                                        className={`${styles['button']} ${styles['btn']} ${styles['btn-link']} ${styles['text-dark']} ${styles['dropdown-toggle']} ${styles['dropdown-toggle-split']} ${styles['m-0']} ${styles['p-0']}`}
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        <i className={`fa-solid fa-ellipsis fa-lg`}/>
                                    </button>
                                    <div className={`${styles['dropdown-menu']} ${styles['py-0']}`}>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['rounded-top']}`}
                                        >
                                            <span className={`${styles['fas']} ${styles['fa-eye']} ${styles['me-2']}`} />
                                            View Details
                                        </div>
                                        <div
                                            className={`${styles['dropdown-item']}`}
                                        >
                                            <span className={`${styles['fas']} ${styles['fa-edit']} ${styles['me-2']}`} />
                                            Edit
                                        </div>
                                        <div
                                            className={`${styles['dropdown-item']} ${styles['text-danger']} ${styles['rounded-bottom']}`}
                                        >
                                            <span className={`${styles['fas']} ${styles['fa-trash-alt']} ${styles['me-2']}`} />
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className={`${styles['card-footer']} ${styles['px-3']} ${styles['border-0']} ${styles['d-flex']} ${styles['flex-column']} ${styles['flex-lg-row']} ${styles['align-items-center']} ${styles['justify-content-between']}`}>
                    <nav aria-label="Page navigation example">
                        <ul className={`${styles['ul']} ${styles['pagination']} ${styles['mb-0']}`}>
                            <li className={`${styles['li']} ${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    Previous
                                </div>
                            </li>
                            <li className={`${styles['li']} ${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    1
                                </div>
                            </li>
                            <li className={`${styles['li']} ${styles['page-item']} ${styles['active']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    2
                                </div>
                            </li>
                            <li className={`${styles['li']} ${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    3
                                </div>
                            </li>
                            <li className={`${styles['li']} ${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    4
                                </div>
                            </li>
                            <li className={`${styles['li']} ${styles['page-item']}`}>
                                <div
                                    className={`${styles['page-link']}`}
                                >
                                    5
                                </div>
                            </li>
                            <li className={`${styles['li']} ${styles['page-item']}`}>
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

export default Transaction;