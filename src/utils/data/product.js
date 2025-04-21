import soap from "../../utils/image/icon/soap_free.png"
import paraben from '../../utils/image/icon/paraben_Free.png'
import ayush from '../../utils/image/icon/ayush.png'
import bharat from '../../utils/image/icon/bharat.svg'
import cruelty_free from '../../utils/image/icon/cruelty_free.png'
import gmp from '../../utils/image/icon/gmp.png'
import iso from '../../utils/image/icon/iso.svg'
import no_side_effects from '../../utils/image/icon/no_side_effects.svg'
import herbal from '../../utils/image/icon/herbal.png'
import vegetarian from '../../utils/image/icon/vegetarian.png'
import joint_pain from '../../utils/image/icon/joint_pain.png'
import antiInflammatory from '../../utils/image/icon/antiInflammatory.png'
import clinicallytested from '../../utils/image/icon/clinicallytested.png'
import nosyntheticadditives from '../../utils/image/icon/nosyntheticadditives.png'
import phbalanced from '../../utils/image/icon/phbalanced.png'

const trending = [
  {
    id: 'smartphones',
    title: "Smartphones & Accessories",
    imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'laptops',
    title: "Laptops & Computers",
    imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'audio',
    title: "Audio & Headphones",
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'tvs',
    title: "TVs & Displays",
    imageUrl: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'gaming',
    title: "Gaming & Consoles",
    imageUrl: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 'smart-home',
    title: "Smart Home",
    imageUrl: "https://images.unsplash.com/photo-1558002038-10058c4219f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
]

const productData = [
  {
    "id": 1,
    "title": "iPhone 13 Pro Max",
    "description": "Experience the ultimate iPhone with a Super Retina XDR display with ProMotion, A15 Bionic chip, pro camera system, and exceptional battery life.",
    "imageUrl": "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "url": "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "features": [
      { "id": 1, "title": "Super Retina XDR display", "url": "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 2, "title": "A15 Bionic chip", "url": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 3, "title": "Pro camera system", "url": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
    ],
    "price": 109900,
    "rating": 5,
    "reviews": 1243
  },
  {
    "id": 2,
    "title": "Samsung Galaxy S22 Ultra",
    "description": "Experience epic performance with the most powerful Galaxy chipset, lightning-fast processing speeds, and a massive battery that powers your day.",
    "imageUrl": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "url": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "features": [
      { "id": 1, "title": "Dynamic AMOLED 2X display", "url": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 2, "title": "108MP main camera", "url": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 3, "title": "5000mAh battery", "url": "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
    ],
    "price": 99999,
    "rating": 4,
    "reviews": 856
  },
  {
    "id": 3,
    "title": "MacBook Pro 16\"",
    "description": "The most powerful MacBook Pro ever with M1 Pro or M1 Max chip for groundbreaking performance and amazing battery life.",
    "imageUrl": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "features": [
      { "id": 1, "title": "M1 Pro/Max chip", "url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 2, "title": "Liquid Retina XDR display", "url": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 3, "title": "Up to 21 hours battery life", "url": "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
    ],
    "price": 239900,
    "rating": 5,
    "reviews": 612
  },
  {
    "id": 4,
    "title": "Sony WH-1000XM4 Headphones",
    "description": "Industry-leading noise cancellation with premium sound quality and smart listening features that adapt to your environment.",
    "imageUrl": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "url": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "features": [
      { "id": 1, "title": "Industry-leading noise cancellation", "url": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 2, "title": "30-hour battery life", "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 3, "title": "Touch controls", "url": "https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
    ],
    "price": 24990,
    "rating": 4.5,
    "reviews": 3451
  },
  {
    "id": 5,
    "title": "LG C1 65\" OLED TV",
    "description": "Self-lit OLED pixels that turn on and off independently for perfect blacks, over a billion rich colors, and infinite contrast.",
    "imageUrl": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "url": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "features": [
      { "id": 1, "title": "4K OLED Display", "url": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 2, "title": "α9 Gen4 AI Processor", "url": "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 3, "title": "Dolby Vision IQ & Atmos", "url": "https://images.unsplash.com/photo-1528148343865-51218c4a13e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
    ],
    "price": 189999,
    "rating": 4.8,
    "reviews": 1026
  },
  {
    "id": 6,
    "title": "PlayStation 5 Console",
    "description": "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with haptic feedback, and breathtaking new generation of games.",
    "imageUrl": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "url": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "features": [
      { "id": 1, "title": "Ultra-high speed SSD", "url": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 2, "title": "Ray Tracing Support", "url": "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 3, "title": "Haptic Feedback Controls", "url": "https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
    ],
    "price": 49990,
    "rating": 5,
    "reviews": 4287
  }
]

const trendingpage = [
  {
    "id": 1,
    "title": "Smartphones & Accessories",
    "description": "Discover the latest smartphones with cutting-edge technology, stunning cameras, and lightning-fast performance. From budget-friendly options to premium flagship devices, find the perfect smartphone to match your lifestyle and needs.",
    "imageUrl": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "benefits": {
      "title": "Why Choose Our Smartphone Collection",
      "points": [
        {
          "title": "Premium Quality",
          "description": "Every smartphone in our collection undergoes rigorous quality testing to ensure reliable performance and durability."
        },
        {
          "title": "Latest Technology",
          "description": "Stay ahead with the newest features like AI-powered cameras, 5G connectivity, and advanced security systems."
        },
        {
          "title": "Extended Warranty",
          "description": "Enjoy peace of mind with our extended warranty coverage that protects your investment beyond standard manufacturer terms."
        },
        {
          "title": "Expert Support",
          "description": "Our tech specialists are always available to help you set up your device, transfer data, or solve any issues you may encounter."
        }
      ]
    },
    "products": [
      { "id": 1, "title": "iPhone 13 Pro Max", "url": "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 109900 },
      { "id": 2, "title": "Samsung Galaxy S22 Ultra", "url": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 99999 },
      { "id": 7, "title": "Google Pixel 6 Pro", "url": "https://images.unsplash.com/photo-1635870723802-e88d76ae3189?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 79990 },
      { "id": 8, "title": "OnePlus 10 Pro", "url": "https://images.unsplash.com/photo-1646824864629-f32ef0010b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 66999 },
      { "id": 9, "title": "Xiaomi 12 Pro", "url": "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 62999 }
    ],
    "banner": [
      {
        "id": 1,
        "imageUrl": "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Premium Smartphones",
        "subheading": "Discover the latest and greatest flagship devices"
      },
      {
        "id": 2,
        "imageUrl": "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "5G Technology",
        "subheading": "Experience lightning-fast connectivity and performance"
      },
      {
        "id": 3,
        "imageUrl": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Mobile Photography",
        "subheading": "Capture professional-quality photos with advanced camera systems"
      }
    ]
  },
  {
    "id": 2,
    "title": "Laptops & Computers",
    "description": "Browse our extensive range of laptops from top brands like Apple, Dell, HP, and more. Whether you need a powerful workstation for creative tasks, a gaming laptop for immersive experiences, or a lightweight ultrabook for everyday use, we have options for every need and budget.",
    "imageUrl": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "benefits": {
      "title": "Finding Your Perfect Computing Solution",
      "points": [
        {
          "title": "Performance Options",
          "description": "From everyday tasks to professional workloads, our range offers the right processing power for your needs."
        },
        {
          "title": "Display Excellence",
          "description": "Experience vibrant colors, sharp resolution, and eye-care technology across our laptop selection."
        },
        {
          "title": "Battery Longevity",
          "description": "Stay productive all day with laptops engineered for extended battery performance."
        },
        {
          "title": "Build Quality",
          "description": "Durable materials and precision engineering ensure your investment lasts for years."
        }
      ]
    },
    "products": [
      { "id": 3, "title": "MacBook Pro 16\"", "url": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 239900 },
      { "id": 10, "title": "Dell XPS 15", "url": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 189900 },
      { "id": 11, "title": "HP Spectre x360", "url": "https://images.unsplash.com/photo-1544731612-de7f96afe55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 129990 },
      { "id": 12, "title": "ASUS ROG Zephyrus", "url": "https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 149990 }
    ],
    "banner": [
      {
        "id": 1,
        "imageUrl": "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Premium Laptops",
        "subheading": "Powerful performance for work, creativity, and entertainment"
      },
      {
        "id": 2,
        "imageUrl": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Work From Anywhere",
        "subheading": "Lightweight, powerful notebooks for the modern professional"
      },
      {
        "id": 3,
        "imageUrl": "https://images.unsplash.com/photo-1563770660941-20978e870e26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Gaming Powerhouses",
        "subheading": "Immersive gaming experiences with high-refresh displays and powerful GPUs"
      }
    ]
  },
  {
    "id": 3,
    "title": "Audio & Headphones",
    "description": "Immerse yourself in premium sound quality with our collection of headphones, earbuds, and speakers. From noise-cancelling technology to audiophile-grade equipment, discover audio devices that deliver crystal-clear sound for music, calls, gaming, and more.",
    "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "benefits": {
      "title": "The Perfect Audio Experience",
      "points": [
        {
          "title": "Sound Engineering",
          "description": "Enjoy balanced acoustics with deep bass and crisp highs from industry-leading audio engineers."
        },
        {
          "title": "Noise Isolation",
          "description": "Focus on what matters with advanced noise-cancellation technology that adapts to your environment."
        },
        {
          "title": "Comfortable Design",
          "description": "Premium materials and ergonomic designs ensure comfort during extended listening sessions."
        },
        {
          "title": "Wireless Freedom",
          "description": "Experience high-fidelity sound without compromising on convenience with our wireless audio solutions."
        }
      ]
    },
    "products": [
      { "id": 4, "title": "Sony WH-1000XM4", "url": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 24990 },
      { "id": 13, "title": "Apple AirPods Pro", "url": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 24900 },
      { "id": 14, "title": "Bose QuietComfort 45", "url": "https://images.unsplash.com/photo-1606400082777-ef05f3c5252b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 29900 },
      { "id": 15, "title": "JBL Flip 6 Speaker", "url": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 9990 },
      { "id": 16, "title": "Sennheiser HD 660S", "url": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 39990 }
    ],
    "banner": [
      {
        "id": 1,
        "imageUrl": "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Premium Audio",
        "subheading": "Experience music the way it was meant to be heard"
      },
      {
        "id": 2,
        "imageUrl": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Active Noise Cancellation",
        "subheading": "Immerse yourself in music and block out distractions"
      },
      {
        "id": 3,
        "imageUrl": "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Wireless Freedom",
        "subheading": "Enjoy high-fidelity sound without the cables"
      }
    ]
  },
  {
    "id": 4,
    "title": "TVs & Displays",
    "description": "Transform your entertainment experience with our selection of cutting-edge TVs and displays. From stunning OLED and QLED displays to smart TVs with integrated streaming services, find the perfect screen for your movies, shows, and games.",
    "imageUrl": "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "benefits": {
      "title": "Elevate Your Viewing Experience",
      "points": [
        {
          "title": "Picture Quality",
          "description": "Enjoy breathtaking visuals with our range of 4K and 8K resolution displays featuring HDR technology."
        },
        {
          "title": "Smart Integration",
          "description": "Access your favorite streaming platforms and control your smart home devices from your TV."
        },
        {
          "title": "Gaming Performance",
          "description": "Experience responsive gaming with low latency displays featuring high refresh rates and VRR support."
        },
        {
          "title": "Sound Innovation",
          "description": "Built-in premium audio systems deliver immersive sound without additional equipment."
        }
      ]
    },
    "products": [
      { "id": 5, "title": "LG C1 65\" OLED TV", "url": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 189999 },
      { "id": 17, "title": "Samsung QN90A 55\" QLED", "url": "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 149990 },
      { "id": 18, "title": "Sony A80J 65\" OLED", "url": "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 178990 },
      { "id": 19, "title": "TCL 6-Series 65\" QLED", "url": "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 89990 }
    ],
    "banner": [
      {
        "id": 1,
        "imageUrl": "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Cinematic Experiences",
        "subheading": "Bring the movie theater experience into your home"
      },
      {
        "id": 2,
        "imageUrl": "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "OLED & QLED Technology",
        "subheading": "Experience perfect blacks and vibrant colors"
      },
      {
        "id": 3,
        "imageUrl": "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Smart Entertainment",
        "subheading": "Access all your favorite content with integrated streaming"
      }
    ]
  },
  {
    "id": 5,
    "title": "Gaming & Consoles",
    "description": "Level up your gaming experience with the latest consoles, accessories, and gaming peripherals. From next-gen systems to high-performance controllers and immersive headsets, find everything you need to enhance your gameplay.",
    "imageUrl": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "benefits": {
      "title": "Gaming Without Limits",
      "points": [
        {
          "title": "Performance Power",
          "description": "Experience lightning-fast loading times and smooth gameplay with the latest hardware."
        },
        {
          "title": "Immersive Control",
          "description": "Feel every moment with controllers featuring adaptive triggers and haptic feedback."
        },
        {
          "title": "Exclusive Content",
          "description": "Access platform-exclusive games and content from award-winning studios."
        },
        {
          "title": "Multiplayer Ecosystem",
          "description": "Connect with a global gaming community through robust online services."
        }
      ]
    },
    "products": [
      { "id": 6, "title": "PlayStation 5 Console", "url": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 49990 },
      { "id": 20, "title": "Xbox Series X", "url": "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 49990 },
      { "id": 21, "title": "Nintendo Switch OLED", "url": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 34990 },
      { "id": 22, "title": "Razer Kraken Gaming Headset", "url": "https://images.unsplash.com/photo-1591105575835-c0944979537c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 8999 }
    ],
    "banner": [
      {
        "id": 1,
        "imageUrl": "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Next-Gen Gaming",
        "subheading": "Experience the future of interactive entertainment"
      },
      {
        "id": 2,
        "imageUrl": "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Play Anywhere",
        "subheading": "Take your games on the go with portable gaming systems"
      },
      {
        "id": 3,
        "imageUrl": "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Gaming Accessories",
        "subheading": "Enhance your gameplay with premium peripherals"
      }
    ]
  },
  {
    "id": 6,
    "title": "Smart Home",
    "description": "Make your home smarter, safer, and more efficient with our range of smart home devices. From voice assistants and smart displays to connected appliances, security systems, and lighting solutions, create the perfect automated home environment.",
    "imageUrl": "https://images.unsplash.com/photo-1558002038-10058c4219f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    "benefits": {
      "title": "The Connected Home Experience",
      "points": [
        {
          "title": "Voice Control",
          "description": "Control your entire home ecosystem with simple voice commands via smart assistants."
        },
        {
          "title": "Enhanced Security",
          "description": "Monitor and protect your home with smart cameras, doorbells, and security systems."
        },
        {
          "title": "Energy Efficiency",
          "description": "Reduce energy consumption with smart thermostats, plugs, and automated lighting."
        },
        {
          "title": "Seamless Integration",
          "description": "All our smart home products work together within popular ecosystems like Google Home, Alexa, and HomeKit."
        }
      ]
    },
    "products": [
      { "id": 23, "title": "Amazon Echo Show 10", "url": "https://images.unsplash.com/photo-1558002038-10058c4219f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 12999 },
      { "id": 24, "title": "Google Nest Hub", "url": "https://images.unsplash.com/photo-1544428571-c3cd82d1f069?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 7999 },
      { "id": 25, "title": "Philips Hue Starter Kit", "url": "https://images.unsplash.com/photo-1557438159-51eacc7a7b26?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 9990 },
      { "id": 26, "title": "Ring Video Doorbell Pro", "url": "https://images.unsplash.com/photo-1582998122123-b8a3453eae5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80", "price": 15990 }
    ],
    "banner": [
      {
        "id": 1,
        "imageUrl": "https://images.unsplash.com/photo-1558002038-10058c4219f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Smart Living",
        "subheading": "Transform your home with intelligent technology"
      },
      {
        "id": 2,
        "imageUrl": "https://images.unsplash.com/photo-1557438159-51eacc7a7b26?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Ambient Intelligence",
        "subheading": "Create the perfect atmosphere with smart lighting solutions"
      },
      {
        "id": 3,
        "imageUrl": "https://images.unsplash.com/photo-1582998122123-b8a3453eae5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
        "heading": "Home Security",
        "subheading": "Keep your home safe with connected security devices"
      }
    ]
  }
]

const newproduct = [
  {
    id: 1,
    name: "Sampoorn Arogya",
    image: "sampoorn-arogya.jpg",
    price: 3990
  },
  {
    id: 2,
    name: "Dr. Joints",
    image: "dr-joints.jpg",
    price: 3990
  },
  
  {
    id: 3,
    name: "Beyondslim",
    image: "beyondslim.jpg",
    price: 3990
  },
  {
    id: 4,
    name: "PSORIGO Body Lotion",
    image: "psorigo-oil.jpg",
    price: 1499
  },
    {
    id: 5,
    name: "PSORIGO Body Wash",
    image: "psorigo-oil.jpg",
    price: 1499
  },
    {
    id: 6,
    name: "PSORIGO Oil",
    image: "psorigo-oil.jpg",
    price: 1499
  },
]

const brand = [
  {
    id: 1,
    name: "Sampoorn Arogya",
    image: "sampoorn-arogya.jpg",
  },
  {
    id: 2,
    name: "Dr. Joints",
    image: "dr-joints.jpg",
  },
  
  {
    id: 3,
    name: "Beyondslim",
    image: "beyondslim.jpg",
  },
  {
    id: 4,
    name: "PSORIGO ",
    image: "psorigo-oil.jpg",
  }
]



const productDetailData = [
  {
    "id": 1,
    "title": "Sampoorn Arogya Herbal Supplement",
    "price": "₹3,990",
    "images": [
      "https://placehold.co/500x500/e3f2fd/1e88e5?text=Sampoorn+Arogya+1",
      "https://placehold.co/500x500/e3f2fd/1e88e5?text=Sampoorn+Arogya+2",
      "https://placehold.co/500x500/e3f2fd/1e88e5?text=Sampoorn+Arogya+3",
      "https://placehold.co/500x500/e3f2fd/1e88e5?text=Sampoorn+Arogya+4"
    ],
    "badge": "New",
    "whyLoveIt": "Revitalize your body from within with Sampoorn Arogya—an all-in-one Ayurvedic supplement crafted to strengthen immunity, improve digestion, and boost daily energy. Backed by ancient wisdom and modern science, it's your go-to for total wellness support.",
    "ingredients": "Ashwagandha, Triphala, Shatavari, Guduchi, Brahmi, Turmeric, Ginger, Pippali, and other traditional Ayurvedic herbs.",
    "allergens": ["No known allergens"],
    "values": [
      { "code": "AY", "name": "Ayurvedic", "img": ayush },
      { "code": "HB", "name": "Herbal", "img": herbal },
      { "code": "VG", "name": "Vegetarian", "img": vegetarian }
    ],
    "inStock": true
  },
  {
    "id": 2,
    "title": "Dr. Joints Advanced Joint Health Formula",
    "price": "₹3,990",
    "images": [
      "https://placehold.co/500x500/e8f5e9/43a047?text=Dr+Joints+1",
      "https://placehold.co/500x500/e8f5e9/43a047?text=Dr+Joints+2",
      "https://placehold.co/500x500/e8f5e9/43a047?text=Dr+Joints+3",
      "https://placehold.co/500x500/e8f5e9/43a047?text=Dr+Joints+4"
    ],
    "badge": "Bestseller",
    "whyLoveIt": "Say goodbye to joint discomfort with Dr. Joints—your daily dose of comfort and flexibility. Powered by FruiteX-B and key joint-support nutrients, this formula helps reduce stiffness, ease movement, and keep you active without limits.",
    "ingredients": "FruiteX-B (calcium fructoborate), Glucosamine Sulfate, Chondroitin Sulfate, MSM (Methylsulfonylmethane), Boswellia Extract, Turmeric Extract, Ginger Extract.",
    "allergens": ["Shellfish (from Glucosamine)"],
    "values": [
      { "code": "JH", "name": "Joint Health", "img": joint_pain },
      { "code": "AI", "name": "Anti-Inflammatory", "img": antiInflammatory },
      { "code": "CT", "name": "Clinically Tested", "img": clinicallytested }
    ],
    "inStock": true
  },
  {
    "id": 3,
    "title": "Beyond Slim Ayurvedic Slimming Oil",
    "price": "₹3,990",
    "images": [
      "https://placehold.co/500x500/fff3e0/ff9800?text=Beyond+Slim+Oil+1",
      "https://placehold.co/500x500/fff3e0/ff9800?text=Beyond+Slim+Oil+2",
      "https://placehold.co/500x500/fff3e0/ff9800?text=Beyond+Slim+Oil+3",
      "https://placehold.co/500x500/fff3e0/ff9800?text=Beyond+Slim+Oil+4"
    ],
    "badge": "Popular",
    "whyLoveIt": "Target stubborn fat, tone your body, and nourish your skin with Beyond Slim Ayurvedic Slimming Oil—made with potent herbal extracts and time-tested Ayurvedic ingredients. It's your natural solution to inch loss and improved skin elasticity.",
    "ingredients": "Sesame Oil, Castor Oil, Garlic Extract, Cinnamon Oil, Eucalyptus Oil, Ginger Extract, Lemon Oil, Camphor, Ajwain Oil, Clove Oil, Ayurvedic Herbs.",
    "values": [
      { "code": "AI", "name": "Ayurvedic Ingredients", "img": ayush },
      { "code": "VF", "name": "Vegan & Cruelty-Free", "img": cruelty_free },
      { "code": "NS", "name": "No Synthetic Additives", "img": nosyntheticadditives }
    ],
    "inStock": true
  },
  {
    "id": 4,
    "title": "PSORIGO Body Lotion",
    "price": "₹1,499",
    "images": [
      "https://placehold.co/500x500/e1f5fe/03a9f4?text=PSORIGO+Lotion+1",
      "https://placehold.co/500x500/e1f5fe/03a9f4?text=PSORIGO+Lotion+2",
      "https://placehold.co/500x500/e1f5fe/03a9f4?text=PSORIGO+Lotion+3",
      "https://placehold.co/500x500/e1f5fe/03a9f4?text=PSORIGO+Lotion+4"
    ],
    "badge": "Dermatologist Approved",
    "whyLoveIt": "Soothe, hydrate, and heal with PSORIGO Body Lotion—formulated for psoriasis-prone skin. This gentle yet powerful blend helps reduce flaking, calm irritation, and restore your skin’s natural softness and strength.",
    "ingredients": "Purified Water, Aloe Vera Extract, Shea Butter, Coconut Oil, Neem Extract, Turmeric Extract, Tea Tree Oil, Calendula Extract, Vitamin E, Glycerin, Natural Preservatives.",
    "allergens": ["May contain tree nut derivatives (coconut, shea)"],
    "values": [
      { "code": "SF", "name": "Soap-Free", "img": soap },
      { "code": "PF", "name": "Paraben-Free", "img": paraben },
      { "code": "pH", "name": "pH Balanced", "img": phbalanced }
    ],
    "inStock": true
  },
  {
    "id": 5,
    "title": "PSORIGO Body Wash",
    "price": "₹1,499",
    "images": [
      "https://placehold.co/500x500/e1f5fe/0288d1?text=PSORIGO+Wash+1",
      "https://placehold.co/500x500/e1f5fe/0288d1?text=PSORIGO+Wash+2",
      "https://placehold.co/500x500/e1f5fe/0288d1?text=PSORIGO+Wash+3",
      "https://placehold.co/500x500/e1f5fe/0288d1?text=PSORIGO+Wash+4"
    ],
    "badge": "Gentle Formula",
    "whyLoveIt": "Cleanse with care using PSORIGO Body Wash—a soap-free formula designed for sensitive, psoriasis-prone skin. It gently lifts away impurities while locking in moisture, leaving your skin calm, clean, and comforted.",
    "ingredients": "Purified Water, Glycerin, Aloe Vera Juice, Decyl Glucoside (Plant-Based Cleanser), Dead Sea Minerals, Colloidal Oatmeal, Chamomile Extract, Lavender Oil, Vitamin B5, Natural Preservatives.",
    "allergens": ["May contain oat derivatives"],
    "values": [
      { "code": "SF", "name": "Soap-Free", "img": soap },
      { "code": "PF", "name": "Paraben-Free", "img": paraben },
      { "code": "pH", "name": "pH Balanced", "img": phbalanced }
    ],
    "inStock": true
  },
  {
    "id": 6,
    "title": "PSORIGO Oil",
    "price": "₹1,499",
    "images": [
      "https://placehold.co/500x500/e0f2f1/00897b?text=PSORIGO+Oil+1",
      "https://placehold.co/500x500/e0f2f1/00897b?text=PSORIGO+Oil+2",
      "https://placehold.co/500x500/e0f2f1/00897b?text=PSORIGO+Oil+3",
      "https://placehold.co/500x500/e0f2f1/00897b?text=PSORIGO+Oil+4"
    ],
    "badge": "100% Natural",
    "whyLoveIt": "Target psoriasis symptoms at the root with PSORIGO Oil—a rich, herbal treatment that hydrates deeply, soothes itchiness, and reduces inflammation. Fast-absorbing and non-greasy, it leaves your skin feeling calm and cared for.",
    "ingredients": "Coconut Oil, Neem Oil, Tea Tree Oil, Black Seed Oil, Turmeric Extract, Aloe Vera Extract, Vitamin E, Evening Primrose Oil, Calendula Oil, Jojoba Oil.",
    "allergens": ["May contain tree nut derivatives (coconut, jojoba)"],
    "values": [
      { "code": "SF", "name": "Soap-Free", "img": soap },
      { "code": "PF", "name": "Paraben-Free", "img": paraben },
      { "code": "pH", "name": "pH Balanced", "img": phbalanced }
    ],
    "inStock": true
  }
]

// Deal data moved from DealsPage.js
const dealsData = {
  'smartphone-sale': {
    title: 'Smartphone Flash Sale',
    description: 'Upgrade your smartphone experience with the latest flagship devices. Get premium features, stunning cameras, and lightning-fast performance at unbeatable prices with up to 15% OFF for a limited time.',
    productIds: [1, 2],  // iPhone 13 Pro Max, Samsung Galaxy S22 Ultra
    discount: '15% OFF',
    banners: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      }
    ]
  },
  'laptop-deals': {
    title: 'Premium Laptop Offers',
    description: 'Enhance your productivity with our selection of high-performance laptops. Featuring powerful processors, stunning displays, and all-day battery life. Now available at 10% OFF. Perfect for work, creativity, and entertainment.',
    productIds: [3], // MacBook Pro 16"
    discount: '10% OFF',
    banners: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      }
    ]
  },
  'audio-special': {
    title: 'Audio Equipment Special',
    description: 'Immerse yourself in premium sound quality with our noise-cancelling headphones and wireless earbuds. Engineered for crystal-clear audio and comfortable all-day wear—now 12% OFF. Experience music the way it was meant to be heard.',
    productIds: [4], // Sony WH-1000XM4 Headphones
    discount: '12% OFF',
    banners: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      }
    ]
  },
  'entertainment-bundle': {
    title: 'Home Entertainment Bundle',
    description: 'Transform your living room with our complete entertainment package. Get a premium OLED TV, gaming console, and headphones at one special price. Save big with 20% OFF the complete set for the ultimate entertainment experience.',
    productIds: [5, 6], // LG C1 65" OLED TV, PlayStation 5 Console
    discount: '20% OFF',
    isBundle: true,
    bundlePrice: '₹191,999',
    originalPrice: '₹239,989',
    banners: [
      {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      },
      {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
      }
    ]
  }
};


// About page banner data
const aboutBanner = [
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

// Contact page banner data
const contactBanner = [
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

// Contact page information data
const contactInfo = {
  location: {
    icon: "MapMarkerAlt",
    title: "Our Location",
    color: "blue",
    details: [
      "123 Wellness Way",
      "Ayurveda Heights",
      "New Delhi, 110001",
      "India"
    ]
  },
  phone: {
    icon: "PhoneAlt",
    title: "Phone Support",
    color: "green",
    details: [
      "Customer Care: +91 98765 43210",
      "Order Support: +91 98765 54321"
    ],
    highlight: "Toll-Free: 1800-123-4567"
  },
  email: {
    icon: "Envelope",
    title: "Email Us",
    color: "purple",
    details: [
      { type: "text", text: "Customer Support:" },
      { type: "email", text: "support@glowglaz.com", href: "mailto:support@glowglaz.com" },
      { type: "text", text: "Business Inquiries:" },
      { type: "email", text: "info@glowglaz.com", href: "mailto:info@glowglaz.com" }
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

// Product support categories
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

// FAQ page banner data
const faqBanner = [
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

// Shipping page banner data
const shippingBanner = [
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

// Privacy page banner data
const privacyBanner = [
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

// Terms page banner data
const termsBanner = [
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
          content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security."
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
      content: "To the fullest extent permitted by applicable law, GlowGlaz shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:",
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
      content: "Questions about the Terms and Conditions should be sent to us at:",
      contactDetails: {
        email: "legal@glowglaz.com",
        phone: "+91 98765 43210",
        address: "GlowGlaz Legal Department, 123 Wellness Way, Ayurveda Heights, New Delhi, 110001, India"
      }
    }
  ]
};

export default { 
  trending, 
  newproduct, 
  brand, 
  productData, 
  trendingpage, 
  productDetailData,
  dealsData,
  aboutBanner,
  contactBanner,
  contactInfo,
  productSupport,
  contactFaqs,
  faqBanner,
  faqData,
  shippingBanner,
  shippingPolicy,
  returnPolicy,
  shippingFaqs,
  privacyBanner,
  privacyPolicy,
  termsBanner,
  termsAndConditions
};