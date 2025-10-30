import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappLink = "https://api.whatsapp.com/send?phone=+919943342999";

  return (
    <>
      {/* Floating WhatsApp Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 group"
      >
        {/* Pulse Animation Ring */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
        
        {/* Main Button */}
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-7 h-7" />
        </div>
      </button>

      {/* Popup Message Card */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Popup Card */}
          <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  Need Help?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Chat with us on WhatsApp for instant support and quick responses to all your logistics queries!
                </p>
                
                {/* WhatsApp Button */}
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WhatsAppFloat;
