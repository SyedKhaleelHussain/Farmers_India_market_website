import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import WeatherPanel from './WeatherPanel';

const Hero = () => {
  const [showBot, setShowBot] = useState(false);

  useEffect(() => {
    if (showBot) {
      if (!document.getElementById('jotform-embed-handler-script')) {
        const script = document.createElement('script');
        script.id = 'jotform-embed-handler-script';
        script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
          if (window.jotformEmbedHandler) {
            window.jotformEmbedHandler(
              "iframe[id='JotFormIFrame-0196ffd613557912995e0beb3a81cf9096ff']",
              'https://www.jotform.com'
            );
          }
        };
      } else {
        if (window.jotformEmbedHandler) {
          window.jotformEmbedHandler(
            "iframe[id='JotFormIFrame-0196ffd613557912995e0beb3a81cf9096ff']",
            'https://www.jotform.com'
          );
        }
      }
    }
  }, [showBot]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/2491282/2491282-uhd_2732_1440_24fps.mp4"
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a291c]/70 to-[#1a291c]/30"></div>
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6 animate-fade-up">
            Your Personal Garden Advisor
          </h1>
          <p className="body-lg mb-8 text-white/90 animate-fade-up animate-delay-100">
            Get personalized plant recommendations based on your location, connect with fellow gardening enthusiasts, and find the best nurseries near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-200">
            <a
              href="https://www.google.com/maps/search/nurseries+near+me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-white border-white hover:bg-white hover:text-[#2a6a38]"
            >
              Find Nurseries Nearby
            </a>
            <button onClick={() => setShowBot(true)} className="btn-primary">
              Get Plant Advice
            </button>
          </div>
        </div>

        <div className="mt-16 animate-fade-up animate-delay-300">
          <WeatherPanel />
        </div>
      </div>

      {/* JotForm Bot iframe modal */}
      {showBot && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowBot(false)}
        >
          <div
            className="relative w-full max-w-3xl h-[700px] bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              id="JotFormIFrame-0196ffd613557912995e0beb3a81cf9096ff"
              title="Raj: Gardening Assistant"
              src="https://agent.jotform.com/0196ffd613557912995e0beb3a81cf9096ff?embedMode=iframe&background=1&shadow=1"
              allowTransparency={true}
              allow="geolocation; microphone; camera; fullscreen"
              scrolling="no"
              frameBorder={0}
              style={{
                minWidth: '100%',
                maxWidth: '100%',
                height: '688px',
                border: 'none',
                width: '100%',
              }}
              onLoad={() => window.parent.scrollTo(0, 0)}
            />
            <button
              onClick={() => setShowBot(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 font-bold text-xl"
              aria-label="Close Plant Advice Bot"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#featured"
          className="text-white/80 hover:text-white transition-colors"
        >
          <ArrowRight size={24} className="transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
