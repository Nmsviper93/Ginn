import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Music, MessageSquare } from 'lucide-react';
import Tabs from './components/Tabs';
import Slideshow from './components/Slideshow';
import AboutContent from './components/AboutContent';
import MediaContent from './components/MediaContent';
import MusicContent from './components/MusicContent';
import ContactContent from './components/ContactContent';

const slides = [
  {
    id: 1,
    image: "https://rukminim2.flixcart.com/image/850/1000/l01blow0/poster/2/w/z/medium-music-wallpaper-on-fine-art-paper-theme-images-hd-original-imagbx2phbqcnzym.jpeg?q=20&crop=false",
    caption: "Caption Text"
  },
  {
    id: 2,
    image: "https://moises.ai/_next/image/?url=https%3A%2F%2Fstorage.googleapis.com%2Fmoises-cms%2Fhow_to_reading_sheet_music_image_338d99b137%2Fhow_to_reading_sheet_music_image_338d99b137.jpg&w=1920&q=75",
    caption: "Caption Two"
  },
  {
    id: 3,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeN_qDDDLuu6_Lb0R39_T9Z_7P1aa_k5lryA&s",
    caption: "Caption Three"
  }
];

const tabs = [
  { id: 'Home', color: 'red-500', content: 'Home Content' },
  { id: 'About', color: 'green-500', content: <AboutContent /> },
  { id: 'Music', color: 'blue-500', content: <MusicContent /> },
  { id: 'Media', color: 'orange-500', content: <MediaContent /> },
  { id: 'Contact', color: 'purple-500', content: <ContactContent /> }
];

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800">Ginny's Website</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 'Home' && (
          <div className="my-12">
            <Slideshow slides={slides} />
          </div>
        )}

        <div className="my-8 text-center">
          <p className="text-xl text-gray-700">Email here</p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Music size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Youtube size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <MessageSquare size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;