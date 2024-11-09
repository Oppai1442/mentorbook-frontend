import React from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const handlePageClick = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages + 2) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage <= 3) {
                pages.push(2, 3, 4, '...');
            } else if (currentPage >= totalPages - 2) {
                pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1);
            } else {
                pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...');
            }

            pages.push(totalPages);
        }

        return pages.map((page, index) =>
            typeof page === 'number' ? (
                <li
                    className={`${styles['page-item']} ${currentPage === page ? styles['active'] : ''}`}
                    key={index}
                >
                    <button className={styles['page-link']} onClick={() => handlePageClick(page)}>
                        {page}
                    </button>
                </li>
            ) : (
                <li className={`${styles['page-item']} disabled`} key={index}>
                    <span className={styles['page-link']}>{page}</span>
                </li>
            )
        );
    };

    return (
        <div className={`${styles['card-footer']} ${styles['px-3']} ${styles['border-0']} ${styles['d-flex']} ${styles['flex-column']} ${styles['flex-lg-row']} ${styles['align-items-center']} ${styles['justify-content-between']}`}>
            <nav aria-label="Page navigation">
                <ul className={`${styles['pagination']} ${styles['mb-0']}`}>
                    <li className={`${styles['page-item']} ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button
                            className={styles['page-link']}
                            onClick={() => handlePageClick(currentPage - 1)}
                            disabled={currentPage === 1}
                            aria-label="Previous"
                        >
                            Previous
                        </button>
                    </li>
                    {renderPageNumbers()}
                    <li className={`${styles['page-item']} ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button
                            className={styles['page-link']}
                            onClick={() => handlePageClick(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            aria-label="Next"
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
            <div className={`${styles['fw-normal']} ${styles['small']} ${styles['mt-4']} ${styles['mt-lg-0']}`}>
                Showing <b className={styles['b']}>{currentPage}</b> out of <b className={styles['b']}>{totalPages}</b> pages
            </div>
        </div>
    );
};

export default Pagination;
