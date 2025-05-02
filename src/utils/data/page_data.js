


const productSupport = [
  {
    title: "Ayurvedic Products",
    description: "Questions about our Ayurvedic formulations, ingredients, or usage instructions? Our Ayurvedic specialists are here to help.",
    email: "ayurveda@glowglaz.com",
    color: "green"
  },
  {
    title: "Health & Nutrition",
    description: "Need guidance on our nutritional supplements, weight management, or joint health products? Consult our nutrition experts.",
    email: "nutrition@glowglaz.com",
    color: "blue"
  },
  {
    title: "Skincare Line",
    description: "For all inquiries related to our PSORIGO skincare products, treatments, and personalized skin recommendations.",
    email: "skincare@glowglaz.com",
    color: "teal"
  }
];

// Contact page FAQs
const contactFaqs = [
  {
    question: "What are your shipping timeframes?",
    answer: "We process orders within 24-48 hours. Standard shipping takes 3-5 business days, while express shipping delivers within 1-2 business days. International shipping may take 7-14 business days."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order is shipped, you'll receive a tracking number via email. You can also check your order status by logging into your account on our website."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most products. Items must be in their original packaging and unused. Special conditions apply for certain products. Please contact our customer service team for return authorization."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to select international destinations. Shipping costs and delivery timeframes vary by location. Please check the shipping information during checkout for specific details."
  }
];

// FAQ categories and questions
const faqData = [
  {
    category: "Product Information",
    icon: "Package",
    color: "blue",
    questions: [
      {
        id: 1,
        question: "Are your products 100% organic?",
        answer: "Most of our products contain organic ingredients, but not all products are 100% organic. Each product page lists all ingredients and highlights organic components where applicable. We prioritize natural, high-quality ingredients in all our formulations."
      },
      {
        id: 2,
        question: "How do I know which product is right for me?",
        answer: "We recommend reviewing the detailed product descriptions on each product page, which include information about benefits, ingredient profiles, and recommended uses. If you're still unsure, contact our customer support team who can help you choose based on your specific needs and concerns."
      },
      {
        id: 3,
        question: "Do your products have side effects?",
        answer: "Our products are formulated to be gentle and safe for most users. However, individual reactions can vary based on personal sensitivities. We recommend reviewing the ingredients list for any known allergies and, if you have specific health concerns, consulting with your healthcare provider before starting any new supplement regimen."
      },
      {
        id: 4,
        question: "How should I store my products?",
        answer: "For optimal freshness and efficacy, store all products in a cool, dry place away from direct sunlight. Some products may have specific storage requirements, which will be indicated on the packaging. Supplements should generally be kept out of reach of children."
      }
    ]
  },
  {
    category: "Orders & Shipping",
    icon: "Truck",
    color: "green",
    questions: [
      {
        id: 1,
        question: "How long will it take to receive my order?",
        answer: "Standard shipping typically takes 3-5 business days within India. Express shipping options are available at checkout for 1-2 business day delivery. International shipping times vary by location, generally ranging from 7-14 business days."
      },
      {
        id: 2,
        question: "Do you ship internationally?",
        answer: "Yes, we ship to select international destinations. Shipping costs and delivery times vary by location. Please check the shipping information during checkout for specific details relevant to your country."
      },
      {
        id: 3,
        question: "How can I track my order?",
        answer: "Once your order is shipped, you'll receive a tracking number via email. You can also track your order by logging into your account on our website and viewing your order history."
      },
      {
        id: 4,
        question: "What if my order arrives damaged?",
        answer: "If you receive a damaged product, please contact our customer service team within 48 hours of delivery. Include your order number and photos of the damaged items, and we'll arrange for a replacement or refund."
      }
    ]
  },
  {
    category: "Returns & Refunds",
    icon: "RefreshCw",
    color: "amber",
    questions: [
      {
        id: 1,
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most products. Items must be in their original, unopened packaging. Some products, such as personalized items or items marked as final sale, cannot be returned. Please contact our customer service team to initiate a return."
      },
      {
        id: 2,
        question: "How do I return a product?",
        answer: "To return a product, contact our customer service team with your order number to receive a Return Authorization (RA) number. Products returned without an RA number may not be eligible for refund or may experience processing delays."
      },
      {
        id: 3,
        question: "When will I receive my refund?",
        answer: "Once we receive and process your return, refunds are typically issued within 5-7 business days. The refund will be credited back to the original payment method used for the purchase."
      },
      {
        id: 4,
        question: "Do you offer exchanges?",
        answer: "Yes, we do offer exchanges for products of equal value. If you wish to exchange for an item of different value, we'll process a refund for the returned item and you can place a new order for the desired item."
      }
    ]
  },
  {
    category: "Account & Payment",
    icon: "CreditCard",
    color: "purple",
    questions: [
      {
        id: 1,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayTM, UPI payments, and net banking. All payments are securely processed and encrypted."
      },
      {
        id: 2,
        question: "Is it necessary to create an account to make a purchase?",
        answer: "While creating an account is recommended for a better shopping experience and order tracking, we do offer a guest checkout option for those who prefer not to create an account."
      },
      {
        id: 3,
        question: "How do I reset my password?",
        answer: "To reset your password, click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you instructions to reset your password."
      },
      {
        id: 4,
        question: "Is my payment information secure?",
        answer: "Yes, all payment information is encrypted using industry-standard SSL technology. We do not store your complete credit card information on our servers."
      }
    ]
  }
];

