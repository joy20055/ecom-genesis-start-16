
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-brand-600">StoreHub</h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand-600 transition-colors">
              Home
            </Link>
            <a href="#features" className="text-gray-700 hover:text-brand-600 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-brand-600 transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-brand-600 transition-colors">
              Testimonials
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-brand-500 text-brand-700 hover:bg-brand-50">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="bg-brand-600 hover:bg-brand-700">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-40 animate-fade-in">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#features" 
              className="text-gray-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="text-gray-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-700 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/login">
                <Button variant="outline" className="w-full border-brand-500 text-brand-700">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full bg-brand-600 hover:bg-brand-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
