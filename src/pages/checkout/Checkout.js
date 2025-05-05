import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaLock, FaShippingFast, FaCreditCard, FaArrowLeft, FaShieldAlt, FaMedal } from 'react-icons/fa';
import SEO from '../../components/SEO';

// Add backend API URL - Fixed to properly use environment variables or fallback
const API_URL = process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' ? '' : 'https://razorpaybackend-wgbh.onrender.com'); //https://razorpaybackend-wgbh.onrender.com

const Checkout = () => {
  const { cart, cartTotal, formatPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Get user data from location state or localStorage
  const getUserData = () => {
    if (location.state && location.state.formData) {
      return location.state.formData;
    }
    
    // Try to get from localStorage as fallback
    const pendingCheckout = localStorage.getItem('pendingCheckout');
    if (pendingCheckout) {
      try {
        const { formData } = JSON.parse(pendingCheckout);
        return formData || {};
      } catch (error) {
        console.error('Error parsing saved checkout data', error);
      }
    }
    
    return {};
  };
  
  const [formData, setFormData] = useState(getUserData);
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [selectedPaymentSubType, setSelectedPaymentSubType] = useState('all'); // For UPI and EMI subtype selection
  const [upiId, setUpiId] = useState(''); // For UPI ID input
  const [selectedEmiOption, setSelectedEmiOption] = useState(null); // For EMI plan selection
  const [showQrCode, setShowQrCode] = useState(false); // For showing/hiding QR code
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Credit card form data
  const [cardData, setCardData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  
  // Razorpay integration states
  const [razorpayOrder, setRazorpayOrder] = useState(null);
  const [razorpayKeyId, setRazorpayKeyId] = useState('');
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [orderReference, setOrderReference] = useState('');
  const [paymentId, setPaymentId] = useState('');

  // Redirect if no shipping information
  useEffect(() => {
    if (cart.length === 0 && !orderComplete) {
      navigate('/');
      return;
    }
    
    // If we don't have user data, redirect to auth/shipping page
    if (!formData || Object.keys(formData).length === 0 || !formData.email) {
      navigate('/shipping');
    }
  }, [cart, navigate, orderComplete, formData]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleCardDataChange = (e) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validatePaymentForm = () => {
    const newErrors = {};
    
    if (paymentMethod === 'card') {
      if (!cardData.cardName.trim()) newErrors.cardName = 'Name on card is required';
      if (!cardData.cardNumber.trim()) {
        newErrors.cardNumber = 'Card number is required';
      } else if (!/^\d{16}$/.test(cardData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Invalid card number';
      }
      if (!cardData.expiryDate.trim()) {
        newErrors.expiryDate = 'Expiry date is required';
      } else if (!/^\d{2}\/\d{2}$/.test(cardData.expiryDate)) {
        newErrors.expiryDate = 'Use format MM/YY';
      }
      if (!cardData.cvv.trim()) {
        newErrors.cvv = 'CVV is required';
      } else if (!/^\d{3,4}$/.test(cardData.cvv)) {
        newErrors.cvv = 'Invalid CVV';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Create Razorpay order
  const createRazorpayOrder = async () => {
    try {
      setPaymentProcessing(true);
      
      const orderData = {
        amount: orderTotal,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
        notes: {
          customerName: `${formData.firstName} ${formData.lastName}`,
          customerEmail: formData.email,
          customerPhone: formData.phone,
        }
      };
      
      const response = await fetch(`${API_URL}/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setRazorpayOrder(data.order);
        setRazorpayKeyId(data.key);
        return data;
      } else {
        throw new Error(data.message || 'Failed to create order');
      }
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order. Please try again.');
      setPaymentProcessing(false);
      return null;
    }
  };

  // Display Razorpay payment form
  const displayRazorpayPayment = async (orderData) => {
    const res = await loadRazorpayScript();
    
    if (!res) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      setPaymentProcessing(false);
      return;
    }
    
    const options = {
      key: orderData.key,
      amount: orderData.order.amount,
      currency: orderData.order.currency,
      name: 'IandI',
      description: 'Thank you for your purchase!',
      order_id: orderData.order.id,
      handler: async function (response) {
        // Handle payment success directly here instead of calling another function
        try {
          setIsSubmitting(true);
          console.log("Razorpay payment successful, verifying payment...");
          
          // Verify payment with backend
          const verifyPayment = await fetch(`${API_URL}/verify-payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });
          
          const paymentVerification = await verifyPayment.json();
          
          if (paymentVerification.success) {
            console.log("Payment verification successful, preparing for navigation...");
            
            // Generate a unique order reference/number
            const orderRef = `GG-${Math.floor(100000 + Math.random() * 900000)}`;
            
            // Set order success flag to prevent abandoned cart email
            sessionStorage.setItem('orderSuccessful', 'true');
            
            // Set order complete state
            setOrderComplete(true);
            
            // Send order confirmation email
            await sendOrderConfirmationEmail(orderRef, response.razorpay_payment_id);
            
            // Create Shiprocket order
            await createShiprocketOrder(orderRef, response.razorpay_payment_id);
            
            // Clear cart and pending checkout data
            clearCart();
            localStorage.removeItem('pendingCheckout');
            
            // Create order data object for ThankYou page
            const orderData = {
              orderReference: orderRef,
              paymentId: response.razorpay_payment_id,
              formData,
              paymentMethod,
              cartItems: [...cart],
              cartTotal,
              orderTotal,
              shippingCost
            };
            
            // Store in localStorage as fallback
            localStorage.setItem('lastCompletedOrder', JSON.stringify(orderData));
            console.log("Order data saved to localStorage, redirecting...");
            
            // Use direct URL navigation with query parameter as the most reliable method
            // This will work even if React Router state is lost in the process
            window.location.href = `/thank-you?ref=${orderRef}`;
          } else {
            alert('Payment verification failed. Please contact support.');
            setIsSubmitting(false);
          }
        } catch (error) {
          console.error('Payment verification error:', error);
          alert('Payment verification failed. Please contact support.');
          setIsSubmitting(false);
        }
      },
      prefill: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        contact: formData.phone,
      },
      notes: {
        address: formData.address
      },
      theme: {
        color: '#4CAF50'
      },
      // Add modal closing callback to handle edge cases
      modal: {
        ondismiss: function() {
          console.log('Razorpay modal closed');
          setPaymentProcessing(false);
          setIsSubmitting(false);
        }
      }
    };
    
    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        console.error('Payment failed:', response.error);
        alert(`Payment failed: ${response.error.description}`);
        setPaymentProcessing(false);
        setIsSubmitting(false);
      });
      paymentObject.open();
    } catch (error) {
      console.error('Error opening Razorpay:', error);
      alert('Failed to open payment gateway. Please try again.');
      setPaymentProcessing(false);
      setIsSubmitting(false);
    }
  };

  // Send order confirmation email - with improved error handling
  const sendOrderConfirmationEmail = async (orderNumber, paymentId) => {
    try {
      // Format cart items into a proper products array structure for the email API
      const products = cart.map(item => ({
        name: item.title,
        quantity: item.quantity,
        price: (typeof item.price === 'number') ? item.price.toFixed(2) : item.price,
        image: item.image
      }));
      
      const orderDetails = {
        orderNumber,
        products, // Send structured products array instead of just names
        totalAmount: orderTotal,
        currency: '₹',
        paymentMethod: paymentMethod === 'razorpay' ? 'Razorpay' : (paymentMethod === 'card' ? 'Credit Card' : 'Cash on Delivery'),
        paymentId: paymentId || 'COD'
      };
      
      const customerDetails = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zip: formData.pincode
      };
      
      // Log the API URL being used (for debugging)
      console.log(`Attempting to send order confirmation email to API: ${API_URL}`);
      
      // Use Promise.race with a timeout instead of AbortController
      const emailPromise = fetch(`${API_URL}/send-order-confirmation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerEmail: formData.email,
          orderDetails,
          customerDetails
        })
      });
      
      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 15000)
      );
      
      // Race the email request against the timeout
      const response = await Promise.race([emailPromise, timeoutPromise]);
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Email confirmation response:", data);
      
      return data;
    } catch (error) {
      console.error('Error sending confirmation email:', error.message || error);
      
      // Store the order data locally as a fallback
      try {
        const emailData = {
          customerEmail: formData.email,
          orderDetails: {
            orderNumber,
            productNames: cart.map(item => item.title).join(', '),
            quantity: cart.reduce((total, item) => total + item.quantity, 0),
            totalAmount: orderTotal,
            paymentMethod,
            paymentId
          },
          customerDetails: { ...formData },
          timestamp: new Date().toISOString()
        };
        
        // Save to localStorage as a fallback
        const pendingEmails = JSON.parse(localStorage.getItem('pendingOrderEmails') || '[]');
        pendingEmails.push(emailData);
        localStorage.setItem('pendingOrderEmails', JSON.stringify(pendingEmails));
        
        console.log('Order details saved locally for retry later');
      } catch (storageError) {
        console.error('Failed to save order details locally:', storageError);
      }
      
      // Don't block the order completion flow because of email issues
      return { success: false, error: error.message };
    }
  };

  // Add a utility function to check API connection - with fixed error handling
  const checkApiConnection = async () => {
    try {
      // Try a simple fetch without AbortController first
      const response = await fetch(`${API_URL}/server-metrics`);
      return response.ok;
    } catch (error) {
      console.warn('API connection check failed:', error.message);
      // Return false but don't throw - allows checkout to proceed with fallbacks
      return false;
    }
  };

  // Check API connection when component mounts - with silent failure
  useEffect(() => {
    // Don't await here, let it run in background
    checkApiConnection().then(isConnected => {
      if (!isConnected) {
        console.warn('Warning: Backend API seems to be unreachable. Some features may not work correctly.');
      }
    }).catch(() => {
      // Silent catch to prevent unhandled promise rejections
    });
  }, []);

  // Track potential abandoned cart when user leaves
  useEffect(() => {
    // Create a flag to track successful order completion
    const orderSuccessFlag = sessionStorage.getItem('orderSuccessful');
    
    // Save cart data to localStorage for potential abandoned cart recovery
    // Only if we don't have a successful order
    if (cart.length > 0 && !orderSuccessFlag) {
      localStorage.setItem('pendingCheckout', JSON.stringify({
        cart,
        formData,
        timestamp: new Date().toISOString()
      }));
    }

    // Clean up function to handle potential abandoned cart
    return () => {
      // We no longer need to send abandoned cart emails from Checkout.js
      // since we already handle this in Auth.js when user leaves the shipping step
      // This avoids duplicate abandoned cart emails
      
      // Just clean up pending checkout data if order was completed
      if (orderComplete || sessionStorage.getItem('orderSuccessful')) {
        localStorage.removeItem('pendingCheckout');
      }
    };
  }, [formData, cart, orderComplete]);

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    
    if (validatePaymentForm()) {
      setIsSubmitting(true);
      
      try {
        // First check Shiprocket authentication
        console.log("Verifying Shiprocket authentication...");
        const shiprocketResponse = await fetch(`${API_URL}/shiprocket/test-auth`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        const shiprocketData = await shiprocketResponse.json();
        
        if (!shiprocketData.success) {
          console.warn("Shiprocket authentication failed:", shiprocketData.message);
          // Continue with the order but log the warning
          
          // Store failure information in localStorage
          localStorage.setItem('shiprocketToken', JSON.stringify({
            error: shiprocketData.message,
            timestamp: new Date().toISOString(),
            authStatus: 'failed'
          }));
        } else {
          console.log("Shiprocket authentication successful, token expires:", shiprocketData.tokenExpiresAt);
          
          // Save token details including the actual token in localStorage
          localStorage.setItem('shiprocketToken', JSON.stringify({
            token: shiprocketData.token, // Save the actual token
            tokenExpiry: shiprocketData.tokenExpiresAt,
            timestamp: new Date().toISOString(),
            authStatus: 'success'
          }));
        }
      } catch (error) {
        // Log error but don't block payment process
        console.error("Error checking Shiprocket authentication:", error);
        
        // Store error information in localStorage
        localStorage.setItem('shiprocketToken', JSON.stringify({
          error: error.message,
          timestamp: new Date().toISOString(),
          authStatus: 'failed'
        }));
      }
      
      // Simple API check without AbortController
      let isApiConnected = false;
      try {
        const response = await fetch(`${API_URL}/server-metrics`);
        isApiConnected = response.ok;
      } catch (error) {
        console.warn('API check in order submission failed:', error.message);
        // Continue with fallback behavior
      }
      
      // Check for API connectivity for payment methods that need it
      if ((paymentMethod === 'razorpay' || paymentMethod === 'upi' || paymentMethod === 'emi') && !isApiConnected) {
        alert('Cannot connect to payment server. Please try another payment method or try again later.');
        setIsSubmitting(false);
        return;
      }
      
      // Check for EMI method without bank or plan selection
      if (paymentMethod === 'emi' && (!selectedPaymentSubType || selectedPaymentSubType === 'all' || !selectedEmiOption)) {
        alert('Please select your bank and EMI plan');
        setIsSubmitting(false);
        return;
      }
      
      if (paymentMethod === 'razorpay') {
        // Create Razorpay order and display payment form
        const orderData = await createRazorpayOrder();
        if (orderData) {
          await displayRazorpayPayment(orderData);
        } else {
          setIsSubmitting(false);
        }
      }
      else if (paymentMethod === 'upi') {
        // Create Razorpay order and display UPI payment form
        const orderData = await createRazorpayOrder();
        if (orderData) {
          // Import the displayRazorpayPayment function from payment.js
          try {
            const { displayRazorpayPayment } = await import('./payment');
            // Call it with UPI specific parameters
            await displayRazorpayPayment(
              orderData,
              {...formData, upiId}, // Pass UPI ID if user entered it
              cart,
              cartTotal,
              orderTotal,
              shippingCost,
              'upi',
              setIsSubmitting,
              setOrderComplete,
              setPaymentProcessing,
              clearCart,
              sendOrderConfirmationEmail,
              'upi'
            );
          } catch (error) {
            console.error('Error loading Razorpay UPI:', error);
            alert('Failed to initialize UPI payment. Please try again.');
            setIsSubmitting(false);
          }
        } else {
          setIsSubmitting(false);
        }
      }
      else if (paymentMethod === 'emi') {
        // Create Razorpay order and display EMI payment form
        const orderData = await createRazorpayOrder();
        if (orderData) {
          // Import the displayRazorpayPayment function from payment.js
          try {
            const { displayRazorpayPayment } = await import('./payment');
            // Call it with EMI specific parameters
            await displayRazorpayPayment(
              orderData,
              formData,
              cart,
              cartTotal,
              orderTotal,
              shippingCost,
              'emi',
              setIsSubmitting,
              setOrderComplete,
              setPaymentProcessing,
              clearCart,
              sendOrderConfirmationEmail,
              'emi'
            );
          } catch (error) {
            console.error('Error loading Razorpay EMI:', error);
            alert('Failed to initialize EMI payment. Please try again.');
            setIsSubmitting(false);
          }
        } else {
          setIsSubmitting(false);
        }
      } 
      else if (paymentMethod === 'card') {
        // Process card payment (simulated)
        setTimeout(async () => {
          // Generate a unique order reference/number
          const orderRef = `GG-${Math.floor(100000 + Math.random() * 900000)}`;
          setOrderReference(orderRef);
          
          // Set order success flag to prevent abandoned cart email
          sessionStorage.setItem('orderSuccessful', 'true');
          
          // Set order complete state
          setOrderComplete(true);
          
          // Send order confirmation email
          await sendOrderConfirmationEmail(orderRef, 'CARD-PAYMENT');
          
          // Create Shiprocket order
          await createShiprocketOrder(orderRef, 'CARD-PAYMENT');
          
          // Navigate to thank you page with all required data
          navigate('/thank-you', {
            state: {
              orderReference: orderRef,
              paymentId: 'CARD-PAYMENT',
              formData,
              paymentMethod,
              cartItems: [...cart],
              cartTotal,
              orderTotal,
              shippingCost
            }
          });
          
          setIsSubmitting(false);
          clearCart();
          localStorage.removeItem('pendingCheckout');
        }, 2000);
      }
      else if (paymentMethod === 'cod') {
        // Process cash on delivery
        setTimeout(async () => {
          // Generate a unique order reference/number
          const orderRef = `GG-${Math.floor(100000 + Math.random() * 900000)}`;
          setOrderReference(orderRef);
          
          // Set order success flag to prevent abandoned cart email
          sessionStorage.setItem('orderSuccessful', 'true');
          
          // Set order complete state
          setOrderComplete(true);
          
          // Send order confirmation email
          await sendOrderConfirmationEmail(orderRef, 'COD');
          
          // Create Shiprocket order
          await createShiprocketOrder(orderRef, 'COD');
          
          // Navigate to thank you page with all required data
          navigate('/thank-you', {
            state: {
              orderReference: orderRef,
              paymentId: 'COD',
              formData,
              paymentMethod,
              cartItems: [...cart],
              cartTotal,
              orderTotal,
              shippingCost
            }
          });
          
          setIsSubmitting(false);
          clearCart();
          localStorage.removeItem('pendingCheckout');
        }, 1500);
      }
    }
  };

  // Create Shiprocket Order
  const createShiprocketOrder = async (orderRef, paymentId) => {
    try {
      console.log("Creating Shiprocket order...");
      
      // Get Shiprocket token from localStorage
      const shiprocketData = localStorage.getItem('shiprocketToken');
      if (!shiprocketData) {
        console.error("Shiprocket token not found");
        return false;
      }
      
      const { token, authStatus } = JSON.parse(shiprocketData);
      if (authStatus !== 'success' || !token) {
        console.error("Invalid Shiprocket token");
        return false;
      }
      
      // Format the cart items for Shiprocket
      const orderItems = cart.map(item => ({
        name: item.title,
        sku: `SKU-${item.id}`,
        units: item.quantity,
        selling_price: typeof item.price === 'number' ? item.price : parseFloat(item.price.replace(/[^\d.]/g, '')),
        discount: 0,
        tax: 0,
        hsn: 441122
      }));
      
      // Format the date in yyyy-mm-dd format
      const today = new Date();
      const orderDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
      
      // Create the order payload for Shiprocket
      const orderData = {
        order_id: orderRef,
        order_date: orderDate,
        pickup_location: "Primary",
        channel_id: "",
        comment: `Payment via ${paymentMethod}`,
        billing_customer_name: `${formData.firstName} ${formData.lastName}`,
        billing_last_name: formData.lastName,
        billing_address: formData.address,
        billing_address_2: "",
        billing_city: formData.city,
        billing_pincode: formData.pincode,
        billing_state: formData.state,
        billing_country: "India",
        billing_email: formData.email,
        billing_phone: formData.phone,
        shipping_is_billing: true,
        shipping_customer_name: `${formData.firstName} ${formData.lastName}`,
        shipping_last_name: formData.lastName,
        shipping_address: formData.address,
        shipping_address_2: "",
        shipping_city: formData.city,
        shipping_pincode: formData.pincode,
        shipping_state: formData.state,
        shipping_country: "India",
        shipping_email: formData.email,
        shipping_phone: formData.phone,
        order_items: orderItems,
        payment_method: paymentMethod === 'cod' ? 'COD' : 'Prepaid',
        shipping_charges: shippingCost,
        giftwrap_charges: 0,
        transaction_charges: 0,
        total_discount: 0,
        sub_total: orderTotal,
        length: 10,
        breadth: 10,
        height: 10,
        weight: 0.5
      };
      
      // Call the Shiprocket API to create the order
      const response = await fetch(`${API_URL}/shiprocket/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        console.log("Shiprocket order created successfully:", data);
        return true;
      } else {
        console.error("Failed to create Shiprocket order:", data.message || data.error);
        return false;
      }
    } catch (error) {
      console.error("Error creating Shiprocket order:", error);
      return false;
    }
  };

  // Calculate shipping cost and total
  const shippingCost = cartTotal > 3000 ? 0 : 99;
  
  // Update order total
  const orderTotal = cartTotal + shippingCost;
  
  // Calculate estimated delivery date (5-7 days from now)
  const getDeliveryDateRange = () => {
    const start = new Date();
    start.setDate(start.getDate() + 5);
    const end = new Date();
    end.setDate(end.getDate() + 7);
    
    const formatDate = (date) => {
      return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    };
    
    return `${formatDate(start)} - ${formatDate(end)}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Secure Checkout - IandI"
        description="Complete your purchase securely on IandI. Your personal and payment information is protected with our secure checkout process."
        noindex={true}
      />
      
      {/* Checkout Header & Progress */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/shipping')} 
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <FaArrowLeft className="mr-2" />
              <span>Back to Shipping</span>
            </button>
            <h1 className="text-xl font-bold text-center">Payment</h1>
            <div></div> {/* Empty div for flex alignment */}
          </div>
        </div>
      </div>
      
      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-green-600">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                <FaShoppingCart />
              </div>
              <span className="text-xs mt-1">Cart</span>
            </div>
            <div className="flex-1 h-1 mx-2 bg-green-400"></div>
            <div className="flex flex-col items-center text-green-600">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                <FaShippingFast />
              </div>
              <span className="text-xs mt-1">Shipping</span>
            </div>
            <div className="flex-1 h-1 mx-2 bg-green-400"></div>
            <div className="flex flex-col items-center text-green-600">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                <FaCreditCard />
              </div>
              <span className="text-xs mt-1">Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {/* Trust Badges - Top */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-full mr-3">
                <FaShieldAlt className="text-green-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Secure Checkout</h3>
                <p className="text-xs text-gray-500">256-bit SSL Encryption</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-full mr-3">
                <FaMedal className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Satisfaction Guaranteed</h3>
                <p className="text-xs text-gray-500">30-Day Money Back</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-full mr-3">
                <FaShippingFast className="text-purple-600 text-xl" />
              </div>
              <div>
                <h3 className="font-medium text-sm">Free Shipping</h3>
                <p className="text-xs text-gray-500">On orders over ₹3,000</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Payment Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div className="flex flex-col space-y-4">
                  
                  {/* Add Razorpay payment option */}
                  <label className="flex items-center p-4 border border-green-200 bg-green-50 rounded-md cursor-pointer hover:bg-green-100">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="razorpay" 
                      checked={paymentMethod === 'razorpay'} 
                      onChange={() => {
                        setPaymentMethod('razorpay');
                        setSelectedPaymentSubType('all');
                      }}
                      className="h-4 w-4 text-green-600"
                    />
                    <span className="ml-2 flex items-center">
                      <img src="https://razorpay.com/favicon.png" alt="Razorpay" className="w-4 h-4 mr-2" />
                      Pay with Razorpay (Cards, NetBanking, Wallets)
                      <span className="ml-2 px-2 py-1 text-xs bg-green-600 text-white rounded-full">Recommended</span>
                    </span>
                  </label>

                  {/* UPI Payment Option */}
                  <label className="flex items-center p-4 border border-blue-200 bg-blue-50 rounded-md cursor-pointer hover:bg-blue-100">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="upi" 
                      checked={paymentMethod === 'upi'} 
                      onChange={() => setPaymentMethod('upi')}
                      className="h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 flex items-center">
                      <img src="https://razorpay.com/favicon.png" alt="UPI" className="w-4 h-4 mr-2" />
                      Pay via UPI (Google Pay, PhonePe, BHIM, Paytm)
                    </span>
                  </label>

                  {/* EMI Payment Option */}
                  <label className="flex items-center p-4 border border-purple-200 bg-purple-50 rounded-md cursor-pointer hover:bg-purple-100">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="emi" 
                      checked={paymentMethod === 'emi'} 
                      onChange={() => setPaymentMethod('emi')}
                      className="h-4 w-4 text-purple-600"
                    />
                    <span className="ml-2 flex items-center">
                      {/* <img src="https://cdn.razorpay.com/static/assets/logo/card.svg" alt="EMI" className="w-4 h-4 mr-2" /> */}
                      Pay in EMI (Credit Card EMI, No Cost EMI)
                      {orderTotal >= 3000 && <span className="ml-2 px-2 py-1 text-xs bg-purple-600 text-white rounded-full">Available</span>}
                    </span>
                  </label>
                  
                  <label className="flex items-center p-4 border rounded-md cursor-pointer hover:bg-gray-50">
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="cod" 
                      checked={paymentMethod === 'cod'} 
                      onChange={() => setPaymentMethod('cod')}
                      className="h-4 w-4 text-green-600"
                    />
                    <span className="ml-2">Cash on Delivery</span>
                  </label>
                </div>
                
                
                {/* Show Razorpay information */}
                {paymentMethod === 'razorpay' && (
                  <div className="mt-6 border-t pt-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                      <p className="text-sm text-blue-800">
                        You will be redirected to Razorpay's secure payment gateway to complete your purchase.
                      </p>
                    </div>
                    {/* <div className="flex flex-wrap gap-3 items-center justify-center">
                      <img src="https://cdn.razorpay.com/static/assets/logo/upi.svg" alt="UPI" className="h-8" />
                      <img src="https://cdn.razorpay.com/static/assets/logo/netbanking.svg" alt="Netbanking" className="h-8" />
                      <img src="https://cdn.razorpay.com/static/assets/logo/card.svg" alt="Card" className="h-8" />
                      <img src="https://cdn.razorpay.com/static/assets/logo/wallet.svg" alt="Wallet" className="h-8" />
                    </div> */}
                    <link
                      rel="stylesheet"
                      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    />
                    <div class="flex flex-wrap gap-3 items-center justify-center">
                      <i class="fab fa-cc-visa fa-2x"></i>
                      <i class="fab fa-cc-mastercard fa-2x"></i>
                      <i class="fab fa-cc-amex fa-2x"></i>
                      <i class="fab fa-google-pay fa-2x"></i>
                      <i class="fab fa-apple-pay fa-2x"></i>
                      <i class="fab fa-amazon-pay fa-2x"></i>
                    </div>

                  </div>
                )}
                
                {/* Show UPI information */}
                {paymentMethod === 'upi' && (
                  <div className="mt-6 border-t pt-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-4">
                      <p className="text-sm text-blue-800">
                        Pay directly via UPI. You can either scan the QR code or enter your UPI ID to make the payment.
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6 mt-4">
                      {/* UPI QR Code */}
                      {/* <div className="flex flex-col items-center flex-1">
                        <h3 className="font-medium mb-3">Scan QR Code</h3>
                        <div className="border border-gray-300 rounded-md p-3 bg-white mb-3">
                          <div className="w-48 h-48 mx-auto bg-white">
                            {showQrCode ? (
                              <img 
                                src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-dark.png" 
                                alt="UPI QR Code" 
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <div className="flex flex-col items-center justify-center h-full">
                                <button 
                                  onClick={async () => {
                                    setPaymentProcessing(true);
                                    // Create Razorpay order first
                                    const orderData = await createRazorpayOrder();
                                    if (orderData) {
                                      setShowQrCode(true);
                                    }
                                    setPaymentProcessing(false);
                                  }}
                                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                                  disabled={paymentProcessing}
                                >
                                  {paymentProcessing ? (
                                    <div className="flex items-center">
                                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                      </svg>
                                      Generating QR...
                                    </div>
                                  ) : (
                                    "Generate QR Code"
                                  )}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {showQrCode && (
                          <div className="text-center mt-2 text-sm">
                            <p>Scan with any UPI app</p>
                            <div className="flex justify-center mt-2 gap-3">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" alt="Google Pay" className="h-6" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png" alt="PhonePe" className="h-6" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" className="h-6" />
                              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="BHIM UPI" className="h-6" />
                            </div>
                          </div>
                        )}
                      </div> */}
                      
                      {/* UPI ID Input */}
                      <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 md:pl-6 pt-6 md:pt-0">
                        <h3 className="font-medium mb-3">Or Pay via UPI ID</h3>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700 mb-1">
                              Enter your UPI ID
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                                type="text"
                                name="upi-id"
                                id="upi-id"
                                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="yourname@upi"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                              />
                            </div>
                            <p className="mt-1 text-xs text-gray-500">
                              Format: username@bankname (example: johndoe@okaxis)
                            </p>
                          </div>
                          
                          <button 
                            onClick={async () => {
                              if (!upiId.includes('@')) {
                                alert('Please enter a valid UPI ID');
                                return;
                              }
                              
                              setPaymentProcessing(true);
                              // Create Razorpay order and open with UPI option
                              const orderData = await createRazorpayOrder();
                              if (orderData) {
                                // Import the displayRazorpayPayment function from payment.js
                                const { displayRazorpayPayment } = await import('./payment');
                                // Call it with UPI specific parameters
                                await displayRazorpayPayment(
                                  orderData,
                                  {...formData, upiId},
                                  cart,
                                  cartTotal,
                                  orderTotal,
                                  shippingCost,
                                  'upi',
                                  setIsSubmitting,
                                  setOrderComplete,
                                  setPaymentProcessing,
                                  clearCart,
                                  sendOrderConfirmationEmail,
                                  'upi'
                                );
                              } else {
                                setPaymentProcessing(false);
                              }
                            }}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                            disabled={paymentProcessing || !upiId}
                          >
                            {paymentProcessing ? (
                              <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </div>
                            ) : (
                              "Pay Now"
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Show EMI information */}
                {paymentMethod === 'emi' && (
                  <div className="mt-6 border-t pt-6">
                    <div className="bg-purple-50 border border-purple-200 rounded-md p-4 mb-4">
                      <p className="text-sm text-purple-800">
                        Pay in easy monthly installments. Choose your preferred bank and EMI plan.
                      </p>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="font-medium mb-3">Select Your Bank</h3>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Bank', 'AMEX'].map(bank => (
                          <div 
                            key={bank} 
                            className={`border p-3 rounded-md text-center cursor-pointer transition-colors
                              ${selectedPaymentSubType === bank.toLowerCase().replace(' ', '') ? 'bg-purple-100 border-purple-300' : 'hover:bg-gray-50'}`}
                            onClick={() => setSelectedPaymentSubType(bank.toLowerCase().replace(' ', ''))}
                          >
                            <img 
                              src={`https://cdn.razorpay.com/bank-logos/${bank.toLowerCase().replace(' ', '')}.svg`} 
                              alt={bank} 
                              className="h-8 w-auto mx-auto mb-2"
                              onError={(e) => { e.target.onerror = null; e.target.src = 'https://cdn.razorpay.com/static/assets/logo/card.svg'; }}
                            />
                            <span className="text-sm font-medium">{bank}</span>
                          </div>
                        ))}
                      </div>
                      
                      {selectedPaymentSubType && selectedPaymentSubType !== 'all' && (
                        <div className="mt-6">
                          <h3 className="font-medium mb-3">EMI Plans</h3>
                          
                          <div className="space-y-3">
                            {[
                              { months: 3, interest: orderTotal >= 5000 ? 'No Cost EMI' : '12%' },
                              { months: 6, interest: orderTotal >= 7000 ? 'No Cost EMI' : '13%' },
                              { months: 9, interest: orderTotal >= 10000 ? 'No Cost EMI' : '14%' },
                              { months: 12, interest: '14%' }
                            ].map((plan) => {
                              // Calculate monthly amount
                              const isNoCost = plan.interest === 'No Cost EMI';
                              const interestRate = isNoCost ? 0 : parseInt(plan.interest, 10) / 100;
                              const totalWithInterest = isNoCost ? orderTotal : (orderTotal * (1 + interestRate));
                              const monthlyAmount = totalWithInterest / plan.months;
                              
                              return (
                                <div 
                                  key={plan.months}
                                  className={`border p-4 rounded-md cursor-pointer transition-colors
                                    ${selectedEmiOption === plan.months ? 'bg-purple-100 border-purple-300' : 'hover:bg-gray-50'}`}
                                  onClick={() => setSelectedEmiOption(plan.months)}
                                >
                                  <div className="flex justify-between items-center">
                                    <div>
                                      <p className="font-medium">{plan.months} Month{plan.months > 1 ? 's' : ''}</p>
                                      <p className="text-sm text-gray-600">
                                        {isNoCost ? (
                                          <span className="text-green-600">No Extra Cost</span>
                                        ) : (
                                          `Interest: ${plan.interest}`
                                        )}
                                      </p>
                                    </div>
                                    <div className="text-right">
                                      <p className="font-medium">₹{Math.ceil(monthlyAmount).toLocaleString()}/month</p>
                                      <p className="text-sm text-gray-600">Total: ₹{Math.ceil(totalWithInterest).toLocaleString()}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          
                          <button 
                            onClick={async () => {
                              if (!selectedEmiOption) {
                                alert('Please select an EMI plan');
                                return;
                              }
                              
                              setPaymentProcessing(true);
                              // Create Razorpay order and open with EMI option
                              const orderData = await createRazorpayOrder();
                              if (orderData) {
                                // Import the displayRazorpayPayment function from payment.js
                                const { displayRazorpayPayment } = await import('./payment');
                                // Call it with EMI specific parameters
                                await displayRazorpayPayment(
                                  orderData,
                                  formData,
                                  cart,
                                  cartTotal,
                                  orderTotal,
                                  shippingCost,
                                  'emi',
                                  setIsSubmitting,
                                  setOrderComplete,
                                  setPaymentProcessing,
                                  clearCart,
                                  sendOrderConfirmationEmail,
                                  'emi'
                                );
                              } else {
                                setPaymentProcessing(false);
                              }
                            }}
                            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors mt-6"
                            disabled={paymentProcessing || !selectedEmiOption}
                          >
                            {paymentProcessing ? (
                              <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                              </div>
                            ) : (
                              "Pay with EMI"
                            )}
                          </button>
                        </div>
                      )}
                      
                      {!selectedPaymentSubType && (
                        <p className="text-center text-gray-500 mt-4">Please select a bank to view EMI options</p>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Show COD information */}
                {paymentMethod === 'cod' && (
                  <div className="mt-6 border-t pt-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                      <p className="text-sm text-yellow-800">
                        Pay with cash upon delivery. Please note that COD may not be available for all pin codes.
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-6 flex justify-between">
                <button 
                  onClick={() => navigate('/shipping')}
                  className="border border-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Back to Shipping
                </button>
                <button 
                  onClick={handleSubmitOrder}
                  className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors flex items-center"
                  disabled={isSubmitting || paymentProcessing}
                >
                  {isSubmitting || paymentProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {paymentProcessing ? 'Initializing Payment...' : 'Processing...'}
                    </>
                  ) : (
                    paymentMethod === 'razorpay' ? 'Pay Now' : 'Place Order'
                  )}
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 border border-gray-200">
              <h2 className="text-xl font-semibold mb-4 flex items-center border-b pb-3">
                <FaShoppingCart className="mr-2 text-green-600" />
                Order Summary
                <span className="ml-2 text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full">{cart.length} item{cart.length !== 1 ? 's' : ''}</span>
              </h2>
              
              <div className="max-h-60 overflow-y-auto mb-4 pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {cart.map(item => (
                  <div key={item.id} className="flex py-3 border-b hover:bg-gray-50 rounded-md transition-colors">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-white p-1">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between text-sm font-medium text-gray-900">
                        <h3 className="line-clamp-2 text-blue-700 hover:text-blue-800">{item.title}</h3>
                      </div>
                      <div className="flex mt-auto justify-between items-center">
                        <div>
                          <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                          <p className="text-xs text-gray-500 mt-1">Unit Price: {formatPrice(item.price)}</p>
                        </div>
                        <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between py-2 text-gray-700">
                  <span>Subtotal ({cart.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                  <span className="font-medium">{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between py-2 text-gray-700">
                  <span>Shipping</span>
                  <span className={shippingCost === 0 ? 'text-green-600 font-medium' : ''}>{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
                </div>
                
                {/* Estimated tax row */}
                <div className="flex justify-between py-2 text-gray-700">
                  <span className="flex items-center">
                    <span>Estimated Tax</span>
                    <span className="ml-1 text-xs text-gray-500">(Included)</span>
                  </span>
                  <span>₹0.00</span>
                </div>

                <div className="my-4 border-t border-b py-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-green-700">{formatPrice(orderTotal)}</span>
                  </div>
                  <div className="mt-1 text-xs text-gray-500 text-right">
                    Including GST and all applicable taxes
                  </div>
                </div>
                
                {/* Order details section */}
                <div className="bg-gray-50 rounded-md p-3 space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Payment Method</span>
                    <span className="font-medium flex items-center">
                      {paymentMethod === 'razorpay' && <img src="https://razorpay.com/favicon.png" alt="Razorpay" className="w-4 h-4 mr-1" />}
                      {paymentMethod === 'card' && <FaCreditCard className="mr-1" />}
                      {paymentMethod === 'cod' && <span className="mr-1">💵</span>}
                      {paymentMethod === 'upi' && <img src="https://cdn.razorpay.com/static/assets/logo/upi.svg" alt="UPI" className="w-4 h-4 mr-1" />}
                      {paymentMethod === 'emi' && <img src="https://cdn.razorpay.com/static/assets/logo/card.svg" alt="EMI" className="w-4 h-4 mr-1" />}
                      {paymentMethod === 'razorpay' ? 'Razorpay' : 
                       paymentMethod === 'card' ? 'Credit Card' : 
                       paymentMethod === 'cod' ? 'Cash on Delivery' :
                       paymentMethod === 'upi' ? 'UPI' :
                       'EMI'}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Delivery</span>
                    <span className="font-medium">{getDeliveryDateRange()}</span>
                  </div>
                </div>
                
                {shippingCost === 0 && (
                  <div className="mt-2 text-sm text-green-600 bg-green-50 p-2 rounded-md flex items-center">
                    <FaShippingFast className="mr-2" />
                    <span>Free shipping on orders over ₹3,000!</span>
                  </div>
                )}
              </div>
              
              {/* Trust Seals in Order Summary */}
              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center justify-center mb-3">
                  <FaLock className="text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700">SECURE CHECKOUT</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/visa-3-226460.png" alt="Visa" className="h-8" />
                  <img src="https://cdn.iconscout.com/icon/free/png-256/mastercard-6-226462.png" alt="Mastercard" className="h-8" />
                  <img src="https://cdn.iconscout.com/icon/free/png-256/american-express-44503.png" alt="Amex" className="h-8" />
                  <img src="https://cdn.razorpay.com/static/assets/logo/upi.svg" alt="UPI" className="h-8" />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs text-center mt-3">
                  <div className="flex flex-col items-center border border-gray-200 rounded-md px-2 py-2 bg-gray-50">
                    <FaShieldAlt className="text-green-600 mb-1" />
                    <span className="text-gray-700">Secure Payment</span>
                  </div>
                  <div className="flex flex-col items-center border border-gray-200 rounded-md px-2 py-2 bg-gray-50">
                    <FaMedal className="text-blue-600 mb-1" />
                    <span className="text-gray-700">Quality Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
