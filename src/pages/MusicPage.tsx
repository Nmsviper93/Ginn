import React from 'react';
import { Music } from 'lucide-react';
import ginnPhoto7 from '../assets/photos/ginnPhoto7.jpg'
import ginnPhoto8 from '../assets/photos/ginnPhoto8.jpg'
import ginnPhoto9 from '../assets/photos/ginnPhoto9.JPG'

const MusicPage = () => {
  const images = [
    {
      id: 7,
      image: ginnPhoto7,
      alt: "Live Performance"
    },
    {
      id: 8,
      image: ginnPhoto8,
      alt: "Studio Recording"
    },
    {
      id: 9,
      image: ginnPhoto9,
      alt: "Concert"
    }
  ];

  const musicPlatforms = [
    { name: 'Spotify', url: 'https://open.spotify.com/artist/2RPpoYCNBRiHnpmxqNVkmU?si=OVUBhTtHRW-RQY3G6T1P3Q' },
    { name: 'Apple Music', url: 'https://music.apple.com/us/artist/ginn/1755629805' },
    { name: 'YouTube Music', url: 'https://www.youtube.com/channel/UCtylWlfWk5ALXNeqOIeShmw' },
  ];

  const releases = [
    { 
      title: "1976", 
      type: "Single", 
      releaseDate: "May 2025",
      url: "https://open.spotify.com/track/3Pj779AYAhatyVwY9buY2B?si=aa2fce5d85434226"
    },
    { 
      title: "Magic Hands", 
      type: "Single", 
      releaseDate: "September 2024",
      url: "https://open.spotify.com/track/09POg4GZysw6uIYaogzO4Z?si=53dcc197a0174e99"
    },
    { 
      title: "Miss Karma", 
      type: "Single", 
      releaseDate: "August 2024",
      url: "https://open.spotify.com/track/6THaZQtEAemf9hSQQLzufW?si=392d7dcfc0cf4f1a"
    }
  ];

  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="w-full max-w-4xl space-y-8">
        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {images.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.image}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Spotify Player */}
        <div className="w-full bg-primary-blue rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-white">Latest Music</h2>
          <div className="w-full">
            <iframe
              src="https://open.spotify.com/embed/artist/2RPpoYCNBRiHnpmxqNVkmU?utm_source=generator&theme=0"
              width="100%"
              height="352"
              style={{ border: 'none', borderRadius: '12px' }}
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Latest Releases Section */}
        <div className="bg-primary-blue rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-white">Latest Releases</h2>
          <div className="space-y-4">
            {releases.map((release, index) => (
              <a
                key={index}
                href={release.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-primary-blue/50 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-white">{release.title}</h3>
                  <p className="text-sm text-white/80">{release.releaseDate}</p>
                </div>
                <span className="bg-primary-teal text-white px-3 py-1 rounded-lg text-sm">
                  {release.type}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Music Platform Links */}
        <div className="bg-primary-blue rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Listen Now</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {musicPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-primary-blue/50 p-4 rounded-lg hover:bg-white/10 transition-colors min-w-[200px]"
              >
                <Music size={20} className="text-white" />
                <span className="font-medium text-white">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;