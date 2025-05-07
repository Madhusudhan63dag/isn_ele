import React from 'react';

// Add backend API URL with environment variable fallback
export const API_URL = process.env.REACT_APP_API_URL || (process.env.NODE_ENV === 'production' ? '' : 'https://razorpaybackend-wgbh.onrender.com');

// Load Razorpay script
export const loadRazorpayScript = () => {
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

// Create Razorpay order
export const createRazorpayOrder = async (orderTotal, formData, setPaymentProcessing) => {
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
export const displayRazorpayPayment = async (
  orderData, 
  formData, 
  cart, 
  cartTotal, 
  orderTotal, 
  shippingCost,
  paymentMethod,
  setIsSubmitting,
  setOrderComplete, 
  setPaymentProcessing,
  clearCart,
  sendOrderConfirmationEmail,
  selectedMethod = 'card' // Default to card payment if no specific method is provided
) => {
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
          
          // Create and send shipment to Shiprocket
          await createShiprocketOrder(orderRef, response.razorpay_payment_id, formData, cart, orderTotal, shippingCost, paymentMethod);
          
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
    modal: {
      ondismiss: function() {
        console.log('Razorpay modal closed');
        setPaymentProcessing(false);
        setIsSubmitting(false);
      }
    }
  };

  // Add specific payment method configurations based on the selected method
  if (selectedMethod === 'upi') {
    options.method = {
      netbanking: false,
      card: false,
      wallet: false,
      upi: true,
      paylater: false, 
      emi: false
    };
    // Prefill UPI ID if available from form data
    if (formData.upiId) {
      options.prefill.vpa = formData.upiId;
    }
  } else if (selectedMethod === 'emi') {
    options.method = {
      netbanking: false,
      card: false,
      wallet: false,
      upi: false,
      paylater: false,
      emi: true
    };
    // For EMI, we can add specific bank restrictions if needed
    // options.bank = 'HDFC'; // Restricts to specific bank if needed
  }
  
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

// Create and send shipment to Shiprocket
export const createShiprocketOrder = async (orderRef, paymentId, formData, cart, orderTotal, shippingCost, paymentMethod) => {
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

// Send order confirmation email
export const sendOrderConfirmationEmail = async (orderNumber, paymentId, formData, cart, orderTotal, paymentMethod) => {
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
      products,
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
    
    console.log(`Attempting to send order confirmation email to API: ${API_URL}`);
    
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

// Send abandoned cart email
export const sendAbandonedCartEmail = async (formData, cart, orderTotal) => {
  try {
    if (!formData.email) return;
    
    // Format cart items into a proper products array structure for the email API
    const products = cart.map(item => ({
      name: item.title,
      quantity: item.quantity,
      price: (typeof item.price === 'number') ? item.price.toFixed(2) : item.price,
      image: item.image
    }));
    
    const orderDetails = {
      orderNumber: `PENDING-${Date.now()}`,
      products,
      totalAmount: orderTotal,
      currency: '₹'
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
    
    // Use direct fetch
    const response = await fetch(`${API_URL}/send-abandoned-order-email`, {
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
    
    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("Abandoned cart email response:", data);
    
    return data;
  } catch (error) {
    console.warn('Error sending abandoned cart email:', error.message || error);
    // Silent fail for abandoned cart emails - non-critical functionality
    return { success: false, error: error.message };
  }
};


// Helper function to get delivery date range
export const getDeliveryDateRange = () => {
  const start = new Date();
  start.setDate(start.getDate() + 5);
  const end = new Date();
  end.setDate(end.getDate() + 7);
  
  const formatDate = (date) => {
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
  };
  
  return `${formatDate(start)} - ${formatDate(end)}`;
};

// Process card payment
export const processCardPayment = async (
  formData,
  cart,
  cartTotal,
  orderTotal,
  shippingCost,
  paymentMethod,
  setOrderReference,
  setOrderComplete,
  setIsSubmitting,
  navigate,
  clearCart,
  sendOrderConfirmationEmailFunc
) => {
  // Generate a unique order reference/number
  const orderRef = `GG-${Math.floor(100000 + Math.random() * 900000)}`;
  setOrderReference(orderRef);
  
  // Set order success flag to prevent abandoned cart email
  sessionStorage.setItem('orderSuccessful', 'true');
  
  // Set order complete state
  setOrderComplete(true);
  
  // Send order confirmation email
  await sendOrderConfirmationEmailFunc(orderRef, 'CARD-PAYMENT', formData, cart, orderTotal, paymentMethod);
  
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
};

// Process cash on delivery payment
export const processCODPayment = async (
  formData,
  cart,
  cartTotal,
  orderTotal,
  shippingCost,
  paymentMethod,
  setOrderReference,
  setOrderComplete,
  setIsSubmitting,
  navigate,
  clearCart,
  sendOrderConfirmationEmailFunc
) => {
  // Generate a unique order reference/number
  const orderRef = `GG-${Math.floor(100000 + Math.random() * 900000)}`;
  setOrderReference(orderRef);
  
  // Set order success flag to prevent abandoned cart email
  sessionStorage.setItem('orderSuccessful', 'true');
  
  // Set order complete state
  setOrderComplete(true);
  
  // Send order confirmation email
  await sendOrderConfirmationEmailFunc(orderRef, 'COD', formData, cart, orderTotal, paymentMethod);
  
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
};

// For validating payment form
export const validatePaymentForm = (paymentMethod, cardData, setErrors) => {
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