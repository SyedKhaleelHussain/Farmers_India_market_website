import Hero from '../components/home/Hero';
import FeaturedIn from '../components/home/FeaturedIn';
import Testimonials from '../components/home/Testimonials';
import HowItWorks from '../components/home/HowItWorks';
import Features from '../components/home/Features';
import Mission from '../components/home/Mission';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Mission />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default HomePage;