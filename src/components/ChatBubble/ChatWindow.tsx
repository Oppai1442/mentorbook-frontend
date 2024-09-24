// ChatWindow.tsx
import React, { useState } from 'react';
import styles from './ChatWindow.module.css';

interface ChatWindowProps {
    onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isChatStarted, setIsChatStarted] = useState(false);

    const handleStartChat = () => {
        if (name && phone) {
            setIsChatStarted(true);
        }
    };

    return (
        <div className={styles.chatWindow}>
            {!isChatStarted ? (
                <div className={styles.formContainer}>
                    <h5>Nhập thông tin của bạn</h5>
                    <input
                        type="text"
                        placeholder="Tên"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control mb-2"
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control mb-2"
                    />
                    <button className="btn btn-primary" onClick={handleStartChat}>
                        Bắt đầu Chat
                    </button>
                </div>
            ) : (
                <div className={styles.chatContent}>
                    <h5>Chat với chúng tôi!</h5>
                    <button className="btn btn-secondary" onClick={onClose}>
                        Đóng
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatWindow;