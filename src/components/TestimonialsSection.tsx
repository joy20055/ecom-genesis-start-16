
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Boutique Owner",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    content: "StoreHub transformed my business. I was able to launch my online store in a single afternoon and saw sales within the first week. The templates are gorgeous and the customer support is incredible.",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "Craft Supplies Store",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    content: "As someone with zero technical skills, I was amazed at how easy it was to set up my store. The analytics tools helped me understand which products were performing best and optimize my inventory.",
    stars: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Handmade Jewelry Shop",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content: "The free plan gave me everything I needed to test my business idea without any risk. Once I started making consistent sales, upgrading to the Growth plan was a no-brainer for the additional features.",
    stars: 4
  },
  {
    name: "James Wilson",
    role: "Electronics Retailer",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    content: "After trying three other eCommerce platforms, StoreHub is by far the best. The interface is intuitive, and the loading speeds are impressive. My conversion rate increased by 28% after switching.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of successful store owners who've grown their business with StoreHub.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/4 flex flex-col items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <div className="flex mb-2">
                  {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              
              <div className="md:w-3/4">
                <p className="text-gray-700 italic mb-4 text-lg">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <p className="font-medium text-gray-900">{testimonials[currentIndex].name}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
