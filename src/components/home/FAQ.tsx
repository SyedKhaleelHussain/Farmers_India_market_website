import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqs: FAQItem[] = [
    {
      question: "How do I list my plants for sale?",
      answer: "To list your plants for sale, sign up for an account, go to your dashboard, and click on 'Add New Listing.' Fill in the details about your plant, upload clear photos, set a price, and specify delivery options. Once submitted, your listing will be reviewed and published within 24 hours."
    },
    {
      question: "How does the AI plant advisor work?",
      answer: "Our AI plant advisor uses advanced image recognition and machine learning algorithms to identify plants, diagnose diseases, and provide care recommendations. Simply upload a clear photo of your plant or the issue you're facing, and the AI will analyze it and provide personalized advice based on the plant species and visible conditions."
    },
    {
      question: "Is it free to use Farmers India Market?",
      answer: "Yes, Farmers India Market offers a free basic account that allows you to browse listings, use limited AI plant identification, access the community forum, and view nursery locations. For advanced features like unlimited AI advice, personalized care reminders, and marketplace discounts, we offer Premium and Nursery Pro paid plans."
    },
    {
      question: "How do I find nurseries nearby?",
      answer: "To find nurseries near you, use our Nursery Locator feature. Allow location access when prompted, or manually enter your city or postal code. The interactive map will show all registered nurseries in your area, along with their ratings, specialties, and contact information. You can filter results based on distance, ratings, or specific plant varieties."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept a variety of payment methods including credit/debit cards, UPI, net banking, digital wallets like Paytm and Google Pay, and cash on delivery for certain products. All transactions are secure and protected with industry-standard encryption."
    },
    {
      question: "How can I become a verified seller?",
      answer: "To become a verified seller, first create an account and complete your profile with accurate business information. Submit the required documentation for verification, including business registration, tax ID, and proof of address. Our team will review your application, and once approved, you'll receive a verified badge on your profile and listings."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-[#3b944f]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Frequently Asked Questions</h2>
          <p className="body-md text-gray-600">
            Got questions? We've got answers. If you don't see what you're looking for, feel free to contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all ${
                  openIndex === index
                    ? 'bg-[#2a6a38] text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white p-6 rounded-b-lg shadow-md mt-1 animate-fade-up">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="mb-4">Still have questions?</p>
          <a href="/contact" className="btn-primary inline-block">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;