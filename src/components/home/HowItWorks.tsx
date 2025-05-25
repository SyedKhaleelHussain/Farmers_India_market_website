import { ShoppingBag, Bot, MapPin } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="section-padding bg-[#3b944f]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">How Farmers India Market Works</h2>
          <p className="body-md text-gray-600">
            We've simplified the process of connecting with India's green community, finding the best plants, and getting expert advice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-[#2a6a38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={28} className="text-[#2a6a38]" />
            </div>
            <h3 className="heading-sm mb-4">Browse Plants</h3>
            <p className="text-gray-600">
              Explore a vast selection of plants, gardening tools, and eco-friendly products from sellers across India.
            </p>
            <div className="mt-6">
              <img 
                src="https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Online plant selection" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-[#2a6a38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot size={28} className="text-[#2a6a38]" />
            </div>
            <h3 className="heading-sm mb-4">Get Personalized AI Advice</h3>
            <p className="text-gray-600">
              Our AI-powered plant assistant helps you identify plants, diagnose issues, and provides personalized care recommendations.
            </p>
            <div className="mt-6">
              <img 
                src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI plant advice on phone" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="card p-8 text-center">
            <div className="w-16 h-16 bg-[#2a6a38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin size={28} className="text-[#2a6a38]" />
            </div>
            <h3 className="heading-sm mb-4">Connect with Local Nurseries</h3>
            <p className="text-gray-600">
              Discover nurseries near you, read reviews, and connect directly with local plant experts for specialized advice.
            </p>
            <div className="mt-6">
              <img 
                src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Local nursery" 
                className="rounded-lg shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;