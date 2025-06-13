
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface CartHistoryItem {
  id: string;
  product_id: string;
  product_name: string;
  product_type: string;
  product_price: number;
  product_image_url: string;
  product_material: string;
  product_yard_size: string;
  added_at: string;
}

export const useCartHistory = () => {
  const [cartHistory, setCartHistory] = useState<CartHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchCartHistory = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('cart_history')
        .select('*')
        .eq('user_id', user.id)
        .order('added_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Error fetching cart history:', error);
        return;
      }

      setCartHistory(data || []);
    } catch (error) {
      console.error('Error fetching cart history:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCartHistory = async (product: {
    id: string;
    name: string;
    type: string;
    price: number;
    imageUrl: string;
    material: string;
    yardSize: string;
  }) => {
    if (!user) return;

    try {
      await supabase
        .from('cart_history')
        .insert({
          user_id: user.id,
          product_id: product.id,
          product_name: product.name,
          product_type: product.type,
          product_price: product.price,
          product_image_url: product.imageUrl,
          product_material: product.material,
          product_yard_size: product.yardSize
        });

      // Refresh the list
      fetchCartHistory();
    } catch (error) {
      console.error('Error adding to cart history:', error);
    }
  };

  useEffect(() => {
    fetchCartHistory();
  }, [user]);

  return {
    cartHistory,
    loading,
    addToCartHistory,
    refreshCartHistory: fetchCartHistory
  };
};
