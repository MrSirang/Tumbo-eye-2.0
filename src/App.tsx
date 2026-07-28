import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Ecosystem } from './pages/Ecosystem';
import { Partners } from './pages/Partners';
import { Opportunities } from './pages/Opportunities';
import { Resources } from './pages/Resources';
import { SuccessStories } from './pages/SuccessStories';
import { Contact } from './pages/Contact';

// Scroll behavior manager to handle scroll-to-top and hash section targets
const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g. #opportunities), attempt to scroll to it
    if (hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        // Wait slightly for page components to render
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // Otherwise, scroll to the top of the page on route change
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
