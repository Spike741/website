
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  material: string;
  yardSize: string;
}

interface FeaturedProductsProps {
  title: string;
  products: Product[];
}

// Featured products with variety across categories - All Saree Images
const featuredProducts: Product[] = [
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
    id: "7",
    name: "Pure Cotton Khadi Saree",
    type: "Cotton",
    price: 1500,
    imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a9ba2fe65f?q=80&w=1587&auto=format&fit=crop",
    material: "Pure Cotton",
    yardSize: "6 yards"
  },
  {
    id: "13",
    name: "Handwoven Chanderi Saree",
    type: "Handloom",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1587&auto=format&fit=crop",
    material: "Chanderi Cotton Silk",
    yardSize: "6 yards"
  },
  {
    id: "2",
    name: "Kanjivaram Wedding Silk Saree",
    type: "Silk",
    price: 8500,
    imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=1587&auto=format&fit=crop",
    material: "Kanjivaram Silk",
    yardSize: "6.5 yards"
  }
];

const FeaturedProducts = ({ title, products = featuredProducts }: FeaturedProductsProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (product: Product) => {
    addItem(product);
  };

  return (
    <div className="py-12 bg-ivory-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-medium">{title}</h2>
          <Link to="/products" className="text-maroon hover:text-maroon-light text-sm font-medium">
            VIEW ALL
          </Link>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id}>
              <Link to="/products">
                <ProductCard {...product} />
              </Link>
              <Button
                className="mt-2 w-full bg-maroon hover:bg-maroon-light text-white"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
