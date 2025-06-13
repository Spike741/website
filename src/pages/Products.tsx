import { useState, useEffect } from "react";
import ProductCardWithTracking from "../components/ProductCardWithTracking";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  material: string;
  yardSize: string;
}

// All Saree Products with Saree Images Only
const products: Product[] = [
  // Silk Sarees
  {
    id: "1",
    name: "Royal Mysore Silk Saree",
    type: "Silk",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop",
    material: "Pure Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "2",
    name: "Kanjivaram Wedding Silk Saree",
    type: "Silk",
    price: 8500,
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop",
    material: "Kanjivaram Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "3",
    name: "Tussar Silk Festive Saree",
    type: "Silk",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop",
    material: "Tussar Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "4",
    name: "Banarasi Silk Traditional Saree",
    type: "Silk",
    price: 7200,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1587&auto=format&fit=crop",
    material: "Banarasi Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "5",
    name: "Art Silk Designer Saree",
    type: "Silk",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1587&auto=format&fit=crop",
    material: "Art Silk",
    yardSize: "6 yards"
  },
  {
    id: "6",
    name: "Mulberry Silk Elegant Saree",
    type: "Silk",
    price: 5500,
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1587&auto=format&fit=crop",
    material: "Mulberry Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "21",
    name: "Patola Silk Heritage Saree",
    type: "Silk",
    price: 9500,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop",
    material: "Patola Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "22",
    name: "Crepe Silk Party Wear Saree",
    type: "Silk",
    price: 3200,
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop",
    material: "Crepe Silk",
    yardSize: "6 yards"
  },
  
  // Cotton Sarees
  {
    id: "7",
    name: "Pure Cotton Khadi Saree",
    type: "Cotton",
    price: 1500,
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop",
    material: "Pure Cotton",
    yardSize: "6 yards"
  },
  {
    id: "8",
    name: "Bengal Cotton Traditional Saree",
    type: "Cotton",
    price: 1200,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1587&auto=format&fit=crop",
    material: "Bengal Cotton",
    yardSize: "6 yards"
  },
  {
    id: "9",
    name: "Organic Cotton Daily Wear Saree",
    type: "Cotton",
    price: 980,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1587&auto=format&fit=crop",
    material: "Organic Cotton",
    yardSize: "5.5 yards"
  },
  {
    id: "10",
    name: "Handspun Cotton Block Print Saree",
    type: "Cotton",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1587&auto=format&fit=crop",
    material: "Handspun Cotton",
    yardSize: "6 yards"
  },
  {
    id: "11",
    name: "Cotton Silk Blend Saree",
    type: "Cotton",
    price: 2200,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop",
    material: "Cotton Silk",
    yardSize: "6 yards"
  },
  {
    id: "12",
    name: "Malmal Cotton Summer Saree",
    type: "Cotton",
    price: 1350,
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop",
    material: "Malmal Cotton",
    yardSize: "5.5 yards"
  },
  {
    id: "23",
    name: "Handloom Cotton Casual Saree",
    type: "Cotton",
    price: 1650,
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop",
    material: "Handloom Cotton",
    yardSize: "6 yards"
  },
  {
    id: "24",
    name: "South Cotton Temple Border Saree",
    type: "Cotton",
    price: 1950,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1587&auto=format&fit=crop",
    material: "South Cotton",
    yardSize: "6 yards"
  },
  
  // Handloom Sarees
  {
    id: "13",
    name: "Handwoven Chanderi Saree",
    type: "Handloom",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1587&auto=format&fit=crop",
    material: "Chanderi Cotton Silk",
    yardSize: "6 yards"
  },
  {
    id: "14",
    name: "Maheshwari Handloom Saree",
    type: "Handloom",
    price: 3000,
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1587&auto=format&fit=crop",
    material: "Cotton Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "15",
    name: "Banarasi Handloom Heritage Saree",
    type: "Handloom",
    price: 5000,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop",
    material: "Handwoven Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "16",
    name: "Jamdani Handloom Masterpiece",
    type: "Handloom",
    price: 4200,
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop",
    material: "Handloom Cotton",
    yardSize: "6 yards"
  },
  {
    id: "17",
    name: "Ikat Handwoven Traditional Saree",
    type: "Handloom",
    price: 3500,
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop",
    material: "Handloom Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "18",
    name: "Pochampally Handloom Saree",
    type: "Handloom",
    price: 2800,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1587&auto=format&fit=crop",
    material: "Handloom Cotton Silk",
    yardSize: "6 yards"
  },
  {
    id: "19",
    name: "Tant Handloom Bengal Saree",
    type: "Handloom",
    price: 1800,
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1587&auto=format&fit=crop",
    material: "Handloom Cotton",
    yardSize: "5.5 yards"
  },
  {
    id: "20",
    name: "Kota Doria Handloom Saree",
    type: "Handloom",
    price: 2200,
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1587&auto=format&fit=crop",
    material: "Kota Cotton Silk",
    yardSize: "6 yards"
  },
  {
    id: "25",
    name: "Assam Silk Handloom Saree",
    type: "Handloom",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1587&auto=format&fit=crop",
    material: "Assam Silk",
    yardSize: "6.5 yards"
  },
  {
    id: "26",
    name: "Kerala Kasavu Handloom Saree",
    type: "Handloom",
    price: 3800,
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop",
    material: "Kasavu Cotton",
    yardSize: "6 yards"
  }
];

