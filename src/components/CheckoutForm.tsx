
import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { handleUPIAppRedirect } from "./UPIAppHandler";
import OrderSummary from "./OrderSummary";
import CustomerInfoForm from "./CustomerInfoForm";
import PaymentMethodSelection from "./PaymentMethodSelection";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  address: z.string().min(5, { message: "Address must be at least 5 characters" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  state: z.string().min(2, { message: "State must be at least 2 characters" }),
  pincode: z.string().min(6, { message: "Pin code must be at least 6 characters" }),
  additionalInfo: z.string().optional(),
  paymentMethod: z.enum(["upi-app", "upi-qr", "cod"], {
    required_error: "Please select a payment method",
  }),
});

const CheckoutForm = () => {
  const { total, clearCart } = useCart();
  const navigate = useNavigate();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      additionalInfo: "",
      paymentMethod: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    if (values.paymentMethod === "upi-app") {
      handleUPIAppRedirect(total);
      
      toast.success("Order placed successfully!", {
        description: "Please complete the UPI payment. We'll confirm your order once payment is received.",
      });
    } else if (values.paymentMethod === "upi-qr") {
      toast.success("Order placed successfully!", {
        description: "Please scan the QR code and complete the payment. We'll confirm your order once payment is received.",
      });
    } else {
      // For COD
      toast.success("Order placed successfully!", {
        description: "Thank you for your order! Payment method: Cash on Delivery. We'll contact you soon with delivery details.",
      });
    }
    
    clearCart();
    navigate("/");
  }

  const selectedPaymentMethod = form.watch("paymentMethod");

  return (
    <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-serif text-center mb-6 sm:mb-8">Checkout</h1>
      <div className="bg-white rounded-lg shadow p-4 sm:p-6 max-w-4xl mx-auto">
        <OrderSummary total={total} />
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            <CustomerInfoForm control={form.control} />
            
            <PaymentMethodSelection 
              control={form.control}
              watch={form.watch}
              setValue={form.setValue}
              total={total}
            />
            
            <Button type="submit" className="w-full bg-maroon hover:bg-maroon-light text-sm sm:text-base py-2 sm:py-3">
              {selectedPaymentMethod === "upi-app" ? "Place Order & Pay via UPI App" : 
               selectedPaymentMethod === "upi-qr" ? "Place Order & Scan QR Code" : 
               "Place Order"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutForm;
