
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for beginners to start their eCommerce journey",
    features: [
      "1 store with subdomain",
      "Up to 50 products",
      "Basic analytics",
      "Community support",
      "2.5% transaction fee",
      "Basic customization"
    ],
    cta: "Get Started",
    highlighted: false
  },
  {
    name: "Growth",
    price: "29",
    description: "For growing businesses ready to scale operations",
    features: [
      "3 stores with subdomains",
      "Up to 500 products",
      "Advanced analytics",
      "Priority email support",
      "1% transaction fee",
      "Advanced customization",
      "Abandoned cart recovery",
      "SEO optimization tools"
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: true
  },
  {
    name: "Professional",
    price: "79",
    description: "For established businesses needing powerful tools",
    features: [
      "10 stores with subdomains",
      "Unlimited products",
      "Full analytics suite",
      "24/7 priority support",
      "0.5% transaction fee",
      "Full customization",
      "Advanced marketing tools",
      "Multi-currency support",
      "API access"
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Pricing Plans for Every Stage
          </h2>
          <p className="text-xl text-gray-600">
            Start with our free plan and upgrade as your business grows. No hidden fees.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-md overflow-hidden border ${
                plan.highlighted 
                  ? 'border-brand-400 pricing-highlight relative' 
                  : 'border-gray-100'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-brand-600 text-white text-center text-sm py-1">
                  Most Popular
                </div>
              )}
              
              <div className="p-6 pt-8">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <Link to="/signup">
                  <Button 
                    className={`w-full mb-6 ${
                      plan.highlighted 
                        ? 'bg-brand-600 hover:bg-brand-700' 
                        : 'bg-gray-800 hover:bg-gray-900'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2 mt-1 text-brand-600">
                        <Check size={16} />
                      </span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