// Shipping policy data
const shippingPolicy = {
  domesticShipping: {
    title: "Domestic Shipping",
    policies: [
      {
        title: "Standard Shipping",
        details: "₹99 for orders under ₹1,000",
        timeframe: "3-5 business days",
        note: "Free standard shipping on all orders over ₹1,000"
      },
      {
        title: "Express Shipping",
        details: "₹199 flat rate",
        timeframe: "1-2 business days",
        note: "Available for most pin codes across India"
      },
      {
        title: "Same-Day Delivery",
        details: "₹299 flat rate",
        timeframe: "Same day if ordered before 12 PM",
        note: "Available only in Delhi NCR, Mumbai, and Bangalore"
      }
    ]
  },
  internationalShipping: {
    title: "International Shipping",
    policies: [
      {
        title: "Standard International",
        details: "₹1,499 flat rate",
        timeframe: "7-14 business days",
        note: "Available to most countries worldwide"
      },
      {
        title: "Express International",
        details: "₹2,499 flat rate",
        timeframe: "3-5 business days",
        note: "Available to select countries"
      }
    ],
    restrictions: [
      "Some products may not be eligible for international shipping due to country-specific regulations",
      "Import duties and taxes are the responsibility of the recipient",
      "International orders may require additional verification before processing"
    ]
  },
  orderProcessing: {
    title: "Order Processing",
    details: [
      "All orders are processed within 24-48 hours on business days",
      "Orders placed on weekends or public holidays will be processed on the next business day",
      "You will receive a confirmation email with tracking information once your order ships"
    ]
  }
};

// Return policy data
const returnPolicy = {
  eligibility: {
    title: "Return Eligibility",
    details: [
      "Products must be returned within 30 days of delivery",
      "Items must be unused and in their original packaging",
      "Products must include all original tags, labels, and accessories",
      "Damaged or defective products can be returned for a full refund or replacement"
    ],
    exceptions: [
      "Personalized products cannot be returned unless damaged",
      "Products marked as 'Final Sale' are not eligible for return",
      "Health supplements and Ayurvedic medicines cannot be returned once opened for safety reasons"
    ]
  },
  process: {
    title: "Return Process",
    steps: [
      "Contact our customer support team at returns@glowglaz.com to initiate a return",
      "Include your order number and reason for return in your email",
      "Our team will provide you with a Return Authorization (RA) number within 1-2 business days",
      "Pack the item(s) securely in their original packaging if possible",
      "Include the RA number on the outside of the package",
      "Ship the package to the address provided by our customer support team"
    ]
  },
  refunds: {
    title: "Refunds",
    details: [
      "Refunds will be processed within 5-7 business days after receiving and inspecting the returned item",
      "Refunds will be issued to the original payment method used for the purchase",
      "Shipping costs are non-refundable unless the return is due to our error",
      "If you received free shipping with your purchase, the standard shipping cost will be deducted from your refund"
    ]
  },
  exchanges: {
    title: "Exchanges",
    details: [
      "Exchanges are processed for items of equal value",
      "For exchanges with price differences, we'll issue a refund for the returned item and you can place a new order",
      "The exchange process follows the same steps as the return process"
    ]
  }
};

