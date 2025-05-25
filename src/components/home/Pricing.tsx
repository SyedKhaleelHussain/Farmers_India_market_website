import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  return (
    <section className="section-padding bg-[#0b0d08]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-white">Get Involved with Farmers India Market</h2>
          <p className="body-md text-gray-400">
            Whether you're a curious grower, a passionate nursery owner, or just love green living — there’s a place for you here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Explore */}
          <div className="card p-8 bg-white/5 border border-white/10 rounded-xl hover:shadow-neon transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Explore & Learn</h3>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1" />
                Discover plant species & growing tips
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1" />
                Use AI tools for plant health
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1" />
                Interactive plant care guides
              </li>
            </ul>
            <Link to="/learn" className="btn-outline w-full block text-center">
              Start Exploring
            </Link>
          </div>

          {/* Share */}
          <div className="card p-8 bg-white/10 border-2 border-green-600 rounded-xl relative shadow-lg">
            <div className="absolute top-0 right-0 bg-green-600 text-white px-4 py-1 text-sm font-medium rounded-bl-md">
              COMMUNITY FAVORITE
            </div>
            <h3 className="text-xl font-semibold mb-4">Share & Inspire</h3>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-start">
                <Check size={20} className="text-green-400 mr-2 mt-1" />
                Post your garden stories & photos
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-400 mr-2 mt-1" />
                Help others with plant questions
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-400 mr-2 mt-1" />
                Review products & nurseries
              </li>
            </ul>
            <Link to="/community" className="btn-primary w-full block text-center">
              Join the Forum
            </Link>
          </div>

          {/* Grow */}
          <div className="card p-8 bg-white/5 border border-white/10 rounded-xl hover:shadow-neon transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Grow With Us</h3>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1" />
                Get featured on our platform
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1" />
                Connect with local nurseries
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1" />
                Attend online workshops & events
              </li>
            </ul>
            <Link to="/events" className="btn-outline w-full block text-center">
              See Events
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover\\:shadow-neon:hover {
          box-shadow: 0 0 12px #50fa7b88, 0 0 24px #50fa7b44;
        }
      `}</style>
    </section>
  );
};

export default GetInvolved;
