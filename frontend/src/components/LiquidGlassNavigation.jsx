import { useState } from 'react';
import { Home, User, Code, Briefcase, Mail, FolderOpen } from 'lucide-react';

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

      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
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

      <style jsx>{`
        /* LIQUID GLASS STYLES */
        .liquid-glass-wrapper {
          position: relative;
          display: flex;
          font-weight: 600;
          overflow: hidden;
          color: black;
          cursor: pointer;
          box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
        }

        .liquid-glass-effect {
          position: absolute;
          z-index: 0;
          inset: 0;
          backdrop-filter: blur(3px);
          filter: url(#glass-distortion);
          overflow: hidden;
          isolation: isolate;
        }

        .liquid-glass-tint {
          z-index: 1;
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.25);
        }

        .liquid-glass-shine {
          position: absolute;
          inset: 0;
          z-index: 2;
          overflow: hidden;
          box-shadow: inset 2px 2px 1px 0 rgba(255, 255, 255, 0.5),
            inset -1px -1px 1px 1px rgba(255, 255, 255, 0.5);
        }

        .liquid-glass-text {
          z-index: 3;
          color: black;
        }

        .dock-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 2rem;
          padding: 0.6rem;
        }

        .dock-container,
        .dock-container > button {
          border-radius: 2rem;
        }

        .liquid-glass-wrapper:hover .dock-container {
          padding: 0.8rem;
          border-radius: 2.5rem;
        }

        .liquid-glass-wrapper:hover .dock-container > button {
          border-radius: 2.5rem;
        }

        .nav-item {
          width: 50px;
          height: 50px;
          padding: 0;
          border: none;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
          cursor: pointer;
          color: rgba(255, 255, 255, 0.8);
          border-radius: 1rem;
        }

        .nav-item:hover {
          transform: scale(0.95);
          transform-origin: center center;
          background: rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 1);
        }

        .nav-item.active {
          background: rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 1);
          box-shadow: inset -2px -2px 2px rgba(0, 0, 0, 0.1);
        }

        .nav-item.active:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </>
  );
};

export default LiquidGlassNavigation;