// Shipping and returns FAQs
const shippingFaqs = [
  {
    question: "How can I track my order?",
    answer: "You will receive a shipping confirmation email with tracking information once your order ships. You can also log into your account on our website to view your order status and tracking details."
  },
  {
    question: "Do you ship to remote areas?",
    answer: "Yes, we ship to most locations across India, including remote areas. However, delivery to certain remote areas may take an additional 2-3 business days and may incur extra shipping charges."
  },
  {
    question: "What happens if I'm not available to receive my package?",
    answer: "Our shipping partners will attempt delivery up to three times. If delivery is unsuccessful after three attempts, your package will be held at the nearest collection center for 5 days. You will receive notifications about delivery attempts and pickup options."
  },
  {
    question: "Can I change my shipping address after placing an order?",
    answer: "We can change your shipping address if the order has not been processed yet. Please contact our customer support team immediately if you need to update your shipping address."
  },
  {
    question: "How do I return a damaged product?",
    answer: "If you receive a damaged product, please take photos of the damage and contact our customer support team within 48 hours of delivery. Include your order number and photos in your email, and we'll guide you through the return process."
  },
  {
    question: "Can I get a refund without returning the product?",
    answer: "Refunds without returns are only provided in exceptional circumstances, such as if a product is permanently out of stock or if we advise against returning a defective item. Our customer service team will evaluate these situations on a case-by-case basis."
  },
  {
    question: "Do you offer replacements for defective products?",
    answer: "Yes, we offer replacements for defective products. Please contact our customer support team with details about the defect, and we'll arrange for a replacement to be shipped to you."
  },
  {
    question: "What if my package is lost in transit?",
    answer: "If your tracking information hasn't updated for more than 5 business days or indicates the package is lost, please contact our customer support team. We'll file a claim with the shipping carrier and either send a replacement or provide a full refund."
  }
];

