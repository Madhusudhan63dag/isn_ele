import banner1 from '../image/banner/banner1.jpg';
import banner2 from '../image/banner/banner2.jpg';

// Home page banners
const homeBanners = [
  {
    id: 1,
    imageUrl: banner1,
  },
  {
    id: 2,
    imageUrl: banner2,
  }
];

// Trending page banners by category
const trendingBanners = {
  'smartphones': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Premium Smartphones",
      subheading: "Discover the latest and greatest flagship devices"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "5G Technology",
      subheading: "Experience lightning-fast connectivity and performance"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Mobile Photography",
      subheading: "Capture professional-quality photos with advanced camera systems"
    }
  ],
  'laptops': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Premium Laptops",
      subheading: "Powerful performance for work, creativity, and entertainment"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Work From Anywhere",
      subheading: "Lightweight, powerful notebooks for the modern professional"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Gaming Powerhouses",
      subheading: "Immersive gaming experiences with high-refresh displays and powerful GPUs"
    }
  ],
  'audio': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Premium Audio",
      subheading: "Experience music the way it was meant to be heard"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Active Noise Cancellation",
      subheading: "Immerse yourself in music and block out distractions"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Wireless Freedom",
      subheading: "Enjoy high-fidelity sound without the cables"
    }
  ],
  'tvs': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Cinematic Experiences",
      subheading: "Bring the movie theater experience into your home"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "OLED & QLED Technology",
      subheading: "Experience perfect blacks and vibrant colors"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Smart Entertainment",
      subheading: "Access all your favorite content with integrated streaming"
    }
  ],
  'gaming': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Next-Gen Gaming",
      subheading: "Experience the future of interactive entertainment"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Play Anywhere",
      subheading: "Take your games on the go with portable gaming systems"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Gaming Accessories",
      subheading: "Enhance your gameplay with premium peripherals"
    }
  ],
  'smart-home': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1558002038-10058c4219f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Smart Living",
      subheading: "Transform your home with intelligent technology"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1557438159-51eacc7a7b26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Ambient Intelligence",
      subheading: "Create the perfect atmosphere with smart lighting solutions"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1582998122123-b8a3453eae5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      heading: "Home Security",
      subheading: "Keep your home safe with connected security devices"
    }
  ]
};

// Deal page banners
const dealsBanners = {
  'smartphone-sale': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ],
  'laptop-deals': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ],
  'audio-special': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ],
  'entertainment-bundle': [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ]
};

// About page banners
const aboutBanners = [
  {
    id: 1,
    imageUrl: "https://placehold.co/1080x600/e8f5e9/43a047?text=About+GlowGlaz",
    heading: "About GlowGlaz",
    subheading: "Natural wellness solutions for modern living"
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/1080x600/e3f2fd/1e88e5?text=Our+Heritage",
    heading: "Our Heritage",
    subheading: "Blending ancient wisdom with modern science since 2015"
  }
];

// Contact page banners
const contactBanners = [
  {
    id: 1,
    imageUrl: "https://placehold.co/1080x600/e1f5fe/0288d1?text=Contact+GlowGlaz",
    heading: "Contact Us",
    subheading: "We're here to help with all your wellness needs"
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/1080x600/e0f7fa/00bcd4?text=Customer+Support",
    heading: "Customer Support",
    subheading: "Get in touch with our dedicated support team"
  }
];

// FAQ page banners
const faqBanners = [
  {
    id: 1,
    imageUrl: "https://placehold.co/1080x600/e8eaf6/3f51b5?text=Frequently+Asked+Questions",
    heading: "Frequently Asked Questions",
    subheading: "Find answers to common questions about our products and services"
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/1080x600/f3e5f5/9c27b0?text=Help+Center",
    heading: "Help Center",
    subheading: "We're here to assist you with any questions you might have"
  }
];

// Shipping page banners
const shippingBanners = [
  {
    id: 1,
    imageUrl: "https://placehold.co/1080x600/e8f5e9/43a047?text=Shipping+%26+Returns",
    heading: "Shipping & Returns",
    subheading: "Everything you need to know about our delivery and return policies"
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/1080x600/e3f2fd/1e88e5?text=Customer+Satisfaction",
    heading: "Customer Satisfaction Guaranteed",
    subheading: "We want you to be completely satisfied with your purchase"
  }
];

// Privacy page banners
const privacyBanners = [
  {
    id: 1,
    imageUrl: "https://placehold.co/1080x600/efeff9/6366f1?text=Privacy+Policy",
    heading: "Privacy Policy",
    subheading: "How we collect, use, and protect your personal information"
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/1080x600/f0f9ff/2563eb?text=Data+Protection",
    heading: "Data Protection",
    subheading: "We're committed to safeguarding your personal information"
  }
];

// Terms page banners
const termsBanners = [
  { 
    id: 1,
    imageUrl: "https://placehold.co/1080x600/f3f4f6/6b7280?text=Terms+%26+Conditions",
    heading: "Terms & Conditions",
    subheading: "Please read our terms and conditions carefully before using our services"
  },
  {
    id: 2,
    imageUrl: "https://placehold.co/1080x600/eef2ff/4f46e5?text=Legal+Information",
    heading: "Legal Information",
    subheading: "Understanding your rights and our policies"
  }
];

export default {
  homeBanners,
  trendingBanners,
  dealsBanners,
  aboutBanners,
  contactBanners,
  faqBanners,
  shippingBanners,
  privacyBanners,
  termsBanners
};
