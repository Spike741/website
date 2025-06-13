
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

interface RecentProduct {
  id: string;
  product_id: string;
  product_name: string;
  product_type: string;
  product_price: number;
  product_image_url: string;
  product_material: string;
  product_yard_size: string;
  viewed_at: string;
}

export const useRecentProducts = () => {
  const [recentProducts, setRecentProducts] = useState<RecentProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchRecentProducts = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('recent_products')
        .select('*')
        .eq('user_id', user.id)
        .order('viewed_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error fetching recent products:', error);
        return;
      }

      setRecentProducts(data || []);
    } catch (error) {
      console.error('Error fetching recent products:', error);
    } finally {
      setLoading(false);
    }
  };

  const addRecentProduct = async (product: {
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
      // Check if product already exists
      const { data: existing } = await supabase
        .from('recent_products')
        .select('id')
        .eq('user_id', user.id)
        .eq('product_id', product.id)
        .single();

      if (existing) {
        // Update the viewed_at timestamp
        await supabase
          .from('recent_products')
          .update({ viewed_at: new Date().toISOString() })
          .eq('id', existing.id);
      } else {
        // Insert new record
        await supabase
          .from('recent_products')
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
      }

      // Refresh the list
      fetchRecentProducts();
    } catch (error) {
      console.error('Error adding recent product:', error);
    }
  };

  useEffect(() => {
    fetchRecentProducts();
  }, [user]);

  return {
    recentProducts,
    loading,
    addRecentProduct,
    refreshRecentProducts: fetchRecentProducts
  };
};
