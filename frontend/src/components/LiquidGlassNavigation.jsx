import { useState, useEffect } from 'react';
import { User, Code, Briefcase, Mail, FolderOpen } from 'lucide-react';
import './LiquidGlassNavigation.css';
import GlassSurface from './GlassSurface';
import homeIcon from './../assets/icons/home.svg';
import personIcon from './../assets/icons/person.svg';
import projectsIcon from './../assets/icons/projects.svg';
import experienceIcon from './../assets/icons/experience.svg';
import contactIcon from './../assets/icons/contact.svg';

const LiquidGlassNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navigationItems = [
    { id: 'hero', iconSrc: homeIcon, label: 'Home', href: '#hero' },
    { id: 'about', iconSrc: personIcon, label: 'About', href: '#about' },
    { id: 'skills', iconSrc: 'https://img.icons8.com/liquid-glass/35/learning.png', label: 'Skills', href: '#skills' },
    { id: 'projects', iconSrc: projectsIcon, label: 'Projects', href: '#projects' },
    { id: 'experience', iconSrc: experienceIcon, label: 'Experience', href: '#experience' },
    { id: 'contact', iconSrc: contactIcon, label: 'Contact', href: '#contact' }
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
    <nav className="liquid-glass-nav">
      <GlassSurface
        width="auto"
        height="80px"
        borderRadius={20}
        brightness={50}
        blur={10}
        opacity={0.93}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        displace={0.5}
        distortionScale={-180}
        mixBlendMode="screen"
        className="glass-nav-container"
      >
        <div className="dock-container">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              title={item.label}
            >
              <img
                src={item.iconSrc}
                alt={item.label}
                width={35}
                height={35}
                style={{ filter: activeSection === item.id ? 'brightness(1)' : 'brightness(0.85)', transition: '0.3s' }}
              />
            </button>
          ))}
        </div>
      </GlassSurface>
    </nav>
  );
};

export default LiquidGlassNavigation;