import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import ginnPhoto11 from '../assets/photos/ginnPhoto11.jpg';
import ginnPhoto12 from '../assets/photos/ginnPhoto12.jpg';
import ginnPhoto13 from '../assets/photos/ginnPhoto13.jpg';
import ginnPhoto14 from '../assets/photos/ginnPhoto14.jpg';
import ginnPhoto15 from '../assets/photos/ginnPhoto15.jpg';
import ginnPhoto16 from '../assets/photos/ginnPhoto16.JPG';
import ginnPhoto17 from '../assets/photos/ginnPhoto17.JPG';
import ginnPhoto18 from '../assets/photos/ginnPhoto18.JPG';
import ginnPhoto19 from '../assets/photos/ginnPhoto19.JPG';
import ginnPhoto20 from '../assets/photos/ginnPhoto20.JPG';
import ginnPhoto21 from '../assets/photos/ginnPhoto21.JPG';
import ginnPhoto22 from '../assets/photos/ginnPhoto22.JPG';
import ginnPhoto23 from '../assets/photos/ginnPhoto23.jpg';
import ginnPhoto24 from '../assets/photos/ginnPhoto24.jpg';
import ginnPhoto25 from '../assets/photos/ginnPhoto25.jpg';

const MediaPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'photos' | 'musicVideos' | 'liveVideos' | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    { id: 11, image: ginnPhoto11 },
    { id: 12, image: ginnPhoto12 },
    { id: 13, image: ginnPhoto13 },
    { id: 14, image: ginnPhoto14 },
    { id: 15, image: ginnPhoto15 },
    { id: 16, image: ginnPhoto16 },
    { id: 17, image: ginnPhoto17 },
    { id: 18, image: ginnPhoto18 },
    { id: 19, image: ginnPhoto19 },
    { id: 20, image: ginnPhoto20 },
    { id: 21, image: ginnPhoto21 },
    { id: 22, image: ginnPhoto22 },
    { id: 23, image: ginnPhoto23 },
    { id: 24, image: ginnPhoto24 },
    { id: 25, image: ginnPhoto25 }
  ];

  const musicVideos = [
    {
      id: 1,
      title: "1976 - Official Music Video",
      date: "May 2025",
      thumbnail: "https://img.youtube.com/vi/7IcFcyX2z8U/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=7IcFcyX2z8U"
    },
    {
      id: 2,
      title: "Magic Hands - Lyric Video",
      date: "March 2025",
      thumbnail: "https://img.youtube.com/vi/k2Ve_Pv8pSk/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=k2Ve_Pv8pSk"
    },
    {
      id: 3,
      title: "Miss Karma - Lyric Video",
      date: "February 2025",
      thumbnail: "https://img.youtube.com/vi/ynk4kIp9xbg/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=ynk4kIp9xbg"
    }
  ];

  const liveVideos = [
    {
      id: 1,
      title: "Ginn - Live/Covers Mashup",
      date: "March 2025",
      thumbnail: "https://img.youtube.com/vi/8MIjmKyWt6w/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=8MIjmKyWt6w"
    },
    {
      id: 2,
      title: "Miss Karma - Live in Nashville",
      date: "March 2025",
      thumbnail: "https://img.youtube.com/vi/DF_8Y3KOFcA/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=DF_8Y3KOFcA"
    },
    {
      id: 3,
      title: "Ginn Original Music - Live",
      date: "March 2025",
      thumbnail: "https://img.youtube.com/vi/YiEGZ1aKChY/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/watch?v=YiEGZ1aKChY"
    }
  ];

  const renderPhotos = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {photos.map((photo) => (
        <div key={photo.id} className="flex items-center justify-center h-64">
          <img 
            src={photo.image}
            alt={`Gallery Image ${photo.id}`}
            className="max-h-full w-auto rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedImage(photo.image)}
          />
        </div>
      ))}

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );

  const renderMusicVideos = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {musicVideos.map((video) => (
        <div key={video.id} className="bg-primary-blue rounded-lg shadow-md overflow-hidden">
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="relative block">
            <img 
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <Play size={48} className="text-white" />
            </div>
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
            <p className="text-white/80">{video.date}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderLiveVideos = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {liveVideos.map((video) => (
        <div key={video.id} className="bg-primary-blue rounded-lg shadow-md overflow-hidden">
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="relative block">
            <img 
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-64 object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <Play size={48} className="text-white" />
            </div>
          </a>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white mb-2">{video.title}</h3>
            <p className="text-white/80">{video.date}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCategorySelector = () => (
    <div className="min-h-[calc(100vh-20rem)] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        <div className="bg-primary-blue rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => setActiveCategory('photos')}>
          <img 
            src={photos[0].image}
            alt="Photos Category"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white text-center">Photos</h3>
          </div>
        </div>
        
        <div className="bg-primary-blue rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => setActiveCategory('musicVideos')}>
          <img 
            src={musicVideos[0].thumbnail}
            alt="Music Videos Category"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white text-center">Music Videos</h3>
          </div>
        </div>
        
        <div className="bg-primary-blue rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => setActiveCategory('liveVideos')}>
          <img 
            src={liveVideos[0].thumbnail}
            alt="Live Videos Category"
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white text-center">Live Videos</h3>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (!activeCategory) {
      return renderCategorySelector();
    }

    return (
      <div className="min-h-[calc(100vh-20rem)] space-y-8">
        <button
          onClick={() => setActiveCategory(null)}
          className="text-white hover:text-white/80 transition-colors"
        >
          ← Back to Categories
        </button>
        
        <h2 className="text-3xl font-bold mb-8 text-white">
          {activeCategory === 'photos' && 'Photo Gallery'}
          {activeCategory === 'musicVideos' && 'Music Videos'}
          {activeCategory === 'liveVideos' && 'Live Performances'}
        </h2>

        {activeCategory === 'photos' && renderPhotos()}
        {activeCategory === 'musicVideos' && renderMusicVideos()}
        {activeCategory === 'liveVideos' && renderLiveVideos()}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {renderContent()}
    </div>
  );
};

export default MediaPage;