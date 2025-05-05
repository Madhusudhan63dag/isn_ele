import test from '../image/test.jpg'
import banner1 from '../image/banner/banner1.jpg'
import banner2 from '../image/banner/banner2.jpg'
import vlog1 from '../image/product/vlog1.jpg'
import vlog2 from '../image/product/vlog2.jpg'
import vlog3 from '../image/product/vlog3.jpg'
import vlog4 from '../image/product/old/img1.jpg'
import vlog5 from '../image/product/old/img2.jpg'
import vlog6 from '../image/product/old/img3.jpg'
import vlog7 from '../image/product/old/img4.jpg'
import vlog8 from '../image/product/old/img5.jpg'

import project from '../image/product/old/product.jpg'
import project1 from '../image/product/old/product1.jpg'
import project2 from '../image/product/old/product2.jpg'
import project3 from '../image/product/old/product3.jpg'
import project4 from '../image/product/old/product4.jpg'
import project5 from '../image/product/old/product5.jpg'
import project6 from '../image/product/old/product6.jpg'
import project7 from '../image/product/old/product7.jpg'
import project8 from '../image/product/old/product8.jpg'
import project9 from '../image/product/projector1.jpg'
import project10 from '../image/product/projector2.jpg'


// Define category mappings to make filtering more dynamic
const categoryMappings = {
  'cameras': ['camera', 'vlog', 'recorder', 'video'],
  'projectors': ['projector', 'display', 'cinema'],
  // Add more mappings as needed
};

// Videos for different sections of the site
const videos = {
  // Homepage featured videos
  featured: [
    {
      id: 'vlog_camera_demo', 
      title: 'I & I Vlog Camera',
      description: '4K UHD video capture with live streaming - perfect for vloggers and content creators',
      videoId: 'AUWgODVa8Es', // Replace with actual YouTube video ID
      productId: 1,
      thumbnail: vlog3
    },
    {
      id: 'projector_demo',
      title: 'I & I Portable Mini Projector',
      description: 'HD resolution with built-in Android 13.0 - transform any space into your personal theater',
      videoId: 'mqwOBqXm-3E', // Replace with actual YouTube video ID
      productId: 2,
      thumbnail: project9
    },
    // {
    //   id: 'product_tutorials',
    //   title: 'How To Use Our Products',
    //   description: 'Learn how to get the most out of your Tech Store products with our helpful tutorials',
    //   videoId: 'YOUR_VIDEO_ID_3', // Replace with actual YouTube video ID
    //   thumbnail: test
    // }
  ],
  
  // Testimonial videos for About page
  testimonials: [
    {
      id: 'testimonial_vlogger',
      name: 'Rahul Joshi',
      title: 'Professional Vlogger',
      quote: 'The I & I Vlog Camera has completely transformed how I create content. The image quality is exceptional and the live streaming feature is seamless.',
      videoId: 'YOUR_TESTIMONIAL_ID_1', // Replace with actual YouTube video ID
      initials: 'RJ'
    },
    {
      id: 'testimonial_home_theater',
      name: 'Anjali Patel',
      title: 'Home Theater Enthusiast',
      quote: 'The projector\'s quality is outstanding for its size. I can now enjoy movies on a big screen anywhere in my home. The built-in Android OS is a game-changer!',
      videoId: 'YOUR_TESTIMONIAL_ID_2', // Replace with actual YouTube video ID
      initials: 'AP'
    },
    {
      id: 'testimonial_tech_reviewer',
      name: 'Sanjay Kumar',
      title: 'Tech Reviewer',
      quote: 'I\'ve tested dozens of portable electronics, and I & I consistently delivers exceptional quality and innovation. Their customer service is also top-notch!',
      videoId: 'YOUR_TESTIMONIAL_ID_3', // Replace with actual YouTube video ID
      initials: 'SK'
    }
  ]
};

const trending = [
  {
    id: 'cameras',
    name: "I and I vlog camera",
    imageUrl: test,
    keywords: ["camera", "vlog", "recorder", "video"] // Add keywords for more flexible matching
  },
  {
    id: 'projectors',
    name: "I and I Portable Mini Projector",
    imageUrl: project9,
    keywords: ["projector", "display", "cinema"] // Add keywords for more flexible matching
  }
] 

