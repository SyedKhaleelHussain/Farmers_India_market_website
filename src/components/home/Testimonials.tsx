import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  result: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Home Gardener",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Farmers India Market transformed my gardening experience. The AI advice helped me diagnose and treat a fungal infection that was killing my plants.",
      result: "Saved my entire herb garden"
    },
    {
      id: 2,
      name: "Raj Patel",
      role: "Nursery Owner",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "As a nursery owner, joining this platform has expanded my customer base beyond my city. The business tools help me manage inventory and connect with plant lovers across India.",
      result: "Increased sales by 70%"
    },
    {
      id: 3,
      name: "Anjali Desai",
      role: "Urban Farmer",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "The community forum has been invaluable. I've learned so many techniques for maximizing yield in my small balcony garden from experienced gardeners across the country.",
      result: "Tripled my home garden yield"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Landscape Designer",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      quote: "Finding specialty plants used to be a challenge for my projects. Now, I can connect with nurseries across India that specialize in exactly what I need for my clients.",
      result: "Completed projects ahead of schedule"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with the CSS animation duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAnimating]);

  return (
    <section className="section-padding bg-[#65c079]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">What Our Users Say</h2>
          <p className="body-md text-gray-600">
            Join thousands of satisfied users who have transformed their gardening experience with Farmers India Market.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="card p-8 text-center">
                    <div className="mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-[#2a6a38]"
                      />
                    </div>
                    <blockquote className="text-lg italic mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="mb-2">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="inline-block bg-[#f8c05a]/20 text-[#e77231] px-4 py-1 rounded-full font-medium">
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-[#2a6a38] transition-colors"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-[#2a6a38] transition-colors"
            onClick={nextTestimonial}
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#2a6a38] w-6' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;