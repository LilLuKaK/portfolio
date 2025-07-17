import { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Mail, FolderOpen } from 'lucide-react';
import './LiquidGlassNavigation.css';

const LiquidGlassNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = [
    { id: 'hero', icon: Home, label: 'Home', href: '#hero' },
    { id: 'about', icon: User, label: 'About', href: '#about' },
    { id: 'skills', icon: Code, label: 'Skills', href: '#skills' },
    { id: 'projects', icon: FolderOpen, label: 'Projects', href: '#projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience', href: '#experience' },
    { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' }
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.querySelector(item.href)
      }));

      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActiveSection(item.id);
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* SVG Filter for liquid glass effect */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="glass-distortion">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.02" 
              numOctaves="1" 
              result="noise"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="2"
            />
          </filter>
        </defs>
      </svg>

      <nav className="liquid-glass-nav">
        <div className="liquid-glass-wrapper dock">
          <div className="liquid-glass-effect"></div>
          <div className="liquid-glass-tint"></div>
          <div className="liquid-glass-shine"></div>
          <div className="liquid-glass-text">
            <div className="dock-container">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item)}
                    className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                    title={item.label}
                  >
                    <IconComponent size={24} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LiquidGlassNavigation;