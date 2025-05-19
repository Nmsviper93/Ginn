import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Music } from 'lucide-react';
import Tabs from './components/Tabs';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MediaPage from './pages/MediaPage';
import MusicPage from './pages/MusicPage';
import ContactPage from './pages/ContactPage';
import MerchPage from './pages/MerchPage';
import GINN_LOGO from './assets/photos/GINN.PNG';

const SHOW_MERCH = false;

function Home() {
  const [activeTab, setActiveTab] = useState('Home');

  const defaultTabs = [
    { id: 'Home', color: 'primary-teal', content: <HomePage /> },
    { id: 'About', color: 'primary-blue', content: <AboutPage /> },
    { id: 'Music', color: 'primary-gold', content: <MusicPage /> },
    { id: 'Media', color: 'primary-teal', content: <MediaPage /> },
    { id: 'Contact', color: 'primary-blue', content: <ContactPage /> }
  ];

  const merchTab = { id: 'Merch', color: 'primary-gold', content: <MerchPage /> };
  const tabs = SHOW_MERCH ? [...defaultTabs, merchTab] : defaultTabs;

  const socialLinks = [
    { icon: Facebook, url: 'https://www.facebook.com/ginnmusik', label: 'Facebook' },
    { icon: Instagram, url: 'https://www.instagram.com/ginn_sings/?igsh=MW03bWZlc2ZsN2Vkcw%3D%3D#', label: 'Instagram' },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      url: 'https://www.tiktok.com/@ginnswan?_t=ZT-8vcZt4u6DWg&_r=1',
      label: 'TikTok'
    },
    { icon: Youtube, url: 'https://www.youtube.com/channel/UCtylWlfWk5ALXNeqOIeShmw', label: 'YouTube' },
    { 
      icon: () => (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.371-.721.53-1.07.29-3.29-2.021-7.432-2.471-12.322-1.35-.479.09-.959-.301-1.049-.779-.09-.479.301-.959.779-1.049 5.341-1.23 9.933-.721 13.583 1.59.361.18.48.721.29 1.081zm1.471-3.691c-.301.469-.902.619-1.381.319-3.761-2.311-9.492-2.971-13.943-1.621-.539.141-1.141-.15-1.281-.691-.141-.539.15-1.141.691-1.281 5.071-1.53 11.391-.811 15.722 1.891.449.3.6.93.3 1.381zm.127-3.841c-4.531-2.688-11.971-2.938-16.291-1.62-.691.199-1.41-.211-1.619-.902-.199-.691.211-1.41.901-1.619 4.951-1.5 13.172-1.211 18.383 1.891.6.361.779 1.141.419 1.74-.361.571-1.141.75-1.74.391z"/>
        </svg>
      ),
      url: 'https://open.spotify.com/artist/2RPpoYCNBRiHnpmxqNVkmU?si=OVUBhTtHRW-RQY3G6T1P3Q',
      label: 'Spotify'
    },
    { icon: Music, url: 'https://music.apple.com/us/artist/ginn/1755629805', label: 'Apple Music' }
  ];

  return (
    <div className="min-h-screen bg-primary-teal/90">
      <header className="bg-primary-blue/5 shadow-lg relative h-24">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="flex justify-center items-center">
            <img 
              src={GINN_LOGO}
              alt="Ginn Logo"
              className="h-14 sm:h-20 object-contain filter brightness-0 invert scale-[2.75]"
            />
          </div>
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
            <div className="rounded-lg p-2">
              <div className="grid grid-cols-3 gap-3 w-[120px]">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center text-white hover:text-white/80 transition-colors"
                    aria-label={social.label}
                  >
                    {typeof social.icon === 'function' ? (
                      <div className="w-5 h-5">
                        <social.icon />
                      </div>
                    ) : (
                      <social.icon className="w-5 h-5" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-2 sm:px-4 py-8">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>

      <footer className="bg-primary-blue text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">&copy; 2025 Ginn</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;