import React, { useEffect, useRef } from "react";
import MessageBubble from "./MessageBubble";
import "./ChatWindow.css";

const ChatWindow = ({ messages, loading }) => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages?.length === 0 ? (
        <div className="empty-state">
          <h2>Welcome</h2>
          <p>Ask me anything about our banking products and services</p>
        </div>
      ) : (
        <div className="messages-container">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {loading && (
            <div className="loading-indicator">
              <div className="spinner"></div>
              <span>Thinking...</span>
            </div>
          )}
          <div ref={endRef} />
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
