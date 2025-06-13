
import { QrCode, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface QRCodePaymentProps {
  amount: number;
  upiId: string;
  merchantName: string;
}

const QRCodePayment = ({ amount, upiId, merchantName }: QRCodePaymentProps) => {
  const generateUPIString = () => {
    return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(`Payment for order - Amount: ₹${amount}`)}`;
  };

  const handleCopyUPILink = () => {
    const upiString = generateUPIString();
    navigator.clipboard.writeText(upiString).then(() => {
      toast.success("UPI link copied to clipboard!");
    }).catch(() => {
      toast.error("Failed to copy UPI link");
    });
  };

  const handleCopyUPIId = () => {
    navigator.clipboard.writeText(upiId).then(() => {
      toast.success("UPI ID copied to clipboard!");
    }).catch(() => {
      toast.error("Failed to copy UPI ID");
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-3 sm:p-6 shadow-lg">
      <div className="text-center mb-4 sm:mb-6">
        <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full mb-2 sm:mb-3">
          <QrCode className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 sm:mb-2">Scan & Pay with UPI</h3>
        <p className="text-xs sm:text-sm text-gray-600">Use any UPI app to scan and pay instantly</p>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-8">
        {/* QR Code Section */}
        <div className="flex-shrink-0 text-center w-full lg:w-auto">
          <div className="relative">
            <img
              src="/lovable-uploads/9d9a6efc-8062-4e52-85b8-14a15608224c.png"
              alt="UPI QR Code - Scan to pay with any UPI app"
              className="w-32 h-32 sm:w-48 sm:h-48 border-4 border-white rounded-xl shadow-md bg-white p-2 sm:p-3 mx-auto"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 sm:mt-3 font-medium">Scan to pay with any UPI app</p>
        </div>
        
        {/* Payment Details Section */}
        <div className="flex-1 w-full lg:w-auto">
          <div className="bg-white rounded-lg p-3 sm:p-5 border border-gray-200 shadow-sm mb-3 sm:mb-4">
            <h4 className="font-semibold text-gray-800 mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Payment Details
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between py-1 sm:py-2 border-b border-gray-100">
                <span className="text-xs sm:text-sm text-gray-600">UPI ID:</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="font-mono text-xs sm:text-sm font-medium text-gray-800">{upiId}</span>
                  <Button
                    onClick={handleCopyUPIId}
                    variant="ghost"
                    size="sm"
                    className="h-5 w-5 sm:h-6 sm:w-6 p-0 hover:bg-gray-100"
                  >
                    <Copy className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-between py-1 sm:py-2 border-b border-gray-100">
                <span className="text-xs sm:text-sm text-gray-600">Phone:</span>
                <span className="text-xs sm:text-sm font-medium text-gray-800">9019580044</span>
              </div>
              <div className="flex justify-between py-1 sm:py-2 border-b border-gray-100">
                <span className="text-xs sm:text-sm text-gray-600">Merchant:</span>
                <span className="text-xs sm:text-sm font-medium text-gray-800">{merchantName}</span>
              </div>
              <div className="flex justify-between py-1 sm:py-2">
                <span className="text-xs sm:text-sm text-gray-600">Amount:</span>
                <span className="text-base sm:text-lg font-bold text-maroon">₹{amount.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
            <h5 className="font-medium text-gray-800 mb-2 text-xs sm:text-sm">Quick Payment Steps:</h5>
            <ol className="text-xs text-gray-700 space-y-1">
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 text-white rounded-full text-xs leading-3 sm:leading-4 text-center mr-2 mt-0.5 flex-shrink-0">1</span>
                <span className="text-xs">Open Google Pay, PhonePe, Paytm, or any UPI app</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 text-white rounded-full text-xs leading-3 sm:leading-4 text-center mr-2 mt-0.5 flex-shrink-0">2</span>
                <span className="text-xs">Tap 'Scan QR' and scan the code above</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 text-white rounded-full text-xs leading-3 sm:leading-4 text-center mr-2 mt-0.5 flex-shrink-0">3</span>
                <span className="text-xs">Verify amount and complete payment</span>
              </li>
            </ol>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-2">
            <Button
              onClick={handleCopyUPILink}
              variant="outline"
              className="w-full border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 text-xs sm:text-sm py-2"
            >
              <Copy className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Copy UPI Payment Link
            </Button>
          </div>
        </div>
      </div>
      
      {/* Security Note */}
      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <div className="flex items-start">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-amber-100 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
            <span className="text-amber-600 text-xs font-bold">!</span>
          </div>
          <div>
            <p className="text-xs font-medium mb-1 text-amber-800">Secure Payment Notice</p>
            <p className="text-xs text-amber-700">
              After payment completion, please save your transaction ID. We'll confirm your order within 15 minutes via email or phone (9019580044).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodePayment;
