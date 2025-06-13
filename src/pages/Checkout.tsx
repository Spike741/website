
import CheckoutForm from "@/components/CheckoutForm";
import { useCart } from "@/contexts/CartContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const { items } = useCart();
  
  // If cart is empty, redirect to the cart page
  if (items.length === 0) {
    return <Navigate to="/cart" />;
  }
  
  return (
    <div className="bg-ivory min-h-screen">
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
