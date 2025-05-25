const FeaturedIn = () => {
  return (
    <section
      id="featured"
      className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-14 tracking-wider uppercase">
          Featured In
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            { alt: "EcoLife Magazine", text: "EcoLife" },
            { alt: "PlantPro", text: "PlantPro" },
            { alt: "Nature Today", text: "NatureToday" },
          ].map((logo, idx) => (
            <div
              key={idx}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-neon transition-all duration-300 hover:scale-[1.03] group"
            >
              <img
                src={`https://placehold.co/220x60/111111/50fa7b?text=${logo.text}&font=playfair`}
                alt={logo.alt}
                className="h-12 mx-auto opacity-80 group-hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
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

export default FeaturedIn;
