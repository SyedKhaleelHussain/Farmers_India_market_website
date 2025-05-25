import { Leaf, Users, Shield, RefreshCw } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Disclaimer Section */}
      <section className="bg-yellow-100 border border-yellow-400 text-yellow-800 py-4 px-6 mx-auto max-w-3xl rounded mb-10">
        <p className="text-center text-sm">
          <strong>Disclaimer:</strong> This is a personal project created for learning purposes and to help fellow plant enthusiasts. 
          It is <em>not</em> a professional or commercial website.
        </p>
      </section>

      {/* Hero Section */}
      <section className="bg-[#2a6a38] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6 animate-fade-up">About Farmers India Market</h1>
            <p className="body-lg mb-8 text-white/90 animate-fade-up animate-delay-100">
              A personal project created to make plant ownership easier and connect India’s green community.
            </p>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="heading-lg mb-6 text-center text-[#2a6a38]">My Story</h2>
          <p className="body-md mb-4 text-gray-600">
            I started Farmers India Market in 2025 as a passion project to help fellow plant lovers access quality products and advice easily. As someone deeply interested in gardening and technology, I wanted to build a platform that bridges the gap between gardeners and trustworthy products while fostering a supportive community.
          </p>
          <p className="body-md mb-4 text-gray-600">
            This project has been a journey of learning, experimentation, and growth — combining my love for plants with modern web technologies to create a simple yet powerful platform.
          </p>
          <p className="body-md mb-4 text-gray-600">
            My goal is to make gardening more accessible, enjoyable, and sustainable for everyone across India.
          </p>
          <div className="mt-8 flex justify-center">
            <img
              src="https://images.pexels.com/photos/6231713/pexels-photo-6231713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Gardening and plants"
              className="rounded-lg shadow-lg w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      {/* My Values */}
      <section className="py-16 bg-[#52b99a]">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">My Values</h2>
            <p className="body-md text-gray-600">
              These principles guide everything I do at Farmers India Market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-[#2a6a38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf size={28} className="text-[#2a6a38]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Promoting eco-friendly gardening practices to protect our planet.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-[#2a6a38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={28} className="text-[#2a6a38]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Building a supportive community where plant lovers can share and learn together.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-[#2a6a38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={28} className="text-[#2a6a38]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust & Quality</h3>
              <p className="text-gray-600">
                Ensuring high standards for all products to keep customers confident and satisfied.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-[#2a6a38]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <RefreshCw size={28} className="text-[#2a6a38]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Using technology creatively to make gardening easier and more enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Me CTA */}
      <section className="py-16 bg-[#2a6a38] text-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6">Join the Journey</h2>
          <p className="body-lg mb-8">
            I invite you to be part of this growing community and help make gardening accessible for all.
          </p>
          <a href="/contact" className="btn-secondary inline-block">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
