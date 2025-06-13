
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Heart, Truck, Shield, Star, Users, Sparkles } from "lucide-react";

const silkCategories = [
  { name: "Kanjivaram Silk", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Silk" },
  { name: "Banarasi Silk", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Silk" },
  { name: "Mysore Silk", image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Silk" },
  { name: "Tussar Silk", image: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Silk" },
  { name: "Art Silk", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Silk" },
];

const cottonCategories = [
  { name: "Pure Cotton", image: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Cotton" },
  { name: "Khadi Cotton", image: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Cotton" },
  { name: "Bengal Cotton", image: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Cotton" },
  { name: "Handspun Cotton", image: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Cotton" },
  { name: "Organic Cotton", image: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Cotton" },
];

const handloomCategories = [
  { name: "Chanderi", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Handloom" },
  { name: "Maheshwari", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Handloom" },
  { name: "Block Print", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Handloom" },
  { name: "Hand Painted", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Handloom" },
  { name: "Traditional Weaves", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop", link: "/products?category=Handloom" },
];

const featuredProducts = [
  {
    id: "1",
    name: "Mysore Silk Saree",
    type: "Silk",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop",
    material: "Pure Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "2",
    name: "Banarasi Handloom Saree",
    type: "Handloom",
    price: 5000,
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop",
    material: "Handwoven Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "3",
    name: "Cotton Khadi Saree",
    type: "Cotton",
    price: 1500,
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop",
    material: "Pure Cotton",
    yardSize: "6 yards"
  },
  {
    id: "4",
    name: "Kanjivaram Silk Saree",
    type: "Silk",
    price: 8000,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop",
    material: "Kanjivaram Silk",
    yardSize: "6.5 yards"
  },
];

const newArrivals = [
  {
    id: "5",
    name: "Chanderi Handloom Saree",
    type: "Handloom",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop",
    material: "Chanderi Cotton Silk",
    yardSize: "6 yards"
  },
  {
    id: "6",
    name: "Tussar Silk Saree",
    type: "Silk",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop",
    material: "Tussar Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "7",
    name: "Bengal Cotton Saree",
    type: "Cotton",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop",
    material: "Bengal Cotton",
    yardSize: "6 yards"
  },
  {
    id: "8",
    name: "Maheshwari Handloom Saree",
    type: "Handloom",
    price: 3000,
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop",
    material: "Cotton Silk",
    yardSize: "6.5 yards"
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Enhanced Welcome Section */}
      <div className="py-16 bg-gradient-to-br from-ivory via-white to-ivory-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gold rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-maroon rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-gold transform rotate-45"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gold/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-medium text-gold">Premium Handloom Collection</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-maroon mb-6 leading-tight">
            Where Tradition Meets 
            <span className="block text-gold">Timeless Elegance</span>
          </h2>
          
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            Discover the finest collection of handcrafted sarees, each piece telling a story of Indian heritage, 
            masterful artistry, and timeless beauty that transcends generations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/products">
              <Button className="bg-maroon hover:bg-maroon-light text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Explore Collection
              </Button>
            </Link>
            <Link to="/products?category=Silk">
              <Button variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300">
                Premium Silk Sarees
              </Button>
            </Link>
          </div>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/20 rounded-full mb-4 group-hover:bg-gold/30 transition-colors">
                <Heart className="h-6 w-6 text-gold" />
              </div>
              <span className="block text-3xl font-bold text-maroon mb-2">500+</span>
              <span className="text-gray-600 font-medium">Unique Designs</span>
            </div>
            <div className="group text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-maroon/20 rounded-full mb-4 group-hover:bg-maroon/30 transition-colors">
                <Award className="h-6 w-6 text-maroon" />
              </div>
              <span className="block text-3xl font-bold text-maroon mb-2">25+</span>
              <span className="text-gray-600 font-medium">Weaving Traditions</span>
            </div>
            <div className="group text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/20 rounded-full mb-4 group-hover:bg-gold/30 transition-colors">
                <Users className="h-6 w-6 text-gold" />
              </div>
              <span className="block text-3xl font-bold text-maroon mb-2">15+</span>
              <span className="text-gray-600 font-medium">Regional Crafts</span>
            </div>
            <div className="group text-center p-6 rounded-xl bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-maroon/20 rounded-full mb-4 group-hover:bg-maroon/30 transition-colors">
                <Star className="h-6 w-6 text-maroon" />
              </div>
              <span className="block text-3xl font-bold text-maroon mb-2">5K+</span>
              <span className="text-gray-600 font-medium">Happy Customers</span>
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <CategorySection title="SILK SAREE COLLECTION" categories={silkCategories} />
      
      <Separator />
      
      <FeaturedProducts title="TRENDING SAREES" products={featuredProducts} />
      
      <Separator />
      
      {/* Enhanced Why Choose Us Section */}
      <div className="py-16 bg-gradient-to-r from-maroon/5 via-gold/5 to-maroon/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-maroon mb-4">Why Choose Handloom Elegance?</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">Experience the difference of authentic craftsmanship and premium quality</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maroon">Authentic Handloom</h3>
              <p className="text-gray-600 leading-relaxed">Traditional weaving techniques passed down through generations of master artisans</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-maroon to-maroon-light rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maroon">Premium Quality</h3>
              <p className="text-gray-600 leading-relaxed">Finest silk and cotton materials sourced directly from certified weavers</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maroon">Supporting Artisans</h3>
              <p className="text-gray-600 leading-relaxed">Directly supporting traditional weavers and their families across India</p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-maroon to-maroon-light rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-maroon">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Quick and secure delivery across India with careful packaging</p>
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <CategorySection title="COTTON SAREE COLLECTION" categories={cottonCategories} />
      
      <Separator />
      
      {/* Enhanced Craftsmanship Section */}
      <div className="py-20 bg-gradient-to-br from-ivory-dark via-white to-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-maroon/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-maroon" />
                <span className="text-sm font-medium text-maroon">Heritage & Tradition</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl text-maroon mb-6 leading-tight">
                Craftsmanship & 
                <span className="block text-gold">Heritage</span>
              </h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Each saree in our collection is a masterpiece, handcrafted by skilled artisans who have inherited 
                the art of weaving through generations. We bring you authentic handloom sarees that celebrate 
                India's rich textile heritage and support traditional craftsmanship.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-gray-700">Hand-picked premium materials</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-maroon rounded-full"></div>
                  <span className="text-gray-700">Traditional dyeing techniques</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-gold rounded-full"></div>
                  <span className="text-gray-700">Eco-friendly production methods</span>
                </div>
              </div>
              
              <Link to="/products">
                <Button className="bg-maroon hover:bg-maroon-light text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Discover Our Craft
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop" alt="Silk Saree" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src="https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop" alt="Cotton Saree" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop" alt="Handloom Saree" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1587&auto=format&fit=crop" alt="Designer Saree" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator />
      
      <CategorySection title="HANDLOOM COLLECTION" categories={handloomCategories} />
      
      <Separator />
      
      <FeaturedProducts title="NEW ARRIVALS" products={newArrivals} />
      
      {/* Enhanced Newsletter Section */}
      <div className="py-16 bg-gradient-to-r from-maroon to-maroon-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-32 h-32 border border-gold rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-24 h-24 border border-white rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Stay Updated with Latest Collections</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Be the first to know about new arrivals, exclusive offers, and traditional weaving stories
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-gold text-gray-700"
            />
            <Button className="bg-gold hover:bg-gold-light text-maroon px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
