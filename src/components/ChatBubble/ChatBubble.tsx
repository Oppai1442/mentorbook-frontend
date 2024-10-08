// ChatBubble.tsx
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import styles from "./ChatBubble.module.css"; // Custom styles for the widget

const ChatBubble: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1000 }}>
      <div
        className={`bg-primary text-white rounded-circle d-flex align-items-center justify-content-center ${styles.chatBubble}`}
        onClick={toggleChat}
      >
        💬
      </div>
      {isOpen && <ChatWindow onClose={toggleChat} />}
    </div>
  );
};

export default ChatBubble;
