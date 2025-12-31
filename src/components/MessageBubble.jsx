import SourceAttribution from "./SourceAttribution";
import "./MessageBubble.css";
import { Bot, User } from "lucide-react";

const MessageBubble = ({ message }) => {
  return (
    <>
      <div className={`message ${message?.role}`}>
        <div className={`avatar ${message?.role}`}>
          {message.role === "user" ? (
            <User size={20} color="#ffffffff" />
          ) : (
            <Bot size={20} color="#ffffffff" />
          )}
        </div>
        <div className={`bubble ${message?.role}`}>
          <p>{message.content}</p>
        </div>
      </div>
      {message.sources && message.sources.length > 0 && (
        <SourceAttribution sources={message.sources} />
      )}
    </>
  );
};

export default MessageBubble;
