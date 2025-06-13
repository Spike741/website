
import React from 'react';
import { Control, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { toast } from "sonner";
import QRCodePayment from "./QRCodePayment";
import { isMobileDevice, handleUPIAppRedirect } from "./UPIAppHandler";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { 
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Banknote, Smartphone, QrCode } from "lucide-react";

interface PaymentMethodSelectionProps {
  control: Control<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
  total: number;
}

const PaymentMethodSelection = ({ control, watch, setValue, total }: PaymentMethodSelectionProps) => {
  const selectedPaymentMethod = watch("paymentMethod");

  // Handle payment method change
  const handlePaymentMethodChange = (value: string) => {
    setValue("paymentMethod", value as "upi-app" | "upi-qr" | "cod");
    
    // If UPI app is selected and it's a mobile device, show immediate option
    if (value === "upi-app" && isMobileDevice()) {
      toast.info("Ready to pay via UPI!", {
        description: "Tap 'Open UPI App Now' button below to proceed",
        duration: 3000,
      });
    }
  };

  return (
    <>
      <FormField
        control={control}
        name="paymentMethod"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel className="text-sm sm:text-base">Payment Method</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={handlePaymentMethodChange}
                defaultValue={field.value}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-3 border rounded-md p-3 sm:p-4 cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="upi-app" id="upi-app" />
                  <label htmlFor="upi-app" className="flex items-center gap-2 sm:gap-3 cursor-pointer font-medium text-gray-900 w-full">
                    <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-maroon flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-base">UPI App Payment</span>
                      <span className="text-xs text-gray-500">Direct redirect to your UPI app (Mobile recommended)</span>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center space-x-3 border rounded-md p-3 sm:p-4 cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="upi-qr" id="upi-qr" />
                  <label htmlFor="upi-qr" className="flex items-center gap-2 sm:gap-3 cursor-pointer font-medium text-gray-900 w-full">
                    <QrCode className="h-4 w-4 sm:h-5 sm:w-5 text-maroon flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-base">UPI QR Code</span>
                      <span className="text-xs text-gray-500">Scan QR code with any UPI app</span>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center space-x-3 border rounded-md p-3 sm:p-4 cursor-pointer hover:bg-gray-50">
                  <RadioGroupItem value="cod" id="cod" />
                  <label htmlFor="cod" className="flex items-center gap-2 sm:gap-3 cursor-pointer font-medium text-gray-900 w-full">
                    <Banknote className="h-4 w-4 sm:h-5 sm:w-5 text-maroon flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-sm sm:text-base">Cash on Delivery</span>
                      <span className="text-xs text-gray-500">Pay when you receive your order</span>
                    </div>
                  </label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {/* Display UPI QR Code when QR payment is selected */}
      {selectedPaymentMethod === "upi-qr" && (
        <QRCodePayment
          amount={total}
          upiId="sonushintre.7@okaxis"
          merchantName="Handloom Elegance"
        />
      )}
      
      {/* Display UPI ID information when app payment is selected */}
      {selectedPaymentMethod === "upi-app" && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3 sm:p-4">
          <h3 className="font-medium text-blue-800 mb-2 text-sm sm:text-base">UPI App Payment</h3>
          {isMobileDevice() ? (
            <div>
              <p className="text-xs sm:text-sm text-blue-700 mb-2">Tap "Open UPI App Now" to open your UPI app automatically!</p>
              <div className="mt-2 bg-white p-2 sm:p-3 rounded-md border border-blue-200">
                <p className="text-xs sm:text-sm text-gray-600">UPI ID: <span className="font-mono font-medium text-gray-800 text-xs sm:text-sm">sonushintre.7@okaxis</span></p>
                <p className="text-xs text-gray-500 mt-1">Phone: 9019580044</p>
                <p className="text-xs text-gray-500 mt-1">Amount: ₹{total.toLocaleString()}</p>
              </div>
              <Button
                type="button"
                onClick={() => handleUPIAppRedirect(total)}
                className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base py-2 sm:py-3"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Open UPI App Now
              </Button>
            </div>
          ) : (
            <div>
              <p className="text-xs sm:text-sm text-blue-700">Manual payment details:</p>
              <div className="mt-2 bg-white p-2 sm:p-3 rounded-md border border-blue-200">
                <p className="font-mono font-medium text-gray-800 text-xs sm:text-sm">sonushintre.7@okaxis</p>
                <p className="text-xs text-gray-500 mt-1">Phone: 9019580044</p>
                <p className="text-xs text-gray-500 mt-1">Amount: ₹{total.toLocaleString()}</p>
                <p className="text-xs text-gray-500">After payment, we'll confirm your order via email or phone</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PaymentMethodSelection;