const categories = [
  "all",
  "Silk",
  "Cotton",
  "Handloom"
];

const materials = ["all", "Pure Silk", "Pure Cotton", "Handwoven Silk", "Kanjivaram Silk", "Chanderi Cotton Silk", "Tussar Silk", "Bengal Cotton", "Cotton Silk", "Art Silk", "Banarasi Silk", "Mulberry Silk", "Organic Cotton", "Handspun Cotton", "Malmal Cotton", "Handloom Cotton", "Handloom Silk", "Handloom Cotton Silk", "Kota Cotton Silk", "Patola Silk", "Crepe Silk", "South Cotton", "Assam Silk", "Kasavu Cotton"];
const prices = ["all", "Under ₹1500", "₹1500-₹3000", "₹3000-₹5000", "₹5000-₹8000", "Above ₹8000"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "new", label: "Newest First" }
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialCategory = searchParams.get("category") || "all";
  
  const [categoryFilter, setCategoryFilter] = useState<string>(initialCategory);
  const [materialFilter, setMaterialFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (categoryFilter !== "all") {
      params.set("category", categoryFilter);
    }
    setSearchParams(params);
  }, [categoryFilter, setSearchParams]);

  const filterProducts = () => {
    let filteredProducts = [...products];
    
    // Apply filters
    if (categoryFilter !== "all") {
      filteredProducts = filteredProducts.filter(product => product.type === categoryFilter);
    }
    
    if (materialFilter !== "all") {
      filteredProducts = filteredProducts.filter(product => product.material.indexOf(materialFilter) !== -1);
    }
    
    if (priceFilter !== "all") {
      if (priceFilter === "Under ₹1500") {
        filteredProducts = filteredProducts.filter(product => product.price < 1500);
      } else if (priceFilter === "₹1500-₹3000") {
        filteredProducts = filteredProducts.filter(product => product.price >= 1500 && product.price <= 3000);
      } else if (priceFilter === "₹3000-₹5000") {
        filteredProducts = filteredProducts.filter(product => product.price > 3000 && product.price <= 5000);
      } else if (priceFilter === "₹5000-₹8000") {
        filteredProducts = filteredProducts.filter(product => product.price > 5000 && product.price <= 8000);
      } else if (priceFilter === "Above ₹8000") {
        filteredProducts = filteredProducts.filter(product => product.price > 8000);
      }
    }
    
    // Apply sorting
    if (sortBy === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "new") {
      // For demo purposes, just reverse the array to simulate "newest"
      filteredProducts.reverse();
    }
    
    return filteredProducts;
  };

  const clearFilters = () => {
    setCategoryFilter("all");
    setMaterialFilter("all");
    setPriceFilter("all");
    setSortBy("featured");
    setSearchParams({});
  };

  const handleCategoryClick = (category: string) => {
    setCategoryFilter(category);
  };

  const filteredProducts = filterProducts();

  return (
    <div className="bg-ivory-dark min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-serif text-3xl text-center mb-4">Exquisite Saree Collections</h1>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover our handpicked collection of traditional and contemporary sarees, crafted with the finest materials and timeless elegance.
        </p>
        <Separator className="mb-8" />
        
        {/* Category Buttons - Desktop */}
        <div className="hidden md:flex justify-center mb-8 gap-4">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={categoryFilter === cat ? "default" : "outline"}
              className={`capitalize ${categoryFilter === cat ? "bg-maroon hover:bg-maroon-light" : "hover:text-maroon border-gray-200"}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat === "all" ? "All Products" : cat}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Mobile Filter Toggle */}
          <div className="md:hidden mb-4 w-full">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between border-gray-200"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <span className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filters & Sort
              </span>
              {isFilterOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            
            {isFilterOpen && (
              <div className="mt-4 border rounded-lg p-4 bg-white shadow-sm">
                {/* Mobile Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Category</h3>
                  <RadioGroup 
                    value={categoryFilter}
                    onValueChange={(value) => setCategoryFilter(value)}
                    className="space-y-2"
                  >
                    {categories.map((cat) => (
                      <div key={cat} className="flex items-center space-x-2">
                        <RadioGroupItem value={cat} id={`mobile-cat-${cat}`} />
                        <label htmlFor={`mobile-cat-${cat}`} className="capitalize text-sm">{cat}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                {/* Mobile Material Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Material</h3>
                  <RadioGroup 
                    value={materialFilter}
                    onValueChange={(value) => setMaterialFilter(value)}
                    className="space-y-2"
                  >
                    {materials.map((mat) => (
                      <div key={mat} className="flex items-center space-x-2">
                        <RadioGroupItem value={mat} id={`mobile-mat-${mat}`} />
                        <label htmlFor={`mobile-mat-${mat}`} className="text-sm">{mat}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                {/* Mobile Price Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Price Range</h3>
                  <RadioGroup 
                    value={priceFilter}
                    onValueChange={(value) => setPriceFilter(value)}
                    className="space-y-2"
                  >
                    {prices.map((price) => (
                      <div key={price} className="flex items-center space-x-2">
                        <RadioGroupItem value={price} id={`mobile-price-${price}`} />
                        <label htmlFor={`mobile-price-${price}`} className="text-sm">{price}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                {/* Mobile Sort */}
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Sort By</h3>
                  <RadioGroup 
                    value={sortBy}
                    onValueChange={(value) => setSortBy(value)}
                    className="space-y-2"
                  >
                    {sortOptions.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`mobile-sort-${option.value}`} />
                        <label htmlFor={`mobile-sort-${option.value}`} className="text-sm">{option.label}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
                
                <Button 
                  onClick={clearFilters}
                  variant="outline"
                  className="w-full"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
          
          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="font-serif text-lg mb-4">Filters</h2>
              
              <Collapsible defaultOpen className="mb-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full font-medium text-left mb-2">
                  <span>Category</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mb-4">
                  <RadioGroup 
                    value={categoryFilter}
                    onValueChange={(value) => setCategoryFilter(value)}
                    className="space-y-2"
                  >
                    {categories.map((cat) => (
                      <div key={cat} className="flex items-center space-x-2">
                        <RadioGroupItem value={cat} id={`cat-${cat}`} />
                        <label htmlFor={`cat-${cat}`} className="capitalize text-sm">{cat}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </CollapsibleContent>
              </Collapsible>
              
              <Separator className="my-4" />
              
              <Collapsible defaultOpen className="mb-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full font-medium text-left mb-2">
                  <span>Material</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mb-4">
                  <RadioGroup 
                    value={materialFilter}
                    onValueChange={(value) => setMaterialFilter(value)}
                    className="space-y-2"
                  >
                    {materials.map((mat) => (
                      <div key={mat} className="flex items-center space-x-2">
                        <RadioGroupItem value={mat} id={`mat-${mat}`} />
                        <label htmlFor={`mat-${mat}`} className="text-sm">{mat}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </CollapsibleContent>
              </Collapsible>
              
              <Separator className="my-4" />
              
              <Collapsible defaultOpen className="mb-6">
                <CollapsibleTrigger className="flex items-center justify-between w-full font-medium text-left mb-2">
                  <span>Price Range</span>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mb-4">
                  <RadioGroup 
                    value={priceFilter}
                    onValueChange={(value) => setPriceFilter(value)}
                    className="space-y-2"
                  >
                    {prices.map((price) => (
                      <div key={price} className="flex items-center space-x-2">
                        <RadioGroupItem value={price} id={`price-${price}`} />
                        <label htmlFor={`price-${price}`} className="text-sm">{price}</label>
                      </div>
                    ))}
                  </RadioGroup>
                </CollapsibleContent>
              </Collapsible>
              
              <Button 
                onClick={clearFilters}
                variant="outline"
                className="w-full border-gray-200 hover:bg-gray-50 hover:text-maroon transition-colors"
              >
                Clear All Filters
              </Button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-500">{filteredProducts.length} products</p>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 hidden md:inline-block">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-md px-2 py-1 text-sm bg-white"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCardWithTracking key={product.id} {...product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-500 mb-4">No products match your selected filters.</p>
                <Button 
                  onClick={clearFilters}
                  variant="outline"
                  className="border-gray-200 hover:bg-maroon hover:text-white hover:border-maroon transition-colors"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
