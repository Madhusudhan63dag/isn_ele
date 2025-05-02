const navbar = [
  {
    id: 1,
    name: "Shop Categories",
    link: "/",
    subItems: [
      { id: 1, name: "Cameras & Recorders", link: "/trending?category=cameras" },
      { id: 2, name: "Projectors & Displays", link: "/trending?category=projectors" }
    ]
  },
  // {
  //   id: 2,
  //   name: "Deals",
  //   link: "",
  //   subItems: [
  //     { id: 1, name: "Vlog Camera Launch Offer", link: "/deals/vlog-camera-deal" },
  //     { id: 2, name: "Mini Projector Special", link: "/deals/projector-special" },
  //     { id: 3, name: "Content Creator Bundle", link: "/deals/creator-bundle" }
  //   ]
  // },
  {
    id: 3,
    name: "Help & Support",
    link: "",
    subItems: [
      // { id: 1, name: "Product Support", link: "/help/product-support" },
      { id: 2, name: "Contact Us", link: "/contact" },
      { id: 3, name: "FAQs", link: "/faq" }
    ]
  }
];

export default navbar;

