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
    <div className="flex flex-col h-full w-full bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="flex-1 overflow-y-auto p-4 remove-scrollbar">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-3 p-2 rounded-md max-w-[85%] whitespace-pre-wrap text-sm shadow-md ${
              msg.role === "user"
                ? "ml-auto bg-blue-500 text-white"
                : "mr-auto bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
            }`}
          >
            <p>{msg.parts.map((part) => part.text).join("")}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex items-center gap-2 p-2 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
        <textarea
          ref={inputRef}
          className="flex-1 p-2 rounded-md border dark:border-gray-600 focus:outline-none bg-gray-100 dark:bg-gray-700 dark:text-white resize-none"
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white flex items-center justify-center"
          disabled={loading}
        >
          <SendHorizontal size={20} />
        </button>
      </div>
    </div>
  );
};

export default App;
