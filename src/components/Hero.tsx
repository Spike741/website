
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const slides = [
    {
      title: "Exquisite Silk Sarees",
      subtitle: "Premium Collection",
      description: "Discover our handpicked silk sarees crafted with perfection and adorned with intricate designs",
      cta: "Explore Silk Collection",
      link: "/products?category=Silk",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop",
      theme: "maroon",
      badge: "Bestseller"
    },
    {
      title: "Traditional Handloom",
      subtitle: "Heritage Weaves",
      description: "Authentic handwoven sarees that celebrate traditional craftsmanship and cultural heritage",
      cta: "Discover Handloom",
      link: "/products?category=Handloom",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop",
      theme: "gold",
      badge: "Artisan Made"
    },
    {
      title: "Pure Cotton Comfort",
      subtitle: "Everyday Elegance",
      description: "Soft, breathable cotton sarees perfect for daily wear with timeless appeal",
      cta: "Shop Cotton Sarees",
      link: "/products?category=Cotton",
      image: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop",
      theme: "maroon",
      badge: "Eco-Friendly"
    }
  ];

  return (
    <div className="relative">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[70vh] lg:h-[80vh] w-full overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="container mx-auto h-full flex items-center px-4 relative z-10">
                  <div className="max-w-2xl space-y-8 animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
                      <Sparkles className="h-4 w-4 text-gold" />
                      <span className="text-sm font-medium text-white">{slide.badge}</span>
                    </div>
                    
                    {/* Title Section */}
                    <div>
                      <p className="text-gold font-medium text-lg mb-2">{slide.subtitle}</p>
                      <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight font-bold">
                        {slide.title}
                      </h1>
                    </div>
                    
                    {/* Description */}
                    <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                      {slide.description}
                    </p>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link to={slide.link}>
                        <Button 
                          className={`bg-${slide.theme} hover:bg-${slide.theme}-light text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group min-w-[200px]`}
                        >
                          {slide.cta}
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                      
                      <Link to="/products">
                        <Button 
                          variant="outline" 
                          className="border-2 border-white text-white hover:bg-white hover:text-maroon px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 min-w-[200px]"
                        >
                          View All Collections
                        </Button>
                      </Link>
                    </div>
                    
                    {/* Customer Rating */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                        ))}
                      </div>
                      <div className="text-white">
                        <span className="font-semibold">4.9/5</span>
                        <span className="text-white/80 ml-2">from 5000+ reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute bottom-10 right-10 opacity-20">
                  <div className="w-32 h-32 border-2 border-gold rounded-full"></div>
                  <div className="w-20 h-20 border border-white rounded-full absolute top-6 left-6"></div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Enhanced Navigation */}
        <CarouselPrevious className="left-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-maroon transition-colors duration-300" />
        <CarouselNext className="right-6 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-maroon transition-colors duration-300" />
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <div key={index} className="w-3 h-3 rounded-full bg-white/40 backdrop-blur-sm"></div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
