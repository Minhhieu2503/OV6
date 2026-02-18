import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeSection from './sections/HomeSection';
import StrategySection from './sections/StrategySection';
import ResultsSection from './sections/ResultsSection';
import ServicesSection from './sections/ServicesSection';
import BlogSection from './sections/BlogSection';
import ContactSection from './sections/ContactSection';
import { useScroll } from './hooks/useScroll';
import { useNavigation } from './hooks/useNavigation';

import AnimatedSection from './components/AnimatedSection';

const App = () => {
  const isScrolled = useScroll();
  const { activeSection, isMenuOpen, setIsMenuOpen, scrollToSection } = useNavigation();

  return (
    <div className="bg-gray-900 text-white">
      <Navigation
        isScrolled={isScrolled}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <AnimatedSection>
        <HomeSection scrollToSection={scrollToSection} />
      </AnimatedSection>

      <AnimatedSection>
        <StrategySection />
      </AnimatedSection>
      <AnimatedSection>
        <ResultsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesSection scrollToSection={scrollToSection} />
      </AnimatedSection>
      <AnimatedSection>
        <BlogSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;

