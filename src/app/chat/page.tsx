"use client";
import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { from: "assistant", text: "Hi! How can I help you?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "assistant", text: "I'm here to assist you!" },
      ]);
    }, 1000);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/AI-agent.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full ">
        <div className="bg-white/50 rounded-lg p-8 shadow-lg flex flex-col items-center max-w-lg w-full mx-4">
          <h2 className="text-xl font-bold mb-4 text-center">Chat Assistant</h2>
          <div className="h-48 overflow-y-auto mb-4 border rounded p-2 bg-blue-100 w-full">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-2 text-${msg.from === 'user' ? 'right' : 'left'}`}>
                <span className={`inline-block px-3 py-1 rounded ${msg.from === 'user' ? 'bg-blue-200' : 'bg-gray-200'}`}>
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="flex w-full">
            <input
              className="flex-1 border rounded-l p-2"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
} 