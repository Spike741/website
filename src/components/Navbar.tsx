
import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, LogOut } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { items } = useCart();
  const { user, signOut } = useAuth();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar with brand and search */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/" className="font-serif text-2xl md:text-3xl text-maroon hover:text-maroon-light transition-colors">
            Handloom Elegance
          </Link>
          
          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex items-center relative flex-1 mx-8 max-w-md">
            <Input 
              type="text" 
              placeholder="Search for sarees..." 
              className="pl-8 pr-4 py-2 rounded-full"
            />
            <Search className="absolute left-2 h-4 w-4 text-gray-400" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-maroon hover:text-maroon-light transition-colors" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-maroon text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-maroon hover:text-maroon-light">
                    <User className="h-6 w-6" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      My Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="outline" className="text-maroon border-maroon hover:bg-maroon hover:text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Categories Navigation Menu */}
      <div className="bg-ivory-dark">
        <div className="container mx-auto px-4">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="px-2">
              <NavigationMenuItem>
                <Link to="/" className="block px-3 py-3 text-gray-700 hover:text-maroon transition-colors text-sm">
                  HOME
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto py-3 px-3 text-sm bg-transparent hover:text-maroon text-gray-700">
                  SILK SAREES
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 w-[400px] md:w-[600px] gap-3 p-4">
                    <div>
                      <h3 className="font-medium mb-2 text-maroon">Premium Silk</h3>
                      <ul className="space-y-2">
                        <li><Link to="/products?category=Silk" className="text-sm hover:text-maroon">Kanjivaram</Link></li>
                        <li><Link to="/products?category=Silk" className="text-sm hover:text-maroon">Banarasi</Link></li>
                        <li><Link to="/products?category=Silk" className="text-sm hover:text-maroon">Mysore Silk</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-maroon">Traditional</h3>
                      <ul className="space-y-2">
                        <li><Link to="/products?category=Silk" className="text-sm hover:text-maroon">Tussar Silk</Link></li>
                        <li><Link to="/products?category=Silk" className="text-sm hover:text-maroon">Art Silk</Link></li>
                        <li><Link to="/products?category=Silk" className="text-sm hover:text-maroon">Wedding Collection</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-maroon">Occasion Wear</h3>
                      <ul className="space-y-2">
                        <li><Link to="/products?category=Silk" className="text-sm hover:text-maroon">Festive</Link></li>
                        <li><Link to="/products?category=Silk" className="text-sm hover:text-maroon">Party Wear</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto py-3 px-3 text-sm bg-transparent hover:text-maroon text-gray-700">
                  COTTON SAREES
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 w-[400px] gap-3 p-4">
                    <div>
                      <h3 className="font-medium mb-2 text-maroon">Pure Cotton</h3>
                      <ul className="space-y-2">
                        <li><Link to="/products?category=Cotton" className="text-sm hover:text-maroon">Bengal Cotton</Link></li>
                        <li><Link to="/products?category=Cotton" className="text-sm hover:text-maroon">Khadi Cotton</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-maroon">Daily Wear</h3>
                      <ul className="space-y-2">
                        <li><Link to="/products?category=Cotton" className="text-sm hover:text-maroon">Casual</Link></li>
                        <li><Link to="/products?category=Cotton" className="text-sm hover:text-maroon">Office Wear</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto py-3 px-3 text-sm bg-transparent hover:text-maroon text-gray-700">
                  HANDLOOM
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-2 w-[400px] gap-3 p-4">
                    <div>
                      <h3 className="font-medium mb-2 text-maroon">Traditional Weaves</h3>
                      <ul className="space-y-2">
                        <li><Link to="/products?category=Handloom" className="text-sm hover:text-maroon">Chanderi</Link></li>
                        <li><Link to="/products?category=Handloom" className="text-sm hover:text-maroon">Maheshwari</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2 text-maroon">Regional Crafts</h3>
                      <ul className="space-y-2">
                        <li><Link to="/products?category=Handloom" className="text-sm hover:text-maroon">Block Print</Link></li>
                        <li><Link to="/products?category=Handloom" className="text-sm hover:text-maroon">Hand Painted</Link></li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/products" className="block px-3 py-3 text-gray-700 hover:text-maroon transition-colors text-sm">
                  ALL COLLECTIONS
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
