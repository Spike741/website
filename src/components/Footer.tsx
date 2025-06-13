
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleLaunchingSoonClick = (e: React.MouseEvent, categoryName: string) => {
    e.preventDefault();
    toast({
      title: "Launching Soon!",
      description: `${categoryName} will be available soon. Stay tuned!`,
      duration: 3000,
    });
  };

  const handleComingSoonClick = (e: React.MouseEvent, featureName: string) => {
    e.preventDefault();
    toast({
      title: "Coming Soon!",
      description: `${featureName} feature will be available soon. For immediate assistance, please call 9019580044`,
      duration: 4000,
    });
  };

  return (
    <footer className="bg-white text-gray-700 pt-8 sm:pt-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4 text-maroon">Fashion Store</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Bringing you the latest trends and styles to elevate your wardrobe with quality and affordability.
            </p>
          </div>
          
          {/* Categories Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">Categories</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="text-center sm:text-left">
                <Link 
                  to="/products" 
                  className="hover:text-maroon transition-colors text-sm sm:text-base inline-block py-1 px-2 sm:px-0 -mx-2 sm:mx-0 rounded tap-highlight-transparent"
                >
                  Women's Collection
                </Link>
              </li>
              <li className="text-center sm:text-left">
                <button 
                  onClick={(e) => handleLaunchingSoonClick(e, "Men's Collection")}
                  className="hover:text-maroon transition-colors text-left text-sm sm:text-base py-2 px-3 sm:px-0 -mx-3 sm:mx-0 rounded tap-highlight-transparent w-full sm:w-auto"
                >
                  Men's Collection
                </button>
              </li>
              <li className="text-center sm:text-left">
                <button 
                  onClick={(e) => handleLaunchingSoonClick(e, "Kids' Collection")}
                  className="hover:text-maroon transition-colors text-left text-sm sm:text-base py-2 px-3 sm:px-0 -mx-3 sm:mx-0 rounded tap-highlight-transparent w-full sm:w-auto"
                >
                  Kids' Collection
                </button>
              </li>
              <li className="text-center sm:text-left">
                <button 
                  onClick={(e) => handleLaunchingSoonClick(e, "Accessories")}
                  className="hover:text-maroon transition-colors text-left text-sm sm:text-base py-2 px-3 sm:px-0 -mx-3 sm:mx-0 rounded tap-highlight-transparent w-full sm:w-auto"
                >
                  Accessories
                </button>
              </li>
            </ul>
          </div>
          
          {/* Help Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">Help</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="text-center sm:text-left">
                <button 
                  onClick={(e) => handleComingSoonClick(e, "Order Tracking")}
                  className="hover:text-maroon transition-colors text-left text-sm sm:text-base py-2 px-3 sm:px-0 -mx-3 sm:mx-0 rounded tap-highlight-transparent w-full sm:w-auto"
                >
                  Track Order
                </button>
              </li>
              <li className="text-center sm:text-left">
                <button 
                  onClick={(e) => handleComingSoonClick(e, "Returns & Exchanges")}
                  className="hover:text-maroon transition-colors text-left text-sm sm:text-base py-2 px-3 sm:px-0 -mx-3 sm:mx-0 rounded tap-highlight-transparent w-full sm:w-auto"
                >
                  Returns & Exchanges
                </button>
              </li>
              <li className="text-center sm:text-left">
                <button 
                  onClick={(e) => handleComingSoonClick(e, "Shipping Information")}
                  className="hover:text-maroon transition-colors text-left text-sm sm:text-base py-2 px-3 sm:px-0 -mx-3 sm:mx-0 rounded tap-highlight-transparent w-full sm:w-auto"
                >
                  Shipping Policy
                </button>
              </li>
              <li className="text-center sm:text-left">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    toast({
                      title: "Contact Us",
                      description: "📞 Call: 9019580044 | 💬 WhatsApp: 9019580044 | 📧 Email: info@handloomelegance.com",
                      duration: 6000,
                    });
                  }}
                  className="hover:text-maroon transition-colors text-left text-sm sm:text-base py-2 px-3 sm:px-0 -mx-3 sm:mx-0 rounded tap-highlight-transparent w-full sm:w-auto"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          
          {/* Social & Newsletter Section */}
          <div className="space-y-4">
            <h4 className="font-medium text-base sm:text-lg mb-3 sm:mb-4 text-center sm:text-left">Connect With Us</h4>
            <div className="flex space-x-6 justify-center sm:justify-start">
              <a href="#" className="text-gray-600 hover:text-maroon transition-colors p-2 -m-2 tap-highlight-transparent">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-maroon transition-colors p-2 -m-2 tap-highlight-transparent">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-maroon transition-colors p-2 -m-2 tap-highlight-transparent">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-4">
              <h5 className="text-sm font-medium mb-3 text-center sm:text-left">Subscribe to our newsletter</h5>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-3 sm:py-2 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none flex-grow text-sm focus:outline-none focus:ring-2 focus:ring-maroon focus:border-transparent"
                />
                <button className="bg-maroon text-white px-4 py-3 sm:py-2 rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-maroon-light transition-colors text-sm font-medium tap-highlight-transparent">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 sm:my-8" />
        
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 pb-6 sm:pb-8">
          <p className="text-sm text-center sm:text-left">&copy; 2024 Fashion Store. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={(e) => handleComingSoonClick(e, "Privacy Policy")}
              className="text-sm text-gray-600 hover:text-maroon py-2 px-3 -mx-3 rounded tap-highlight-transparent"
            >
              Privacy Policy
            </button>
            <button 
              onClick={(e) => handleComingSoonClick(e, "Terms of Service")}
              className="text-sm text-gray-600 hover:text-maroon py-2 px-3 -mx-3 rounded tap-highlight-transparent"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
