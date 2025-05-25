import { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#2a6a38] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 bg-white shadow-2xl rounded-lg border border-[#2a6a38]/20 w-[350px] h-[700px] flex flex-col">
          <div className="flex items-center justify-between p-4 bg-[#2a6a38] rounded-t-lg">
            <h3 className="text-white font-semibold">Garden Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          <iframe
            id="JotFormIFrame-0196ffd613557912995e0beb3a81cf9096ff"
            title="Raj: Gardening Assistant"
            src="https://agent.jotform.com/0196ffd613557912995e0beb3a81cf9096ff?embedMode=iframe&background=1&shadow=1"
            style={{ flex: 1, border: 'none', width: '100%' }}
            allow="geolocation; microphone; camera; fullscreen"
            allowTransparency="true"
            scrolling="no"
          />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
