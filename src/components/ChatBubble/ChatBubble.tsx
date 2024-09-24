// ChatBubble.tsx
import React, { useState } from 'react';
import styles from './ChatBubble.module.css';
import ChatWindow from './ChatWindow';

const ChatBubble: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.bubbleContainer}>
            <div className={styles.chatBubble} onClick={toggleChat}>
                💬
            </div>
            {isOpen && <ChatWindow onClose={toggleChat} />}
        </div>
    );
};

export default ChatBubble;