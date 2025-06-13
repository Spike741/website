
import React from 'react';
import { Control } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CustomerInfoFormProps {
  control: Control<any>;
}

const CustomerInfoForm = ({ control }: CustomerInfoFormProps) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <FormField
          control={control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" className="text-sm sm:text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" className="text-sm sm:text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base">Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter your phone number" className="text-sm sm:text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="pincode"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base">PIN Code</FormLabel>
              <FormControl>
                <Input placeholder="Enter your PIN code" className="text-sm sm:text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm sm:text-base">Address</FormLabel>
            <FormControl>
              <Textarea placeholder="Enter your complete address" className="text-sm sm:text-base min-h-[80px]" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base">City</FormLabel>
              <FormControl>
                <Input placeholder="Enter your city" className="text-sm sm:text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm sm:text-base">State</FormLabel>
              <FormControl>
                <Input placeholder="Enter your state" className="text-sm sm:text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={control}
        name="additionalInfo"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm sm:text-base">Additional Information (Optional)</FormLabel>
            <FormControl>
              <Textarea placeholder="Any special instructions or information" className="text-sm sm:text-base min-h-[60px]" {...field} />
            </FormControl>
            <FormDescription className="text-xs sm:text-sm">
              Delivery instructions, landmarks, or any other details that might help.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default CustomerInfoForm;
