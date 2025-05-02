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


// Define category mappings to make filtering more dynamic
const categoryMappings = {
  'cameras': ['camera', 'vlog', 'recorder', 'video'],
  'projectors': ['projector', 'display', 'cinema'],
  // Add more mappings as needed
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
    imageUrl: project8,
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
    "rating": 4.8,
    "reviews": 254
  },
  {
    "id": 2,
    "title": "I & I Portable Mini Projector Standard Edition",
    "description": "Cute, ultra-portable projector with advanced Wi-Fi 6 and Bluetooth 5.0 connectivity. Delivers HD 720P resolution with auto-keystone correction, multiple interfaces, and built-in Android 13.0 with streaming apps.",
    "imageUrl": project3,
    "url": project7,
    "features": [
      { "id": 1, "title": "Wi-Fi 6 & Bluetooth 5.0", "url": "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 2, "title": "HD 720P Resolution", "url": "https://images.unsplash.com/photo-1601944177325-f8867652837f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" },
      { "id": 3, "title": "Android 13.0 OS", "url": "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }
    ],
    "price": 6990,
    "rating": 4.5,
    "reviews": 187
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
      },
      // {
      //   "id": 2,
      //   "imageUrl": "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      //   "heading": "Always Connected",
      //   "subheading": "Stream live and backup footage with built-in 4G LTE"
      // },
      // {
      //   "id": 3,
      //   "imageUrl": "https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      //   "heading": "24/7 Recording",
      //   "subheading": "Capture clear footage day or night with infrared technology"
      // }
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
      },
      // {
      //   "id": 2,
      //   "imageUrl": "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      //   "heading": "Wireless Freedom",
      //   "subheading": "Stream content easily with advanced Wi-Fi 6 connectivity"
      // },
      // {
      //   "id": 3,
      //   "imageUrl": "https://images.unsplash.com/photo-1633412802994-5c058f151b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80",
      //   "heading": "Smart Projector",
      //   "subheading": "Android 13.0 with built-in streaming apps for instant entertainment"
      // }
    ]
  }
]