const productData = [
  {
    "id": 1,
    "title": "I & I Vlog Camera Standard Edition",
    "description": "Ultimate 4G LTE portable recorder with live streaming, one-click SOS calling, and 4K UHD video capture. Features a 180° rotatable lens and infrared night-vision up to 10 m for professional-grade recording day or night.",
    "imageUrl": test,
    "url": vlog5,
    "features": [
      { "id": 1, "title": "4K UHD Video", "url": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 2, "title": "4G LTE Connectivity", "url": "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 3, "title": "Infrared Night Vision", "url": "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
    ],
    "price": 5990,
    "originalPrice": 8990, // Original price for discount calculation
    "discount": 33, // Discount percentage
    "rating": 4.8,
    "reviews": 254,
    "videoId": "AUWgODVa8Es" // YouTube video ID for product demo
  },
  {
    "id": 2,
    "title": "I & I Portable Mini Projector Standard Edition",
    "description": "Cute, ultra-portable projector with advanced Wi-Fi 6 and Bluetooth 5.0 connectivity. Delivers HD 720P resolution with auto-keystone correction, multiple interfaces, and built-in Android 13.0 with streaming apps.",
    "imageUrl": project7,
    "url": project6,
    "features": [
      { "id": 1, "title": "Wi-Fi 6 & Bluetooth 5.0", "url": "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 2, "title": "HD 720P Resolution", "url": "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 3, "title": "Android 13.0 OS", "url": "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
    ],
    "price": 6990,
    "originalPrice": 12990, // Original price for discount calculation
    "discount": 46, // Discount percentage
    "rating": 4.5,
    "reviews": 187,
    "videoId": "mqwOBqXm-3E" // YouTube video ID for product demo
  }
]

const trendingpage = [
  {
    "id": 1,
    "title": "I and I vlog camera",
    "description": "Capture life's most important moments with our professional-grade cameras and recorders. From 4K UHD video to night vision capabilities and mobile connectivity, our devices are built for creators who demand quality and reliability.",
    "imageUrl": vlog1,
    "benefits": {
      "title": "Why Choose Our Camera Collection",
      "points": [
        {
          "title": "Professional Quality",
          "description": "Each camera undergoes rigorous testing to ensure exceptional image quality and reliable performance in any environment."
        },
        {
          "title": "Advanced Connectivity",
          "description": "Built-in 4G LTE lets you stream live or backup footage instantly without needing Wi-Fi connections."
        },
        {
          "title": "Safety Features",
          "description": "One-touch SOS calling and automatic cloud backup ensure your security and protect your valuable footage."
        },
        {
          "title": "All-Day Performance",
          "description": "Long-lasting battery life with smart power management keeps you recording when it matters most."
        }
      ]
    },
    "products": [
      { "id": 1, "title": "I & I Vlog Camera Standard Edition", "url": vlog2, "price": 5990 }
    ],
    "banner": [
      {
        "id": 1,
        "imageUrl": banner2,
        "heading": "Professional Recording",
        "subheading": "Capture life in stunning 4K UHD quality"
      }
    ],
    "videos": [
      {
        "id": "vlog_overview",
        "title": "See the I & I Vlog Camera in Action",
        "description": "Watch our camera capture stunning 4K footage in various environments",
        "videoId": "AUWgODVa8Es" // YouTube video ID
      }
    ]
  },
  {
    "id": 2,
    "title": "I and I Portable Mini Projector",
    "description": "Transform any space into your personal cinema with our portable projectors. Featuring cutting-edge connectivity, HD resolution, and smart features, our projectors deliver impressive visuals in a compact, easy-to-use package.",
    "imageUrl": project1,
    "benefits": {
      "title": "The Perfect Portable Entertainment Solution",
      "points": [
        {
          "title": "Ultra-Portability",
          "description": "Compact design that fits in your bag, allowing you to create a big-screen experience anywhere."
        },
        {
          "title": "Smart Connectivity",
          "description": "Advanced Wi-Fi 6 and Bluetooth 5.0 ensure stable, high-speed wireless connections to all your devices."
        },
        {
          "title": "Built-In Entertainment",
          "description": "Android OS with pre-installed streaming apps means no extra devices needed for endless content."
        },
        {
          "title": "Versatile Compatibility",
          "description": "Multiple interfaces connect to laptops, gaming consoles, streaming sticks, and more."
        }
      ]
    },
    "products": [
      { "id": 2, "title": "I & I Portable Mini Projector Standard Edition", "url": project1, "price": 6990 }
    ],
    "banner": [
      {
        "id": 1,
        "imageUrl": banner1,
        "heading": "Portable Cinema",
        "subheading": "Big screen entertainment that fits in your palm"
      }
    ],
    "videos": [
      {
        "id": "projector_overview",
        "title": "I & I Mini Projector Showcase",
        "description": "See how our projector transforms any space into a personal theater",
        "videoId": "mqwOBqXm-3E" // YouTube video ID
      }
    ]
  }
]

// Keep existing data structures but update the content
const newproduct = [
  {
    id: 1,
    name: "I & I Vlog Camera",
    image: vlog3,
    price: 5990,
    originalPrice: 8990, // Original price for discount calculation
    discount: 33, // Discount percentage
  },
  {
    id: 2,
    name: "I & I Portable Mini Projector",
    image: project3,
    price: 6990,
    originalPrice: 12990, // Original price for discount calculation
    discount: 46, // Discount percentage
  }
]

const brand = [
  {
    id: 1,
    name: "I & I Tech",
    image: "i-and-i-tech.jpg",
  }
]

const productDetailData = [
  {
    "id": 1,
    "title": "I & I Vlog Camera Standard Edition",
    "price": "₹5990",
    "images": [
      vlog3,
      vlog4,
      vlog5,
      vlog6
    ],
    "badge": "New",
    "whyLoveIt": "Ultimate 4G Portable Recorder with SOS Calling & 180° Lens—powered by a super‑long‑lasting battery for professionals and enthusiasts.",
    "ingredients": null,
    "allergens": null,
    "inStock": true,
    "features": [
      "4K UHD video (3840 × 2160 @ 30 fps)",
      "1080p @ 60 fps recording",
      "2.4″ IPS touchscreen",
      "180° rotatable lens",
      "Infrared night-vision up to 10 m",
      "One-click SOS calling",
      "4G LTE live streaming",
      "Dual storage: microSD up to 256 GB + AES-256 cloud backup",
      "Smart auto-save on power loss",
      "Professional-grade build"
    ],
    "videoId": "AUWgODVa8Es", // Main product video for product page
    "additionalVideos": [
      { 
        "id": "camera_features",
        "title": "Key Features Explained",
        "description": "Detailed walkthrough of all the camera features",
        "videoId": "YOUR_FEATURE_VIDEO_ID_1"
      },
      { 
        "id": "camera_tutorial",
        "title": "How To Use Your Camera",
        "description": "Step-by-step tutorial for first-time users",
        "videoId": "YOUR_TUTORIAL_VIDEO_ID_1"
      }
    ],
    "tabs": [
      // ... existing tabs data
    ]
  },
  {
    "id": 2,
    "title": "I & I Portable Mini Projector Standard Edition",
    "price": "₹6990",
    "images": [
      project2,
      project3,
      project4,
      project5
    ],
    "badge": "Bestseller",
    "whyLoveIt": "Experience big-screen entertainment anywhere with the I & I Portable Mini Projector. This cute, ultra-portable device combines advanced connectivity with HD resolution and built-in streaming apps, making it perfect for impromptu movie nights, presentations, or gaming sessions.",
    "ingredients": null,
    "allergens": null,
    "inStock": true,
    "features": [
      "HD 720P LCD projection",
      "Wi-Fi 6 for fast, lag-free streaming",
      "Bluetooth 5.0 for audio connections",
      "Auto-keystone correction",
      "Multiple interfaces: HDMI, USB, audio-out",
      "Android 13.0 OS",
      "Built-in streaming apps (Netflix, YouTube, Prime Video)",
      "3W cavity-design speaker system",
      "Manual focus controls",
      "Ultra-portable design"
    ],
    "videoId": "mqwOBqXm-3E", // Main product video for product page
    "additionalVideos": [
      { 
        "id": "projector_setup",
        "title": "Quick Setup Guide",
        "description": "How to set up your projector in under 2 minutes",
        "videoId": "YOUR_SETUP_VIDEO_ID_2"
      },
      { 
        "id": "projector_tricks",
        "title": "Tips & Tricks",
        "description": "Get the best experience from your mini projector",
        "videoId": "YOUR_TRICKS_VIDEO_ID_2"
      }
    ],
    "tabs": [
      // ... existing tabs data
    ]
  }
]

// NEW: FAQ Videos to explain products
const faqVideos = [
  {
    id: 'faq_vlog_camera',
    title: 'Frequently Asked Questions: Vlog Camera',
    description: 'Answers to common questions about using and getting the most from your I & I Vlog Camera',
    videoId: 'YOUR_FAQ_VIDEO_ID_1'
  },
  {
    id: 'faq_projector',
    title: 'Frequently Asked Questions: Mini Projector',
    description: 'Troubleshooting tips and answers to common questions about the I & I Mini Projector',
    videoId: 'YOUR_FAQ_VIDEO_ID_2'
  }
];

// Deal data for the new products
const dealsData = {
  'vlog-camera-deal': {
    title: 'I & I Vlog Camera Launch Offer',
    description: 'Be among the first to experience professional-grade video recording with the new I & I Vlog Camera. Featuring 4K UHD video, 4G LTE connectivity, and night vision capabilities at an introductory price with 10% OFF for a limited time.',
    productIds: [1],
    discount: '10% OFF',
    videoId: 'YOUR_DEAL_VIDEO_ID_1' // Video demonstrating the special deal
  },
  'projector-special': {
    title: 'Mini Projector Special',
    description: 'Transform any space into your personal cinema with the I & I Portable Mini Projector. Featuring Wi-Fi 6, Bluetooth 5.0, and Android 13.0. Get 15% OFF for a limited time and enjoy big-screen entertainment anywhere.',
    productIds: [2],
    discount: '15% OFF',
    videoId: 'YOUR_DEAL_VIDEO_ID_2' // Video demonstrating the special deal
  },
  'creator-bundle': {
    title: 'Content Creator Bundle',
    description: 'Take your content creation to the next level with our complete creator package. Get the I & I Vlog Camera and Portable Mini Projector at one special price. Save 20% OFF the complete set for capturing and showcasing your best work.',
    productIds: [1, 2],
    discount: '20% OFF',
    isBundle: true,
    bundlePrice: '₹51,984',
    originalPrice: '₹64,980',
    videoId: 'YOUR_BUNDLE_VIDEO_ID' // Video showing the bundle in action
  }
};

// Contact page information data
const contactInfo = {
  location: {
    icon: "MapMarkerAlt",
    title: "Our Location",
    color: "blue",
    details: [
      "Begumpet, Hyderabad",
      "Telangana 500016",
      "India"
    ]
  },
  phone: {
    icon: "PhoneAlt",
    title: "Phone Support",
    color: "green",
    details: [
      "Customer Care: +91 9030945444",
      "Tech Support: +91 9030945444"
    ],
    highlight: "Toll-Free: 9030945444"
  },
  email: {
    icon: "Envelope",
    title: "Email Us",
    color: "purple",
    details: [
      { type: "text", text: "Customer Support:" },
      { type: "email", text: "israelitesshopping171@gmail.com", href: "mailto:israelitesshopping171@gmail.com" },
      { type: "text", text: "Business Inquiries:" },
      { type: "email", text: "israelitesshopping171@gmail.com", href: "mailto:israelitesshopping171@gmail.com" }
    ]
  },
  hours: {
    icon: "Clock",
    title: "Working Hours",
    color: "amber",
    details: [
      "Monday - Friday: 9:00 AM - 6:00 PM",
      "Saturday: 10:00 AM - 4:00 PM"
    ],
    highlight: "Sunday: Closed"
  }
};

export default { 
  trending, 
  newproduct, 
  brand, 
  productData, 
  trendingpage, 
  productDetailData,
  dealsData,
  contactInfo,
  categoryMappings,
  videos, // Export the videos object
  faqVideos // Export FAQ videos
};