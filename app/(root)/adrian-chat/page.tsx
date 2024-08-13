import Sidebar from '../../../components/sidebar';
import React, { useState } from "react";
import { TbSend } from "react-icons/tb";

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Function to handle sending a message
  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add the user's message to the chat
    setMessages([...messages, { sender: 'user', text: message }]);

    // Clear the input field
    setMessage('');

    // Call your AI bot API to get a response
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    // Add the bot's response to the chat
    setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: data.response }]);
  };

  return (
    <div className="flex flex-col md:flex-row bg-[#212121] md:overflow-hidden w-full h-screen">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Chat Area */}
      <main className="flex-1 bg-[#212121] md:ml-[15%] xl:ml-[20%] flex flex-col">
        <div className="flex justify-end p-4">
          <button className="flex items-center gap-2 px-3 py-2 rounded-[12px] hover:bg-[#2F2F2F] cursor-pointer">
            <svg
              width="40"
              height="38"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_81_294)">
                <path
                  d="M16.9738 38.8116L32.9685 38.3995C40.6979 38.2003 46.8024 31.773 46.6033 24.0436C46.4041 16.3141 39.9768 10.2096 32.2473 10.4088L16.2527 10.8209C8.52323 11.02 2.41874 17.4474 2.61788 25.1768C2.81703 32.9062 9.2444 39.0107 16.9738 38.8116Z"
                  stroke="#09ACBB"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32.4534 18.4061C29.1408 18.4915 26.5246 21.2461 26.6099 24.5587C26.6953 27.8713 29.4499 30.4875 32.7625 30.4021C36.0751 30.3168 38.6913 27.5622 38.6059 24.2496C38.5206 20.937 35.766 18.3208 32.4534 18.4061Z"
                  stroke="#09ACBB"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_81_294">
                  <rect
                    width="48"
                    height="48"
                    fill="white"
                    transform="translate(49.2207 47.9841) rotate(178.524)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 className="text-base font-medium text-[#09ACBB]">Hi, Laurent</h1>
          </button>
        </div>

        {/* Chatbox Area */}
        <div className="flex flex-col flex-1 overflow-y-auto px-8 py-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-[#444444] text-white' : 'bg-[#2F2F2F] text-[#09ACBB]'}`}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="w-full p-4 sticky bottom-0 bg-[#212121]">
          <div className="flex items-center w-full bg-[#2F2F2F] border border-[#4E4E4E] rounded-full px-4 py-2">
            <input
              className="flex-grow bg-transparent outline-none text-white placeholder-[#828282]"
              type="text"
              placeholder="Reply to the conversation..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button onClick={handleSendMessage} className="ml-4 flex items-center justify-center p-2 rounded-full bg-[#444444] hover:bg-[#525252]">
              <TbSend className="w-6 h-6 text-[#00CDE3] hover:text-[#00cce3bb]" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="py-2 text-center text-white">
          <span className="text-sm font-normal">Adriano AI Chatbot</span>
        </div>
      </main>
    </div>
  );
};

export default ChatBot;