// Privacy policy data
const privacyPolicy = {
  lastUpdated: "November 15, 2023",
  introduction: {
    title: "Introduction",
    content: "At GlowGlaz, we respect your privacy and are committed to protecting your personal data. This Privacy Policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you. Please read this Privacy Policy carefully before using our Services or submitting any personal data to us."
  },
  sections: [
    {
      id: "information",
      title: "Information We Collect",
      content: "We collect several types of information from and about users of our website, including:",
      subsections: [
        {
          title: "Personal Information",
          content: "This includes information by which you may be personally identified, such as name, postal address, email address, telephone number, date of birth, payment information, and any other identifier by which you may be contacted online or offline."
        },
        {
          title: "Usage Information",
          content: "Details of your visits to our website, including traffic data, location data, logs, and other communication data and the resources that you access and use on the website."
        },
        {
          title: "Device Information",
          content: "Information about your computer and internet connection, including your IP address, operating system, and browser type."
        }
      ]
    },
    {
      id: "use",
      title: "How We Use Your Information",
      content: "We use information that we collect about you or that you provide to us, including any personal information:",
      bullets: [
        "To present our website and its contents to you",
        "To provide you with information, products, or services that you request from us",
        "To fulfill any other purpose for which you provide it",
        "To provide you with notices about your account, including expiration and renewal notices",
        "To carry out our obligations and enforce our rights arising from any contracts entered into between you and us",
        "To notify you about changes to our website or any products or services we offer or provide",
        "To allow you to participate in interactive features on our website",
        "To personalize your experience and to deliver content and product offerings relevant to your interests",
        "For any other purpose with your consent"
      ]
    },
    {
      id: "share",
      title: "Information Sharing and Disclosure",
      content: "We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:",
      bullets: [
        "To our subsidiaries and affiliates",
        "To contractors, service providers, and other third parties we use to support our business",
        "To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer",
        "To fulfill the purpose for which you provide it",
        "For any other purpose disclosed by us when you provide the information",
        "With your consent"
      ]
    },
    {
      id: "cookies",
      title: "Cookies and Tracking Technologies",
      content: "We use cookies and similar tracking technologies to track the activity on our website and store certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.",
      cookieTypes: [
        {
          name: "Essential Cookies",
          description: "These cookies are necessary for the website to function properly and cannot be switched off in our systems."
        },
        {
          name: "Performance Cookies",
          description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site."
        },
        {
          name: "Functional Cookies",
          description: "These cookies enable the website to provide enhanced functionality and personalization."
        },
        {
          name: "Targeting Cookies",
          description: "These cookies may be set through our site by our advertising partners to build a profile of your interests."
        }
      ]
    },
    {
      id: "rights",
      title: "Your Data Protection Rights",
      content: "Depending on your location and applicable laws, you may have various rights regarding your personal information:",
      rights: [
        {
          name: "Right to Access",
          description: "You have the right to request copies of your personal data."
        },
        {
          name: "Right to Rectification",
          description: "You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete."
        },
        {
          name: "Right to Erasure",
          description: "You have the right to request that we erase your personal data, under certain conditions."
        },
        {
          name: "Right to Restrict Processing",
          description: "You have the right to request that we restrict the processing of your personal data, under certain conditions."
        },
        {
          name: "Right to Object to Processing",
          description: "You have the right to object to our processing of your personal data, under certain conditions."
        },
        {
          name: "Right to Data Portability",
          description: "You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions."
        }
      ]
    },
    {
      id: "security",
      title: "Data Security",
      content: "We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls. Any payment transactions will be encrypted using industry-standard technology.",
      additionalPoints: [
        "We use regular Malware Scanning to protect your personal information",
        "Your personal information is contained behind secured networks and is only accessible by a limited number of persons",
        "We implement a variety of security measures when a user enters, submits, or accesses their information"
      ]
    },
    {
      id: "children",
      title: "Children's Privacy",
      content: "Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are under 13, do not use or provide any information on this website. If we learn we have collected or received personal information from a child under 13 without verification of parental consent, we will delete that information."
    },
    {
      id: "changes",
      title: "Changes to Our Privacy Policy",
      content: "It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page. The date the privacy policy was last revised is identified at the top of the page."
    },
    {
      id: "contact",
      title: "Contact Information",
      content: "To ask questions or comment about this privacy policy and our privacy practices, contact us at:",
      contactDetails: {
        email: "privacy@glowglaz.com",
        phone: "+91 98765 43210",
        address: "GlowGlaz Privacy Office, 123 Wellness Way, Ayurveda Heights, New Delhi, 110001, India"
      }
    }
  ]
};

