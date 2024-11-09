import React from 'react';
import styles from './ConfirmationPopup.module.css';

interface ConfirmationPopupProps {
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmationPopup: React.FC<ConfirmationPopupProps> = ({ onConfirm, onCancel }) => {
    return (
        <div className={`modal d-block ${styles['modal-overlay']}`} onClick={(e) => e.target === e.currentTarget && onCancel()}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confirm Booking</h5>
                        <button type="button" className="btn-close" onClick={onCancel}></button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to confirm this booking?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={onConfirm}>
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationPopup;
