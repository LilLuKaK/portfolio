import { useEffect, useState } from "react";
import { I18nProvider } from './context/i18nContext';
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
import DynamicIslandMusicPlayer from './components/DynamicIslandMusicPlayer';
import FloatingGifDialog from "./components/FloatingGifDialog";
import Silk from "./components/Silk";

const Portfolio = () => {

  const [silkColor, setSilkColor] = useState("#7B7481");

  useEffect(() => {
    // Limitar animaciones cuando no están visibles
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-active');
        } else {
          entry.target.classList.remove('animate-active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
      startHour: 6, // 00:00 UTC+2
      color: '#4c4235'
    },
    {
      title: 'No Pole',
      artist: 'Don Toliver',
      albumArt: 'https://ia801609.us.archive.org/22/items/don-toliver-love-sick-deluxe/Deluxe/cover.jpg?cnt=0',
      audioUrl: 'https://ia801609.us.archive.org/22/items/don-toliver-love-sick-deluxe/Deluxe/01-No%20Pole.mp3',
      startHour: 7, // 00:00 UTC+2
      color: '#7113b5'
    },
    {
      title: 'Fountains',
      artist: 'Drake, Tems',
      albumArt: 'https://ia601608.us.archive.org/28/items/drake-certified-lover-boy_202303/Certified%20Lover%20Boy.jpg?cnt=0',
      audioUrl: 'https://dn721902.ca.archive.org/0/items/drake-certified-lover-boy_202303/Drake%20-%20Fountains%20%28with%20Tems%29.mp3',
      startHour: 8, // 00:00 UTC+2
      color: '#d8e0ae'
    },
    {
      title: 'Favorite Lie',
      artist: 'Lil Tecca',
      albumArt: 'https://ia800707.us.archive.org/3/items/lil-tecca-dopamine/artworks-35OOXOGA9SjkcKZr-7l4KRw-t500x500.jpg?cnt=0',
      audioUrl: 'https://dn721905.ca.archive.org/0/items/lil-tecca-dopamine/05%20Favorite%20Lie.mp3',
      startHour: 9, // 00:00 UTC+2
      color: '#272727'
    },
    {
      title: 'NOKIA',
      artist: 'Drake',
      albumArt: 'https://ia600809.us.archive.org/11/items/sss4u/Cover.jpg?cnt=0',
      audioUrl: 'https://ia904506.us.archive.org/6/items/partynextdoor-drake-some-sexy-songs-4-u/PARTYNEXTDOOR%20%26%20Drake%20%24%24%244U%2014%20NOKIA.mp3',
      startHour: 10, // 00:00 UTC+2
      color: '#4c4235'
    },
    {
      title: 'Always Be My Fault',
      artist: 'Future, Metro Boomin, The Weeknd',
      albumArt: 'https://ia600305.us.archive.org/12/items/future-metro-boomin-we-still-dont-trust-you/WE%20STILL%20DON%27T%20TRUST%20YOU%20%282024%29/WE%20STILL%20DON%27T%20TRUST%20YOU%20%28Cover%29.jpg?cnt=0',
      audioUrl: 'https://dn721907.ca.archive.org/0/items/future-metro-boomin-we-still-dont-trust-you/WE%20STILL%20DON%27T%20TRUST%20YOU%20%282024%29/Future%20%26%20Metro%20Boomin%20WSDTY%2016%20Always%20Be%20My%20Fault.mp3',
      startHour: 11, // 00:00 UTC+2
      color: '#bebebe'
    },
    {
      title: 'Sky Might Fall',
      artist: 'Kid Cudi',
      albumArt: 'https://ia801400.us.archive.org/16/items/man-on-the-moon-kid-cudi/ManonTheMoonTheEndofDay.jpg?cnt=0',
      audioUrl: 'https://dn720301.ca.archive.org/0/items/man-on-the-moon-kid-cudi/Sky%20Might%20Fall.mp3',
      startHour: 12, // 00:00 UTC+2
      color: '#cc5b80'
    },
    {
      title: 'Marijuana',
      artist: 'Kid Cudi',
      albumArt: 'https://ia601206.us.archive.org/0/items/man-on-the-moon-2/Kid%20Cudi%20-%20Man%20On%20The%20Moon%20II%20The%20Legend%20Of%20Mr.%20Rager%20%282010%29%20%5B16B-44.1kHz%5D/cover.jpg?cnt=0',
      audioUrl: 'https://ia801206.us.archive.org/0/items/man-on-the-moon-2/Kid%20Cudi%20-%20Man%20On%20The%20Moon%20II%20The%20Legend%20Of%20Mr.%20Rager%20%282010%29%20%5B16B-44.1kHz%5D/05.%20Marijuana.mp3',
      startHour: 13, // 00:00 UTC+2
      color: '#4d392b'
    },
    {
      title: 'The Color Violet',
      artist: 'Tory Lanez',
      albumArt: 'https://i.scdn.co/image/ab67616d0000b2730c5f23cbf0b1ab7e37d0dc67',
      audioUrl: 'https://dn720302.ca.archive.org/0/items/the-color-violet/The%20Color%20Violet.mp3',
      startHour: 14, // 00:00 UTC+2
      color: '#632e13'
    },
    {
      title: 'Dark Thoughts',
      artist: 'Lil Tecca',
      albumArt: 'https://ia800707.us.archive.org/3/items/lil-tecca-dopamine/artworks-35OOXOGA9SjkcKZr-7l4KRw-t500x500.jpg?cnt=0',
      audioUrl: 'https://dn721905.ca.archive.org/0/items/lil-tecca-dopamine/01%20Dark%20Thoughts.mp3',
      startHour: 16, // 00:00 UTC+2
      color: '#272727'
    },
    {
      title: 'Belive What I Say',
      artist: 'Kanye West',
      albumArt: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fjvst2ity53d51.jpg&f=1&nofb=1&ipt=a0f16697e2de2d5dc47966901403d26260a642f55a63897ab49eac6b7944d23a',
      audioUrl: 'https://dn721206.ca.archive.org/0/items/unnamed_202505/Believe_What_I_Say_V6.mp3',
      startHour: 15, // 00:00 UTC+2
      color: '#ea1609'
    },
    {
      title: 'Deep Fried Frenz',
      artist: 'MF DOOM',
      albumArt: 'https://ia801502.us.archive.org/23/items/mm-food-flac/Cover.jpg',
      audioUrl: 'https://ia601502.us.archive.org/23/items/mm-food-flac/05%20Deep%20Fried%20Frenz.mp3',
      startHour: 17, // 00:00 UTC+2
      color: '#4a624c'
    },
    {
      title: 'Redbone',
      artist: 'Childish Gambino',
      albumArt: 'https://ia801804.us.archive.org/35/items/childish-gambino-awaken-my-love/Awaken%2C%20My%20Love%21/cover.jpg',
      audioUrl: 'https://dn721806.ca.archive.org/0/items/childish-gambino-awaken-my-love/Awaken%2C%20My%20Love%21/06-Redbone.mp3',
      startHour: 18, // 00:00 UTC+2
      color: '#54bfeb'
    },
    {
      title: 'RATHER LIE',
      artist: 'Playboi Carti, The Weeknd',
      albumArt: 'https://ia600706.us.archive.org/17/items/playboi-carti-music/%27Music%27%20Album%20Cover.jpg',
      audioUrl: 'https://ia800706.us.archive.org/17/items/playboi-carti-music/MUSIC/1-08%20RATHER%20LIE.mp3',
      startHour: 19, // 00:00 UTC+2
      color: '#d4d4d4'
    },
    {
      title: "Look What You've Done",
      artist: 'Drake',
      albumArt: 'https://ia601608.us.archive.org/12/items/drake-take-care-deluxe/Take%20Care%20%28Deluxe%29.jpg',
      audioUrl: 'https://ia801608.us.archive.org/12/items/drake-take-care-deluxe/Drake%20-%20Look%20What%20You%27ve%20Done.mp3',
      startHour: 20, // 00:00 UTC+2
      color: '#7c4c2d'
    },
    {
      title: 'No More Partes in LA',
      artist: 'Kanye West, Kendrick Lamar',
      albumArt: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgonzomusic.fr%2Ffiles%2FTHE-LIFE-OF-PABLO-COVER.png&f=1&nofb=1&ipt=0247db0031d5e9582039d2ffbcf945b7bbc2af2c6fb4dca017353aaac3207b7c',
      audioUrl: 'https://ia600206.us.archive.org/23/items/soundloader.app-no-more-parties-in-la-mocking-bird-011/soundloader.app%20-%20No%20More%20Parties%20in%20LA%20-%20MockingBird011.mp3',
      startHour: 21, // 00:00 UTC+2
      color: '#F58B57'
    },
    {
      title: 'MAFIA',
      artist: 'Travis Scott',
      albumArt: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fis3-ssl.mzstatic.com%2Fimage%2Fthumb%2FMusic126%2Fv4%2Fd8%2Ffe%2F12%2Fd8fe12d9-e6a5-dbcb-814f-f43b516dddea%2F886449721696.jpg%2F1200x1200bf-60.jpg&f=1&nofb=1&ipt=6a8fef83dbe404d89e32e924cc26add9313b289a35acd0899081dcf0eccaaf3f',
      audioUrl: 'https://ia600908.us.archive.org/15/items/soundloader.app-mafia-travis-scott-1/soundloader.app%20-%20MAFIA%20-%20Travis%20Scott%281%29.mp3',
      startHour: 22, // 00:00 UTC+2
      color: '#cac7bf'
    },
    {
      title: 'Ruins',
      artist: 'Toby Fox',
      albumArt: 'https://ia801504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%20cover.png',
      audioUrl: 'https://dn721605.ca.archive.org/0/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%2005%20Ruins.mp3',
      startHour: 23, // 00:00 UTC+2
      color: '#1c2058'
    },
    {
      title: 'Determination',
      artist: 'Toby Fox',
      albumArt: 'https://ia801504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%20cover.png',
      audioUrl: 'https://ia601504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%2011%20Determination.mp3',
      startHour: 0, // 00:00 UTC+2
      color: '#1c2058'
    },
    {
      title: 'Home (Music Box)',
      artist: 'Toby Fox',
      albumArt: 'https://ia801504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%20cover.png',
      audioUrl: 'https://ia601504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%2013%20Home%20%28Music%20Box%29.mp3',
      startHour: 1, // 00:00 UTC+2
      color: '#1c2058'
    },
    {
      title: 'Uwa!! So Holiday♫',
      artist: 'Toby Fox',
      albumArt: 'https://ia801504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%20cover.png',
      audioUrl: 'https://ia801504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%2018%20Uwa%21%21%20So%20Holiday%E2%99%AB.mp3',
      startHour: 2, // 00:00 UTC+2
      color: '#1c2058'
    },
    {
      title: 'Shop',
      artist: 'Toby Fox',
      albumArt: 'https://ia801504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%20cover.png',
      audioUrl: 'https://dn721605.ca.archive.org/0/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%2023%20Shop.mp3',
      startHour: 3, // 00:00 UTC+2
      color: '#1c2058'
    },
    {
      title: "It's Raining Somewhere Else",
      artist: 'Toby Fox',
      albumArt: 'https://ia801504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%20cover.png',
      audioUrl: 'https://ia601504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%2063%20It%27s%20Raining%20Somewhere%20Else.mp3',
      startHour: 4, // 00:00 UTC+2
      color: '#1c2058'
    },
    {
      title: 'Undertale',
      artist: 'Toby Fox',
      albumArt: 'https://ia801504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%20cover.png',
      audioUrl: 'https://ia601504.us.archive.org/6/items/undertaleost_202004/Undertale%20-%20Lossless%20Soundtrack%20%28toby%20fox%29/toby%20fox%20-%20UNDERTALE%20Soundtrack%20-%2071%20Undertale.mp3',
      startHour: 5, // 00:00 UTC+2
      color: '#1c2058'
    },
  ];

  return (
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      {/* Fondo Silk global */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk
          speed={5}
          scale={1.3}
          color={silkColor}
          noiseIntensity={1.5}
          rotation={0}
        />
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
      <DynamicIslandMusicPlayer songs={songs} onColorChange={setSilkColor} />
      <FloatingGifDialog />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <I18nProvider>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </I18nProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;