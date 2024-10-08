// ChatWindow.tsx
import React, { useEffect, useState } from "react";
import styles from "./ChatWindow.module.css";

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [step, setStep] = useState<"form" | "chat">("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && message) {
      setStep("chat");
    }
  };
  useEffect(() => {
    sessionStorage.setItem("name", name);
  }, [name])
  
  return (
    <div className={`card ${styles.chatWindow}`} style={{ width: "300px" }}>
      <div className="card-header bg-primary text-white d-flex justify-content-between">
        <span>Chat</span>
        <button
          className="btn btn-close btn-close-white"
          onClick={onClose}
        ></button>
      </div>
      <div className="card-body">
        {step === "form" ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        ) : (
          <div>
            <p className="mb-1">
              Welcome, {name}! How can we assist you today?
            </p>
            {/* Chat interface can be implemented here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatWindow;
