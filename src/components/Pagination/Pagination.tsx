import React from "react";
import PropTypes from "prop-types";
import styles from "./Pagination.module.css";

interface PaginationProps {
    totalItems: number;       // Total number of items
    itemsPerPage: number;     // Number of items per page
    currentPage: number;      // Current active page
    onPageChange: (page: number) => void; // Callback for page change
}

const Pagination: React.FC<PaginationProps> = ({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: number) => {
        if (page !== currentPage && page > 0 && page <= totalPages) {
            onPageChange(page);
        }
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5; // Adjust as needed

        if (totalPages <= maxVisiblePages + 2) {
            // Show all pages if total is within the visible range
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Always show the first and last pages
            pages.push(1);

            // If currentPage is near the beginning
            if (currentPage <= 3) {
                pages.push(2, 3, 4, '...');
            }
            // If currentPage is near the end
            else if (currentPage >= totalPages - 2) {
                pages.push('...', totalPages - 3, totalPages - 2, totalPages - 1);
            }
            // If currentPage is somewhere in the middle
            else {
                pages.push('...', currentPage - 1, currentPage, currentPage + 1, '...');
            }

            pages.push(totalPages);
        }

        return pages.map((page, index) =>
            typeof page === "number" ? (
                <li
                    className={`${styles['page-item']} ${currentPage === page ? 'active' : ''}`}
                    key={index}
                >
                    <button className={`page-link ${styles['page-button']}`} onClick={() => handlePageChange(page)}>
                        {page}
                    </button>
                </li>
            ) : (
                <li className={`${styles['page-item']} disabled`} key={index}>
                    <span className={`page-link ${styles['page-button']}`}>{page}</span>
                </li>
            )
        );
    };

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={`${styles['page-item']} ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button
                        className={`page-link ${styles['page-button']}`}
                        onClick={() => handlePageChange(currentPage - 1)}
                        aria-label="Previous"
                    >
                       <span aria-hidden="true"><i className="fa-regular fa-angles-left" /></span>
                    </button>
                </li>
                {renderPageNumbers()}
                <li className={`${styles['page-item']} ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button
                        className={`page-link ${styles['page-button']}`}
                        onClick={() => handlePageChange(currentPage + 1)}
                        aria-label="Next"
                    >
                       <span aria-hidden="true"><i className="fa-regular fa-angles-right" /></span>

                    </button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    totalItems: PropTypes.number.isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
