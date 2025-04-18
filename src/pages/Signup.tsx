
import { Link } from "react-router-dom";
import SignupForm from "@/components/auth/SignupForm";
import { ArrowLeft, Check } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 flex flex-col p-4 sm:p-6 md:p-12 justify-center">
          <div className="max-w-md w-full mx-auto">
            <div className="mb-2">
              <Link to="/" className="text-brand-600 flex items-center text-sm font-medium hover:text-brand-700">
                <ArrowLeft size={16} className="mr-1" />
                Back to Home
              </Link>
            </div>
            
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Create your account</h1>
            <p className="text-gray-600 mb-8">Get started with your free store today</p>
            
            <SignupForm />
            
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-brand-600 hover:text-brand-700">
                Log in
              </Link>
            </p>
          </div>
        </div>
        
        {/* Right side - Image & Content */}
        <div className="hidden md:block md:w-1/2 bg-brand-600 text-white">
          <div className="h-full flex flex-col justify-center p-12">
            <h2 className="text-3xl font-bold mb-4">Start selling online in minutes</h2>
            <p className="text-brand-100 mb-6">
              Join thousands of merchants who trust StoreHub for their online business.
            </p>
            
            <ul className="space-y-4 mt-6">
              <li className="flex">
                <span className="mr-3 text-brand-100">
                  <Check />
                </span>
                <span>Free plan available with all essential features</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-brand-100">
                  <Check />
                </span>
                <span>No technical knowledge required</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-brand-100">
                  <Check />
                </span>
                <span>Free subdomain for your store</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-brand-100">
                  <Check />
                </span>
                <span>Mobile-friendly store templates</span>
              </li>
              <li className="flex">
                <span className="mr-3 text-brand-100">
                  <Check />
                </span>
                <span>Secure payment processing</span>
              </li>
            </ul>
            
            <div className="mt-8 p-4 bg-brand-500 bg-opacity-30 rounded-lg">
              <p className="text-sm italic">
                "StoreHub made it incredibly easy to launch my online business. I was up and running in less than a day!" 
                <span className="block mt-2 font-medium">— Sarah K., Fashion Store Owner</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
