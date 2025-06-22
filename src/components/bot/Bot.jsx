import { X } from "lucide-react";
import { useState } from "react";
import ChatPage from "./ChatPage";

const Bot = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);

  const toggleChat = () => {
    setIsChatVisible(!isChatVisible);
  };

  return (
    <div className="relative z-50">
      {isChatVisible && (
        <div className="fixed bottom-25 right-4 w-80 h-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <ChatPage />
        </div>
      )}
      <button
        className={`fixed bottom-10 right-10 w-12 h-12 flex items-center justify-center rounded-full cursor-pointer
          ${isChatVisible ? "bg-red-500" : "bg-blue-500"} text-white`}
        onClick={toggleChat}
      >
        {!isChatVisible ? "💬" : <X />}
      </button>
    </div>
  );
};

export default Bot;
