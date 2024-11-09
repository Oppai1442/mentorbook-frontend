import React, { useState, useEffect } from 'react';
import styles from './Transaction.module.css';
import { useAuth } from '../../../context';
import { walletGetBalance, walletDeposit, getTransactionHistory } from '../../../services/transactionService';
import DepositModal from './DepositModal';
import Pagination from '../../../components/Pagination2/Pagination';
import { TransactionResponse } from '../../../types/Response';
import { response } from 'express';

const Transaction: React.FC = () => {
    const [currentBalance, setCurrentBalance] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    const { isLoggedIn, user } = useAuth();
    const [transactions, setTransactions] = useState<TransactionResponse[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalValues, setTotalValues] = useState<number>(0);
    
    const handleDeposit = async (amount: number) => {
        if (!user) { return; }

        if (amount < 10000 || amount > 1000000000) {
            alert("Amount must be between 10,000 and 1,000,000,000 VND.");
            return;
        }

        const redirectUrl = window.location.href;
        const response = await walletDeposit({
            "userId": user.id,
            "amount": amount,
            "redirectUrl": redirectUrl
        });

        window.location.href = response;
    };

    useEffect(() => {
        if (isLoggedIn && user) {
            walletGetBalance(user.id)
                .then(balance => {
                    if (balance !== null) {
                        setCurrentBalance(balance);
                    }
                })
                .catch(error => {
                    console.error("Error fetching user balance:", error);
                });
        }
    }, [isLoggedIn, user]);

    const fetchTransactions = async (page: number) => {
        if (!user) return;
    
        try {
            const response = await getTransactionHistory({
                "userId": user.id,
                "page": page,
                "resultCount": 10
            });
            setTransactions(response.transactions);
            setTotalValues(response.totalFound);
            if (currentPage !== page) {
                setCurrentPage(page);
            }
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };
    

    useEffect(() => {
        let isInitialLoad = true;
        if (isInitialLoad) {
            isInitialLoad = false;
            fetchTransactions(currentPage);
        }
        return () => {
            isInitialLoad = true;
        };

        
    }, [currentPage, user]);
    

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <>
            <div className={`${styles['d-flex']} ${styles['justify-content-between']} ${styles['flex-wrap']} ${styles['flex-md-nowrap']} ${styles['align-items-center']} ${styles['py-4']}`}>
                <div className={`${styles['d-block']} ${styles['mb-4']} ${styles['mb-md-0']}`}>
                    <h2 className={`${styles['h2']} ${styles['h4']}`}>Your balance: {currentBalance}</h2>
                </div>
                <div className={`${styles['btn-toolbar']} ${styles['mb-2']} ${styles['mb-md-0']}`}>
                    <div
                        className={`${styles['btn']} ${styles['btn-sm']} ${styles['btn-gray-800']} ${styles['d-inline-flex']} ${styles['align-items-center']}`}
                        onClick={() => setShowModal(true)}
                    >
                        <i className={`${styles['me-2']} fa-regular fa-plus`}></i>
                        Deposit
                    </div>
                </div>
            </div>

            <div className={`${styles['card']} ${styles['card-body']} ${styles['border-0']} ${styles['shadow']} ${styles['table-wrapper']} ${styles['table-responsive']}`}>
                <table className={`${styles['table']} ${styles['table-hover']}`}>
                    <thead className={`${styles['thead']}`}>
                        <tr className={`${styles['tr']}`}>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>#</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Transaction Type</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Create Date</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Complete Date</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Amount</th>
                            <th className={`${styles['th']} ${styles['border-gray-200']}`}>Status</th>
                        </tr>
                    </thead>
                    <tbody className={`${styles['tbody']}`}>
                        {transactions.length > 0 ? (
                            transactions.map((transaction) => (
                                <tr key={transaction.transactionId} className={`${styles['tr']}`}>
                                    <td className={`${styles['td']}`}>{transaction.transactionId}</td>
                                    <td className={`${styles['td']}`}>{transaction.transactionType}</td>
                                    <td className={`${styles['td']}`}>{transaction.createdDate}</td>
                                    <td className={`${styles['td']}`}>{transaction.completionTime}</td>
                                    <td className={`${styles['td']}`}>{transaction.amount}</td>
                                    <td className={`${styles['td']}`}>{transaction.status}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className={`${styles['td']} ${styles['text-center']}`}>No transactions found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Pagination
                    totalPages={totalValues}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>

            <DepositModal
                show={showModal}
                onClose={() => setShowModal(false)}
                onDeposit={handleDeposit}
            />
        </>
    );
}

export default Transaction;
