import { Leaf } from 'lucide-react';

const Mission = () => {
  return (
    <section className="section-padding bg-[#2a6a38]">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-8">
            <Leaf size={32} className="text-[#f8c05a]" />
          </div>
          <h2 className="heading-lg mb-6">Our Mission</h2>
          <p className="body-lg mb-8 text-white/90">
            At Farmers India Market, we're on a mission to make plant ownership easier and more
            accessible for everyone. We believe in supporting local nurseries, promoting sustainable
            gardening practices, and building a community of plant lovers across India.
          </p>
          <p className="body-lg mb-8 text-white/90">
            Through technology and community connections, we aim to inspire more people to bring
            nature into their lives, support local agricultural businesses, and create a greener,
            more sustainable future for all.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-[#f8c05a] text-4xl font-bold mb-2">25K+</div>
              <p className="text-white/80">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-[#f8c05a] text-4xl font-bold mb-2">500+</div>
              <p className="text-white/80">Nurseries</p>
            </div>
            <div className="text-center">
              <div className="text-[#f8c05a] text-4xl font-bold mb-2">10K+</div>
              <p className="text-white/80">Plants Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;