
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();

  const handleCheckout = () => {
    toast("Proceeding to checkout", {
      description: "Please fill in your delivery details."
    });
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-serif text-center mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto mb-4 text-gray-300" />
          <p className="text-gray-500 text-center text-lg mb-4">Your cart is empty</p>
          <Button 
            asChild 
            className="bg-maroon hover:bg-maroon-light"
          >
            <a href="/products">Browse Products</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-serif text-center mb-8">Shopping Cart</h1>
      
      <div className="bg-white rounded-lg shadow">
        <div className="overflow-hidden">
          {items.map((item) => (
            <div key={item.id} className="border-b p-6 flex flex-col sm:flex-row items-center gap-6">
              <div className="shrink-0 w-24 h-24 overflow-hidden rounded-md">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.type}</p>
                <p className="text-sm text-gray-500">{item.material} - {item.yardSize}</p>
                <p className="text-maroon font-medium">₹{item.price.toLocaleString()}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="h-8 w-8"
                >
                  -
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="h-8 w-8"
                >
                  +
                </Button>
              </div>
              
              <div className="text-right whitespace-nowrap">
                <p className="font-semibold">₹{(item.price * item.quantity).toLocaleString()}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 mt-1"
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center border-t">
          <div>
            <Button variant="outline" onClick={clearCart} className="mb-4 md:mb-0">
              Clear Cart
            </Button>
          </div>
          
          <div className="w-full md:w-auto md:text-right">
            <div className="mb-4 bg-ivory-dark p-4 rounded">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total:</span>
                <span className="text-maroon">₹{total.toLocaleString()}</span>
              </div>
            </div>
            <Button 
              onClick={handleCheckout} 
              className="w-full md:w-auto bg-maroon hover:bg-maroon-light"
              asChild
            >
              <Link to="/checkout">
                Proceed to Checkout
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
