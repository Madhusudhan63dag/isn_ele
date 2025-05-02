import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Import pages
import Home from './pages/Home';
import Trending from './pages/Trending';
import ProductPage from './pages/ProductPage';
import Offer from './pages/Offer';
import DealsPage from './pages/DealsPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/policy_other/Faq';
import Checkout from './pages/checkout/Checkout';
import ThankYou from './pages/ThankYou';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Shipping from './pages/policy_other/Shipping';
import Privacy from './pages/policy_other/Privacy';
import Terms from './pages/policy_other/Terms';
import Sitemap from './pages/policy_other/Sitemap';
import Auth from './components/Auth';

// Import Cart Context
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <HelmetProvider>
      <CartProvider>
        <Router>
          <div className="App min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/offers" element={<Offer />} />
                <Route path="/deals/:dealType" element={<DealsPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/shipping" element={<Auth />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/shippings" element={<Shipping />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/sitemap" element={<Sitemap />} />

                {/* Add other routes as needed */}
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </HelmetProvider>
  );
}

export default App;
