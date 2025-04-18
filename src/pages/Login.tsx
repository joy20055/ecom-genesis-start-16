
import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";
import { ArrowLeft } from "lucide-react";

const Login = () => {
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
            
            <h1 className="text-3xl font-bold mb-2 text-gray-900">Welcome back</h1>
            <p className="text-gray-600 mb-8">Log in to your account to continue</p>
            
            <LoginForm />
            
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="font-medium text-brand-600 hover:text-brand-700">
                Sign up
              </Link>
            </p>
          </div>
        </div>
        
        {/* Right side - Image & Content */}
        <div className="hidden md:block md:w-1/2 bg-brand-600 text-white">
          <div className="h-full flex flex-col justify-center p-12">
            <h2 className="text-3xl font-bold mb-4">Manage your online store with ease</h2>
            <p className="text-brand-100 mb-6">
              Access your dashboard, track orders, and grow your business all in one place.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-brand-500 bg-opacity-30 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Simple dashboard</h3>
                <p className="text-sm text-brand-100">Get an overview of your store's performance at a glance.</p>
              </div>
              
              <div className="bg-brand-500 bg-opacity-30 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Order tracking</h3>
                <p className="text-sm text-brand-100">Manage your orders and fulfill them efficiently.</p>
              </div>
              
              <div className="bg-brand-500 bg-opacity-30 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Inventory control</h3>
                <p className="text-sm text-brand-100">Keep track of your products and never oversell.</p>
              </div>
              
              <div className="bg-brand-500 bg-opacity-30 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-brand-100">Gain insights to help grow your business.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
