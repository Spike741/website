
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useRecentProducts } from '@/hooks/useRecentProducts';
import { useCartHistory } from '@/hooks/useCartHistory';

interface ProductCardWithTrackingProps {
  id: string;
  name: string;
  type: string;
  price: number;
  imageUrl: string;
  material: string;
  yardSize: string;
}

const ProductCardWithTracking = (props: ProductCardWithTrackingProps) => {
  const { addItem } = useCart();
  const { addRecentProduct } = useRecentProducts();
  const { addToCartHistory } = useCartHistory();

  React.useEffect(() => {
    // Track product view
    addRecentProduct(props);
  }, [props.id]);

  const handleAddToCart = () => {
    // Add to cart
    addItem(props);
    
    // Track cart history
    addToCartHistory(props);
  };

  return (
    <div>
      <ProductCard {...props} />
      <Button
        className="mt-2 w-full bg-maroon hover:bg-maroon-light text-white"
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCardWithTracking;
