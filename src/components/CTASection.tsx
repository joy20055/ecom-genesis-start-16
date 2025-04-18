
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-600">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Selling Online?
          </h2>
          
          <p className="text-xl text-brand-100 mb-8">
            Join thousands of successful businesses and launch your online store today.
            No credit card required to get started.
          </p>
          
          <Link to="/signup">
            <Button size="lg" className="bg-white text-brand-700 hover:bg-brand-50">
              Create Your Store Now
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
