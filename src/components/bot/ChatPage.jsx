// File: src/components/ChatBot.jsx
import { useState, useRef } from "react";
import { SendHorizontal } from "lucide-react";
import GenAI from "./GenAI";

const App = () => {
  const inputRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    const input = inputRef.current.value;
    if (!input.trim()) return;

    const userMessage = { role: "user", parts: [{ text: input }] };
    setMessages((prev) => [...prev, userMessage]);
    inputRef.current.value = "";
    setLoading(true);

    try {
      const streamText = await GenAI(input, messages);
      // Handle streaming response
      let streamedText = "";
      const streamMessage = { role: "model", parts: [{ text: "" }] };
      setMessages((prev) => [...prev, streamMessage]);

      for await (const chunk of streamText) {
        const chunkText = chunk.text;
        streamedText += chunkText;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "model",
            parts: [{ text: streamedText }],
          };
          return updated;
        });
      }
    } catch (error) {
      console.error("Streaming error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          parts: [{ text: "⚠️ Failed to fetch AI response." }],
        },
      ]);
    } finally {
      setLoading(false);
      scrollToBottom();
      console.log(messages);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <header className="p-2 text-center bg-blue-500 dark:bg-gray-800 text-white text-lg font-semibold rounded-t-lg">
        Chat Bot
      </header>
      <div className="flex-1 overflow-y-auto p-4 remove-scrollbar">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex items-start mb-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role !== "user" && (
              <div className="mr-2">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  🤖
                </div>
              </div>
            )}
            <div
              className={`p-3 rounded-lg max-w-[75%] whitespace-pre-wrap text-sm shadow ${
                msg.role === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
            >
              <p>{msg.parts.map((part) => part.text).join("")}</p>
            </div>
            {msg.role === "user" && (
              <div className="ml-2">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  🙋
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <footer className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800">
        <textarea
          ref={inputRef}
          className="flex-1 px-3 py-2 rounded-lg border dark:border-gray-600 focus:outline-none bg-gray-50 dark:bg-gray-700 dark:text-white resize-none"
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg text-white flex items-center justify-center disabled:opacity-50"
          disabled={loading}
        >
          <SendHorizontal size={20} />
        </button>
      </footer>
    </div>
  );
};

export default App;
