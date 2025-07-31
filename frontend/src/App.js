import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import LiquidGlassNavigation from "./components/LiquidGlassNavigation";
import DynamicIslandMusicPlayer1 from './components/DynamicIslandMusicPlayer1';
import Silk from "./components/Silk";
import FluidGlass from "./components/FluidGlass";

const Portfolio = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.3);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const songs = [
    {
      title: 'SOMEBODY LOVES ME',
      artist: 'PARTYNEXTDOOR, Drake',
      albumArt: 'https://ia600809.us.archive.org/11/items/sss4u/Cover.jpg?cnt=0',
      audioUrl: 'https://ia800809.us.archive.org/11/items/sss4u/07%20-%20SOMEBODY%20LOVES%20ME.mp3',
      color: '#4c4235'
    },
    {
      title: 'No Pole',
      artist: 'Don Toliver',
      albumArt: 'https://ia801609.us.archive.org/22/items/don-toliver-love-sick-deluxe/Deluxe/cover.jpg?cnt=0',
      audioUrl: 'https://ia801609.us.archive.org/22/items/don-toliver-love-sick-deluxe/Deluxe/01-No%20Pole.mp3',
      color: '#7113b5'
    },
    {
      title: 'Fountains',
      artist: 'Drake, Tems',
      albumArt: 'https://ia601608.us.archive.org/28/items/drake-certified-lover-boy_202303/Certified%20Lover%20Boy.jpg?cnt=0',
      audioUrl: 'https://dn721902.ca.archive.org/0/items/drake-certified-lover-boy_202303/Drake%20-%20Fountains%20%28with%20Tems%29.mp3',
      color: '#d8e0ae'
    },
    {
      title: 'Favorite Lie',
      artist: 'Lil Tecca',
      albumArt: 'https://ia800707.us.archive.org/3/items/lil-tecca-dopamine/artworks-35OOXOGA9SjkcKZr-7l4KRw-t500x500.jpg?cnt=0',
      audioUrl: 'https://dn721905.ca.archive.org/0/items/lil-tecca-dopamine/05%20Favorite%20Lie.mp3',
      color: '#040404'
    },
    {
      title: 'NOKIA',
      artist: 'Drake',
      albumArt: 'https://ia600809.us.archive.org/11/items/sss4u/Cover.jpg?cnt=0',
      audioUrl: 'https://ia904506.us.archive.org/6/items/partynextdoor-drake-some-sexy-songs-4-u/PARTYNEXTDOOR%20%26%20Drake%20%24%24%244U%2014%20NOKIA.mp3',
      color: '#4c4235'
    },
    {
      title: 'Always Be My Fault',
      artist: 'Future, Metro Boomin, The Weeknd',
      albumArt: 'https://ia600305.us.archive.org/12/items/future-metro-boomin-we-still-dont-trust-you/WE%20STILL%20DON%27T%20TRUST%20YOU%20%282024%29/WE%20STILL%20DON%27T%20TRUST%20YOU%20%28Cover%29.jpg?cnt=0',
      audioUrl: 'https://dn721907.ca.archive.org/0/items/future-metro-boomin-we-still-dont-trust-you/WE%20STILL%20DON%27T%20TRUST%20YOU%20%282024%29/Future%20%26%20Metro%20Boomin%20WSDTY%2016%20Always%20Be%20My%20Fault.mp3',
      color: '#bebebe'
    },
    {
      title: 'Sky Might Fall',
      artist: 'Kid Cudi',
      albumArt: 'https://ia801400.us.archive.org/16/items/man-on-the-moon-kid-cudi/ManonTheMoonTheEndofDay.jpg?cnt=0',
      audioUrl: 'https://dn720301.ca.archive.org/0/items/man-on-the-moon-kid-cudi/Sky%20Might%20Fall.mp3',
      color: '#cc5b80'
    },
    {
      title: 'Marijuana',
      artist: 'Kid Cudi',
      albumArt: 'https://ia601206.us.archive.org/0/items/man-on-the-moon-2/Kid%20Cudi%20-%20Man%20On%20The%20Moon%20II%20The%20Legend%20Of%20Mr.%20Rager%20%282010%29%20%5B16B-44.1kHz%5D/cover.jpg?cnt=0',
      audioUrl: 'https://ia801206.us.archive.org/0/items/man-on-the-moon-2/Kid%20Cudi%20-%20Man%20On%20The%20Moon%20II%20The%20Legend%20Of%20Mr.%20Rager%20%282010%29%20%5B16B-44.1kHz%5D/05.%20Marijuana.mp3',
      color: '#4d392b'
    },
    {
      title: 'The Color Violet',
      artist: 'Tory Lanez',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b2730c5f23cbf0b1ab7e37d0dc67',
      audioUrl: 'https://dn720302.ca.archive.org/0/items/the-color-violet/The%20Color%20Violet.mp3',
      color: '#632e13'
    },
    {
      title: 'Dark Thoughts',
      artist: 'Lil Tecca',
      albumArt: 'https://ia800707.us.archive.org/3/items/lil-tecca-dopamine/artworks-35OOXOGA9SjkcKZr-7l4KRw-t500x500.jpg?cnt=0',
      audioUrl: 'https://dn721905.ca.archive.org/0/items/lil-tecca-dopamine/01%20Dark%20Thoughts.mp3',
      color: '#040404'
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      {/* Fondo Silk global */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk
          speed={5}
          scale={1.3}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
        <div className="absolute inset-0 opacity-70">
          <FluidGlass
            mode="lens"
            lensProps={{
              scale: 0.25,
              ior: 1.15,
              thickness: 5,
              chromaticAberration: 0.1,
              anisotropy: 0.01
            }}
          />
        </div>
      </div>

      {/* Contenido principal con z-index mayor */}
      <div className="relative z-10">
        <LiquidGlassNavigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>

      {/* Footer sin fondo Silk */}
      <div className="relative z-10">
        <Footer />
      </div>

      <DynamicIslandMusicPlayer1 songs={songs} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;