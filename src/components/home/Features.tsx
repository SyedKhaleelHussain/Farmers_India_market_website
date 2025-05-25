import { Bot, Map, Users, Leaf } from 'lucide-react';

const Features = () => {
  return (
    <section className="section-padding bg-[#0a0f0d]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Smart Gardening Made Simple</h2>
          <p className="body-md">
            Get personalized plant advice, connect with fellow gardeners, and discover local nurseries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="card p-6 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="w-12 h-12 bg-[#e77231]/10 rounded-full flex items-center justify-center mb-4">
              <Bot size={24} className="text-[#e77231]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">AI Plant Assistant</h3>
            <p className="text-gray-400">
              Get instant plant identification, disease diagnosis, and care tips from our AI assistant.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card p-6 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="w-12 h-12 bg-[#f8c05a]/10 rounded-full flex items-center justify-center mb-4">
              <Map size={24} className="text-[#f8c05a]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Nursery Locator</h3>
            <p className="text-gray-400">
              Find nurseries near you with our interactive map, complete with ratings and specialties.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card p-6 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="w-12 h-12 bg-[#2a6a38]/10 rounded-full flex items-center justify-center mb-4">
              <Users size={24} className="text-[#2a6a38]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Community Forum</h3>
            <p className="text-gray-400">
              Connect with fellow gardening enthusiasts, share experiences, and get advice.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="card p-6 hover:shadow-lg transition-all duration-300 card-hover">
            <div className="w-12 h-12 bg-[#2a6a38]/10 rounded-full flex items-center justify-center mb-4">
              <Leaf size={24} className="text-[#2a6a38]" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Plant Recommendations</h3>
            <p className="text-gray-400">
              Get personalized plant suggestions based on your local climate and conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;