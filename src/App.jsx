import { useState, useEffect } from "react";
import axios from "axios";
import ChatWindow from "./components/ChatWindow";
import InputArea from "./components/InputArea";
import SettingsPanel from "./components/SettingsPanel";
import "./App.css";
import { Bot } from "lucide-react";

// Configure axios baseURL
axios.defaults.baseURL = "http://localhost:5000";

// interface Message {
//   id: string;
//   role: 'user' | 'assistant';
//   content: string;
//   sources?: string[];
//   timestamp: number;
// }

//   interface Settings {
//     model: string;
//     temperature: number;
//     topK: number;
//   }

const App = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState({
    model: "gemma3:1b",
    temperature: 0.7,
    topK: 3,
  });
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = async () => {
    try {
      const response = await axios.get("/api/models");
      setModels(response.data.models);
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post("/api/chat", {
        question: text,
        model: settings.model,
        temperature: settings.temperature,
        top_k: settings.topK,
      });

      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response.data.answer,
        sources: response.data.sources,
        timestamp: Date.now(),
      };
      console.log(response.data);

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage = {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content:
          "Sorry, there was an error processing your question. Please try again.",
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
  };

  console.log(messages);

  return (
    <div className="app">
      <div className="chat-container">
        <div className="header">
          <div className="title">
            <Bot size={24} color="#168aad" />
            <h1>Financial Products Chatbot</h1>
          </div>
          <button
            className="settings-btn"
            onClick={() => setShowSettings(!showSettings)}
          >
            ⚙️
          </button>
        </div>

        {showSettings && (
          <SettingsPanel
            settings={settings}
            models={models}
            onSettingsChange={handleSettingsChange}
          />
        )}

        <ChatWindow messages={messages} loading={loading} />
        <InputArea onSendMessage={handleSendMessage} disabled={loading} />
      </div>
    </div>
  );
};

export default App;
