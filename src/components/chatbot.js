import React, { useState } from "react";
import { sendToChatbot } from "../api";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const userMsg = { sender: "user", text: input };
    const res = await sendToChatbot(input);
    const botMsg = { sender: "bot", text: res.data.reply };
    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <div className="p-4 border rounded-lg max-w-md mx-auto mt-6">
      <h2 className="text-lg font-bold mb-2">Finance Chatbot</h2>
      <div className="h-64 overflow-y-auto border p-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.sender === "user" ? "text-right" : "text-left"}>
            <p className={`p-2 m-1 rounded ${msg.sender === "user" ? "bg-blue-200" : "bg-gray-200"}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <input
        className="border p-2 w-full mt-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Send
      </button>
    </div>
  );
};

export default Chatbot;