// Keep existing data structures but update the content
const newproduct = [
  {
    id: 1,
    name: "I & I Vlog Camera",
    image: vlog3,
    price: 5990
  },
  {
    id: 2,
    name: "I & I Portable Mini Projector",
    image: project3,
    price: 6990
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
    // "values": [
    //   { "code": "4K", "name": "4K UHD Video", "img": iso },
    //   { "code": "4G", "name": "4G LTE Connectivity", "img": gmp },
    //   { "code": "NV", "name": "Night Vision", "img": no_side_effects }
    // ],
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
    "tabs": [
      {
        "id": "description",
        "label": "Description",
        "content": "<div class=\"grid md:grid-cols-2 gap-8\"><div><h3 class=\"font-bold text-lg mb-3 text-gray-800\">WHY YOU'LL LOVE IT</h3><div class=\"text-gray-700 space-y-4\"><p>The I & I Vlog Camera Standard Edition is the ultimate portable 4G LTE recorder designed for professionals, enthusiasts, and anyone who needs reliable video recording with advanced connectivity.</p><p>With 4K UHD video capability and a 180° rotatable lens, you can capture stunning footage in any environment. The built-in infrared night-vision ensures clear recording even in low-light conditions up to 10 meters away.</p><p>What sets this camera apart is its 4G LTE connectivity, enabling live streaming and automatic cloud backup without needing Wi-Fi. The one-click SOS calling feature adds an extra layer of security for users in remote or challenging situations.</p></div></div><div><h3 class=\"font-bold text-lg mb-3 text-gray-800\">FEATURES</h3><div class=\"text-gray-700\"><ul class=\"list-disc pl-5 space-y-2\"><li>4K UHD video (3840 × 2160 @ 30 fps)</li><li>1080p @ 60 fps recording</li><li>2.4″ IPS touchscreen</li><li>180° rotatable lens</li><li>Infrared night-vision up to 10 m</li><li>One-click SOS calling</li><li>4G LTE live streaming</li><li>Dual storage: microSD up to 256 GB + AES-256 cloud backup</li><li>Smart auto-save on power loss</li><li>Professional-grade build</li></ul></div></div></div>"
      },
      {
        "id": "specs",
        "label": "Specifications",
        "content": "<div class=\"grid md:grid-cols-2 gap-8\"><div><h3 class=\"font-bold text-lg mb-3 text-gray-800\">TECHNICAL SPECIFICATIONS</h3><div class=\"border-t border-gray-200\"><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"><div class=\"font-medium text-gray-600\">Video</div><div class=\"text-gray-800\">4K UHD (3840 × 2160 @ 30 fps)</div></div><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"><div class=\"font-medium text-gray-600\">Display</div><div class=\"text-gray-800\">2.4″ IPS touchscreen</div></div><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"><div class=\"font-medium text-gray-600\">Connectivity</div><div class=\"text-gray-800\">4G LTE, Wi-Fi, Bluetooth 5.0</div></div><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"><div class=\"font-medium text-gray-600\">Storage</div><div class=\"text-gray-800\">MicroSD up to 256 GB</div></div><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"><div class=\"font-medium text-gray-600\">Battery</div><div class=\"text-gray-800\">5000mAh, 8h recording</div></div></div></div><div><h3 class=\"font-bold text-lg mb-3 text-gray-800\">BOX CONTENTS</h3><ul class=\"list-disc pl-5 space-y-2 text-gray-700\"><li>I & I Vlog Camera</li><li>5000mAh Lithium-ion Battery</li><li>USB-C Charging Cable</li><li>18W Power Adapter</li><li>Mini Tripod</li><li>Protective Case</li><li>Lens Cleaning Cloth</li><li>Quick Start Guide</li><li>Warranty Card (1 Year)</li></ul></div></div>"
      },
      {
        "id": "reviews",
        "label": "Reviews",
        "content": "<div><div class=\"flex flex-col md:flex-row md:items-center gap-6 mb-8\"><div class=\"md:w-1/3 flex flex-col items-center justify-center\"><div class=\"text-5xl font-bold text-gray-800\">4.8</div><div class=\"flex my-2\">{[1, 2, 3, 4, 5].map((star) => (<Star key={star} size={20} className={star <= 4.8 ? \"text-yellow-400 fill-yellow-400\" : \"text-gray-300\"} />))}</div><div class=\"text-sm text-gray-500\">Based on 254 reviews</div></div><div class=\"md:w-2/3 space-y-2\"><div class=\"flex items-center\"><span class=\"text-sm w-8\">5★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style={{width: '70%'}}></div></div><span class=\"text-sm w-8 text-gray-500\">70%</span></div><div class=\"flex items-center\"><span class=\"text-sm w-8\">4★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style={{width: '20%'}}></div></div><span class=\"text-sm w-8 text-gray-500\">20%</span></div><div class=\"flex items-center\"><span class=\"text-sm w-8\">3★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style={{width: '7%'}}></div></div><span class=\"text-sm w-8 text-gray-500\">7%</span></div><div class=\"flex items-center\"><span class=\"text-sm w-8\">2★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style={{width: '2%'}}></div></div><span class=\"text-sm w-8 text-gray-500\">2%</span></div><div class=\"flex items-center\"><span class=\"text-sm w-8\">1★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style={{width: '1%'}}></div></div><span class=\"text-sm w-8 text-gray-500\">1%</span></div></div></div><div class=\"border-t border-gray-200 pt-6\"><div class=\"space-y-6\"><div class=\"border-b border-gray-200 pb-6\"><div class=\"flex items-center mb-2\"><div class=\"flex\">{[1, 2, 3, 4, 5].map((star) => (<Star key={star} size={16} className=\"text-yellow-400 fill-yellow-400\" />))}</div><span class=\"ml-2 font-medium\">Excellent camera for vlogging!</span></div><p class=\"text-gray-600 mb-2\">This camera exceeded my expectations. The 4K quality is amazing, and the night vision feature works incredibly well for evening shots. The SOS feature gives me peace of mind when I'm out filming alone.</p><div class=\"text-sm text-gray-500\"><span class=\"font-medium\">Rahul M.</span> - April 15, 2025</div></div><div class=\"border-b border-gray-200 pb-6\"><div class=\"flex items-center mb-2\"><div class=\"flex\">{[1, 2, 3, 4, 5].map((star) => (<Star key={star} size={16} className={star <= 4 ? \"text-yellow-400 fill-yellow-400\" : \"text-gray-300\"} />))}</div><span class=\"ml-2 font-medium\">Great value, slightly bulky</span></div><p class=\"text-gray-600 mb-2\">I've been using this for about a month now and I'm very impressed with the quality and features. My only complaint is it's a bit larger than I expected. The 4G streaming works flawlessly though!</p><div class=\"text-sm text-gray-500\"><span class=\"font-medium\">Priya K.</span> - April 3, 2025</div></div></div></div></div>"
      }
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
    // "values": [
    //   { "code": "W6", "name": "Wi-Fi 6", "img": iso },
    //   { "code": "BT", "name": "Bluetooth 5.0", "img": gmp },
    //   { "code": "AN", "name": "Android 13.0", "img": no_side_effects }
    // ],
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
    "tabs": [
      {
        "id": "description",
        "label": "Description",
        "content": "<div class=\"grid md:grid-cols-2 gap-8\"><div><h3 class=\"font-bold text-lg mb-3 text-gray-800\">WHY YOU'LL LOVE IT</h3><div class=\"text-gray-700 space-y-4\"><p>The I & I Portable Mini Projector Standard Edition transforms any wall into a big screen for entertainment, presentations, or gaming. This ultra-portable device delivers HD 720P resolution with amazing clarity and vibrant colors.</p><p>With advanced Wi-Fi 6 and Bluetooth 5.0 connectivity, you can stream content smoothly or connect external speakers for enhanced audio. The built-in Android 13.0 operating system gives you direct access to popular streaming apps like Netflix, YouTube, and Prime Video without needing additional devices.</p><p>Featuring auto-keystone correction and manual focus controls, setting up your projection is quick and hassle-free. Multiple interface options including HDMI and USB ensure compatibility with laptops, gaming consoles, streaming sticks, and more.</p></div></div><div><h3 class=\"font-bold text-lg mb-3 text-gray-800\">FEATURES</h3><div class=\"text-gray-700\"><ul class=\"list-disc pl-5 space-y-2\"><li>HD 720P LCD projection</li><li>Wi-Fi 6 for fast, lag-free streaming</li><li>Bluetooth 5.0 for audio connections</li><li>Auto-keystone correction</li><li>Multiple interfaces: HDMI, USB, audio-out</li><li>Android 13.0 OS</li><li>Built-in streaming apps (Netflix, YouTube, Prime Video)</li><li>3W cavity-design speaker system</li><li>Manual focus controls</li><li>Ultra-portable design</li></ul></div></div></div>"
      },
      {
        "id": "specs",
        "label": "Specifications",
        "content": "<div class=\"grid md:grid-cols-2 gap-8\"><div><h3 class=\"font-bold text-lg mb-3 text-gray-800\">TECHNICAL SPECIFICATIONS</h3><div class=\"border-t border-gray-200\"><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"><div class=\"font-medium text-gray-600\">Display</div><div class=\"text-gray-800\">HD 720P LCD projection</div></div><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"><div class=\"font-medium text-gray-600\">Brightness</div><div class=\"text-gray-800\">100 ANSI lumens</div></div><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"><div class=\"font-medium text-gray-600\">Connectivity</div><div class=\"text-gray-800\">Wi-Fi 6, Bluetooth 5.0</div></div><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"><div class=\"font-medium text-gray-600\">OS</div><div class=\"text-gray-800\">Android 13.0</div></div><div class=\"grid grid-cols-2 py-3 border-b border-gray-200\"></div></div></div><div><h3 class=\"font-bold text-lg mb-3 text-gray-800\">BOX CONTENTS</h3><ul class=\"list-disc pl-5 space-y-2 text-gray-700\"><li>I & I Portable Mini Projector</li><li>Remote Control</li><li>Power Adapter</li><li>HDMI Cable</li><li>Mini Tripod</li><li>Carrying Case</li><li>User Manual</li><li>Warranty Card (1 Year)</li></ul></div></div>"
      },
      {
        "id": "reviews",
        "label": "Reviews",
        "content": "<div><div class=\"flex flex-col md:flex-row md:items-center gap-6 mb-8\"><div class=\"md:w-1/3 flex flex-col items-center justify-center\"><div class=\"text-5xl font-bold text-gray-800\">4.5</div><div class=\"flex my-2\"><span class=\"text-yellow-400\">★★★★</span><span class=\"text-gray-300\">★</span></div><div class=\"text-sm text-gray-500\">Based on 187 reviews</div></div><div class=\"md:w-2/3 space-y-2\"><div class=\"flex items-center\"><span class=\"text-sm w-8\">5★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style=\"width: 60%\"></div></div><span class=\"text-sm w-8 text-gray-500\">60%</span></div><div class=\"flex items-center\"><span class=\"text-sm w-8\">4★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style=\"width: 30%\"></div></div><span class=\"text-sm w-8 text-gray-500\">30%</span></div><div class=\"flex items-center\"><span class=\"text-sm w-8\">3★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style=\"width: 6%\"></div></div><span class=\"text-sm w-8 text-gray-500\">6%</span></div><div class=\"flex items-center\"><span class=\"text-sm w-8\">2★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style=\"width: 3%\"></div></div><span class=\"text-sm w-8 text-gray-500\">3%</span></div><div class=\"flex items-center\"><span class=\"text-sm w-8\">1★</span><div class=\"flex-grow h-2 mx-2 bg-gray-200 rounded-full overflow-hidden\"><div class=\"bg-yellow-400 h-full rounded-full\" style=\"width: 1%\"></div></div><span class=\"text-sm w-8 text-gray-500\">1%</span></div></div></div><div class=\"border-t border-gray-200 pt-6\"><div class=\"space-y-6\"><div class=\"border-b border-gray-200 pb-6\"><div class=\"flex items-center mb-2\"><div class=\"flex text-yellow-400\">★★★★★</div><span class=\"ml-2 font-medium\">Perfect for movie nights!</span></div><p class=\"text-gray-600 mb-2\">I'm amazed at how good this tiny projector is. The picture quality is excellent for the size, and having Android built-in means I can watch anything without connecting extra devices.</p><div class=\"text-sm text-gray-500\"><span class=\"font-medium\">Amit S.</span> - March 28, 2025</div></div><div class=\"border-b border-gray-200 pb-6\"><div class=\"flex items-center mb-2\"><div class=\"flex\"><span class=\"text-yellow-400\">★★★★</span><span class=\"text-gray-300\">★</span></div><span class=\"ml-2 font-medium\">Great value but needs darker room</span></div><p class=\"text-gray-600 mb-2\">The projector performs well, especially considering its size and price. The only issue is that you really need a dark room to get the best image. Otherwise, a fantastic portable device!</p><div class=\"text-sm text-gray-500\"><span class=\"font-medium\">Neha R.</span> - April 5, 2025</div></div></div></div></div>"
      }
    ]
  }
]

// Deal data for the new products
const dealsData = {
  'vlog-camera-deal': {
    title: 'I & I Vlog Camera Launch Offer',
    description: 'Be among the first to experience professional-grade video recording with the new I & I Vlog Camera. Featuring 4K UHD video, 4G LTE connectivity, and night vision capabilities at an introductory price with 10% OFF for a limited time.',
    productIds: [1],
    discount: '10% OFF'
  },
  'projector-special': {
    title: 'Mini Projector Special',
    description: 'Transform any space into your personal cinema with the I & I Portable Mini Projector. Featuring Wi-Fi 6, Bluetooth 5.0, and Android 13.0. Get 15% OFF for a limited time and enjoy big-screen entertainment anywhere.',
    productIds: [2],
    discount: '15% OFF'
  },
  'creator-bundle': {
    title: 'Content Creator Bundle',
    description: 'Take your content creation to the next level with our complete creator package. Get the I & I Vlog Camera and Portable Mini Projector at one special price. Save 20% OFF the complete set for capturing and showcasing your best work.',
    productIds: [1, 2],
    discount: '20% OFF',
    isBundle: true,
    bundlePrice: '₹51,984',
    originalPrice: '₹64,980'
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
};