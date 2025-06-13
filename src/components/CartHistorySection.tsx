
import React from 'react';
import { useCartHistory } from '@/hooks/useCartHistory';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Separator } from '@/components/ui/separator';

const CartHistorySection = () => {
  const { cartHistory, loading, addToCartHistory } = useCartHistory();
  const { addItem } = useCart();

  if (loading) {
    return (
      <div className="py-8">
        <h2 className="font-serif text-2xl mb-4">Previously Added to Cart</h2>
        <div className="text-gray-500">Loading cart history...</div>
      </div>
    );
  }

  if (cartHistory.length === 0) {
    return (
      <div className="py-8">
        <h2 className="font-serif text-2xl mb-4">Previously Added to Cart</h2>
        <div className="text-gray-500">No items added to cart yet.</div>
      </div>
    );
  }

  const handleAddToCart = (item: any) => {
    const product = {
      id: item.product_id,
      name: item.product_name,
      type: item.product_type,
      price: item.product_price,
      imageUrl: item.product_image_url,
      material: item.product_material,
      yardSize: item.product_yard_size
    };
    
    // Add to cart
    addItem(product);
    
    // Track cart history again
    addToCartHistory(product);
  };

  return (
    <div className="py-8">
      <h2 className="font-serif text-2xl mb-4">Previously Added to Cart</h2>
      <Separator className="mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cartHistory.map((item) => (
          <div key={item.id}>
            <ProductCard
              name={item.product_name}
              type={item.product_type}
              price={item.product_price}
              imageUrl={item.product_image_url}
              material={item.product_material}
              yardSize={item.product_yard_size}
            />
            <Button
              className="mt-2 w-full bg-maroon hover:bg-maroon-light text-white"
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart Again
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartHistorySection;