// Terms and conditions data
const termsAndConditions = {
  lastUpdated: "December 1, 2023",
  introduction: {
    title: "Introduction",
    content: "Welcome to GlowGlaz. By accessing or using our website, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site."
  },
  sections: [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: "These Terms and Conditions govern your use of the GlowGlaz website and the products and services offered by GlowGlaz. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website.",
      points: [
        "We reserve the right to modify these Terms and Conditions at any time without prior notice",
        "Your continued use of our website following any changes constitutes your acceptance of the revised terms",
        "It is your responsibility to regularly check for updates to these terms"
      ]
    },
    {
      id: "account",
      title: "User Accounts",
      content: "To access certain features of our website, you may be required to create a user account. When creating an account, you agree to provide accurate, current, and complete information and to update this information to maintain its accuracy.",
      subsections: [
        {
          title: "Account Security",
          content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use ofyour account or any other breach of security."
        },
        {
          title: "Account Termination",
          content: "We reserve the right to suspend or terminate your account and refuse any and all current or future use of our services, for any reason at our sole discretion."
        }
      ]
    },
    {
      id: "purchase",
      title: "Purchases & Payment",
      content: "All purchases through our website are subject to product availability and the following terms:",
      bullets: [
        "All prices are listed in Indian Rupees (₹) and are inclusive of applicable taxes unless otherwise stated",
        "We reserve the right to change prices at any time without notice",
        "Payment must be made in full before products are dispatched",
        "We accept various payment methods as specified on our checkout page",
        "By providing payment information, you represent and warrant that you have the legal right to use the payment method provided"
      ],
      subsections: [
        {
          title: "Order Cancellation",
          content: "We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product or pricing information, or suspected fraudulent activity."
        }
      ]
    },
    {
      id: "products",
      title: "Products & Services",
      content: "We strive to provide accurate descriptions of our products and services. However, we do not guarantee that product descriptions, colors, information, or other content available on the website are accurate, complete, reliable, current, or error-free.",
      points: [
        "Product images are for illustrative purposes only and may differ from the actual product",
        "We reserve the right to discontinue any product at any time",
        "Product availability is subject to change without notice",
        "We do not guarantee that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations"
      ]
    },
    {
      id: "intellectual",
      title: "Intellectual Property",
      content: "All content included on the website, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the website, is the property of GlowGlaz or its suppliers and is protected by copyright and other intellectual property laws.",
      subsections: [
        {
          title: "Limited License",
          content: "We grant you a limited, non-exclusive, non-transferable license to access and make personal use of the website. This license does not include any resale or commercial use of the website or its contents."
        },
        {
          title: "Restrictions",
          content: "You may not reproduce, duplicate, copy, sell, resell, or otherwise exploit any portion of the website without our express written consent. You may not use any meta tags or any other hidden text utilizing our name or trademarks without our express written consent."
        }
      ]
    },
    {
      id: "liability",
      title: "Limitation of Liability",
      content: "To the fullest extent permitted by applicable law, GlowGlaz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from: ",
      bullets: [
        "Your access to or use of or inability to access or use the website",
        "Any conduct or content of any third party on the website",
        "Any content obtained from the website",
        "Unauthorized access, use or alteration of your transmissions or content",
        "Product use or misuse"
      ],
      legalNote: "In no event shall our total liability to you for all claims exceed the amount paid by you, if any, for accessing or using our website."
    },
    {
      id: "disclaimer",
      title: "Disclaimer of Warranties",
      content: "The website and all products and services delivered to you through the website are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties, or conditions of any kind, either express or implied.",
      legalText: "To the fullest extent permissible pursuant to applicable law, we disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose. We do not warrant that the website or any of its functions will be uninterrupted or error-free, that defects will be corrected, or that the website or the servers that make it available are free of viruses or other harmful components."
    },
    {
      id: "indemnification",
      title: "Indemnification",
      content: "You agree to indemnify, defend, and hold harmless GlowGlaz, its officers, directors, employees, agents, licensors, and suppliers from and against all losses, expenses, damages, and costs, including reasonable attorneys' fees, resulting from any violation of these Terms and Conditions or any activity related to your account (including negligent or wrongful conduct) by you or any other person accessing the website using your account."
    },
    {
      id: "governing-law",
      title: "Governing Law",
      content: "These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without giving effect to any principles of conflicts of law. You agree that any legal action or proceeding between you and GlowGlaz shall be brought exclusively in the courts located in New Delhi, India."
    },
    {
      id: "changes",
      title: "Changes to Terms",
      content: "We reserve the right, at our sole discretion, to update, change, or replace any part of these Terms and Conditions by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website following the posting of any changes to these Terms and Conditions constitutes acceptance of those changes."
    },
    {
      id: "contact",
      title: "Contact Information",
      content: "Questions about the Terms and Conditions should be sent to us at: ",
      contactDetails: {
        email: "legal@glowglaz.com",
        phone: "+91 98765 43210",
        address: "GlowGlaz Legal Department, 123 Wellness Way, Ayurveda Heights, New Delhi, 110001, India"
      }
    }
  ]
};




export default { 
  productSupport,
  contactFaqs,
  faqData,
  shippingPolicy,
  returnPolicy,
  shippingFaqs,
  privacyPolicy,
  termsAndConditions
};