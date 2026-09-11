import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
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
import { PrivacyPage, TermsPage } from './pages/Legal';
import { TumisoAI } from './pages/TumisoAI';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { TumboBackground } from './components/TumboBackground';
import { ToMeChatbot } from './components/ToMeChatbot';

const AUTH_ROUTES = ['/signup', '/signin'];

const ScrollManager: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      const element = document.getElementById(elementId);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
};

const AppShell: React.FC = () => {
  const { pathname } = useLocation();
  const isAuthPage = AUTH_ROUTES.includes(pathname);

  return (
    <>
      {!isAuthPage && <TumboBackground />}
      <ScrollManager />
      {!isAuthPage && <Navbar />}
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
          <Route path="/ai-assistant" element={<TumisoAI />} />
          <Route path="/tumiso-ai" element={<TumisoAI />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <ToMeChatbot />}
    </>
  );
};

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID ?? '';

function App() {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <AuthProvider>
        <BrowserRouter>
          <AppShell />
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
