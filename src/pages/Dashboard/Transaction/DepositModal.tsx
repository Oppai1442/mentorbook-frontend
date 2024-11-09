import React, { useEffect, useRef, useState } from 'react';
import styles from './DepositModal.module.css';

interface DepositModalProps {
    show: boolean;
    onClose: () => void;
    onDeposit: (amount: number) => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ show, onClose, onDeposit }) => {
    const [amount, setAmount] = useState<number>(0);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const [fadeClass, setFadeClass] = useState<string>(styles['fade-out']);

    useEffect(() => {
        if (show) {
            setFadeClass(styles['fade-in']);
        } else {
            setFadeClass(styles['fade-out']);
        }
    }, [show]);

    const handleDepositClick = () => {
        onDeposit(amount);
        setAmount(0); // Reset input field
        onClose(); // Close modal
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [show, onClose]);

    return (
        <div className={`modal ${show ? 'd-block' : ''} ${fadeClass}`} tabIndex={-1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog" ref={modalRef}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Deposit Amount</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <input
                            type="number"
                            className="form-control"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            placeholder="Enter amount"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={handleDepositClick}>Deposit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DepositModal;
