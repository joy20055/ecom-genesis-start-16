
import { 
  Store, 
  Globe, 
  Palette, 
  CreditCard, 
  BarChart3, 
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Store,
    title: "Easy Store Creation",
    description: "Launch your store in minutes with our intuitive drag-and-drop builder. No coding knowledge required."
  },
  {
    icon: Globe,
    title: "Free Subdomain",
    description: "Get a free yourstore.storehub.com subdomain or connect your custom domain for a professional presence."
  },
  {
    icon: Palette,
    title: "Beautiful Templates",
    description: "Choose from dozens of responsive, professionally designed templates that look amazing on any device."
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Gateways",
    description: "Accept payments via credit cards, PayPal, Apple Pay, and more with secure payment processing."
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track sales, visits, and customer behavior with comprehensive analytics and reports."
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description: "Rest easy with SSL certificates, secure hosting, and 99.9% uptime for your online store."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-xl text-gray-600">
            Powerful tools that make selling online simple, from setup to sale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-lg p-6 shadow-md border border-gray-100 transition-all duration-300",
                "hover:shadow-lg feature-gradient"
              )}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-600 mb-5">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
