
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 hero-gradient">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-4">
              Launch Your Online Store 
              <span className="text-brand-600"> in Minutes</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Create a professional eCommerce store with zero technical skills.
              Free subdomain, easy setup, and all the tools you need to succeed online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white font-medium">
                  Create Your Store
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              
              <a href="#features">
                <Button variant="outline" size="lg" className="border-brand-500 text-brand-700">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              {/* Hero image with shadow and border */}
              <div className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="StoreHub Dashboard Preview"
                  className="w-full rounded-xl shadow-sm"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-brand-100 rounded-full -z-10"></div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-brand-50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
