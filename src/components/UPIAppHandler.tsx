
import { toast } from "sonner";

export const isMobileDevice = () => {
  // Enhanced mobile detection
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile/i;
  
  // Also check for touch capability
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  return mobileRegex.test(userAgent.toLowerCase()) || isTouchDevice;
};

export const openUPIApp = (amount: number) => {
  const upiId = "sonushintre.7@okaxis";
  const merchantName = "Handloom Elegance";
  const transactionNote = `Payment for order - Amount: ₹${amount}`;
  
  console.log("Attempting to open UPI apps...");
  console.log("Device is mobile:", isMobileDevice());
  
  // Enhanced UPI app configurations with better deep links
  const upiApps = [
    {
      name: "PhonePe",
      schemes: [
        `phonepe://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`,
        `phonepe://upi/pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR`,
        `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}&mc=0000&mode=02&purpose=00`
      ]
    },
    {
      name: "Google Pay",
      schemes: [
        `tez://upi/pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`,
        `gpay://upi/pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR`,
        `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}&mc=0000&mode=02&purpose=00`
      ]
    },
    {
      name: "Paytm",
      schemes: [
        `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`,
        `paytm://upi/pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR`
      ]
    },
    {
      name: "Amazon Pay",
      schemes: [
        `amazonpay://upi/pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`
      ]
    },
    {
      name: "BHIM",
      schemes: [
        `bhim://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`
      ]
    }
  ];

  let redirectAttempted = false;

  // Method 1: Try app-specific deep links with proper timing
  const tryAppRedirect = async () => {
    for (const app of upiApps) {
      for (const scheme of app.schemes) {
        try {
          console.log(`Trying ${app.name}:`, scheme);
          
          // Create a hidden link and try to open it
          const link = document.createElement('a');
          link.href = scheme;
          link.style.display = 'none';
          document.body.appendChild(link);
          
          // Click the link
          link.click();
          
          // Clean up
          setTimeout(() => {
            if (document.body.contains(link)) {
              document.body.removeChild(link);
            }
          }, 1000);
          
          redirectAttempted = true;
          
          // Wait a bit before trying next scheme
          await new Promise(resolve => setTimeout(resolve, 500));
          
        } catch (e) {
          console.log(`${app.name} scheme failed:`, e);
        }
      }
    }
  };

  // Method 2: Try window.location approach as fallback
  const tryWindowLocation = () => {
    const genericUPILink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}&mc=0000&mode=02&purpose=00`;
    
    try {
      console.log("Trying window.location:", genericUPILink);
      window.location.href = genericUPILink;
      redirectAttempted = true;
    } catch (e) {
      console.log("Window.location method failed:", e);
    }
  };

  // Execute the redirect attempts
  if (isMobileDevice()) {
    // First try app-specific redirects
    tryAppRedirect().then(() => {
      // If app-specific redirects didn't work, try generic UPI
      if (!redirectAttempted) {
        setTimeout(() => {
          tryWindowLocation();
        }, 1000);
      }
    });
  } else {
    // For desktop, just try the generic UPI link
    tryWindowLocation();
  }

  return redirectAttempted;
};

export const handleUPIAppRedirect = (total: number) => {
  console.log("UPI App redirect triggered for amount:", total);
  console.log("Is mobile device:", isMobileDevice());
  
  if (isMobileDevice()) {
    toast.success("Opening UPI app...", {
      description: "Redirecting to your UPI app for payment",
      duration: 2000,
    });
    
    const opened = openUPIApp(total);
    
    // Show fallback message after 3 seconds if app doesn't open
    setTimeout(() => {
      toast.info("Having trouble opening UPI app?", {
        description: "Please manually pay to UPI ID: sonushintre.7@okaxis or call 9019580044",
        duration: 8000,
      });
    }, 3000);
    
    // Additional help message for better user experience
    setTimeout(() => {
      toast.info("Payment Instructions", {
        description: `Open any UPI app manually and pay ₹${total} to sonushintre.7@okaxis. Share payment screenshot via WhatsApp: 9019580044`,
        duration: 10000,
      });
    }, 8000);
    
  } else {
    toast.info("Mobile Payment Recommended", {
      description: "For best UPI experience, please use your mobile device. UPI ID: sonushintre.7@okaxis, Phone: 9019580044",
      duration: 8000,
    });
  }
};
