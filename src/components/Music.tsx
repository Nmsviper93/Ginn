import React from 'react';
import { Facebook, Instagram, Music as MusicIcon, Youtube, MessageSquare } from 'lucide-react';

const Music: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-12">
      <div className="w-full max-w-4xl space-y-8">
        {/* YouTube Video */}
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="Music Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Spotify Playlist */}
        <div className="w-full">
          <iframe
            className="w-full rounded-lg shadow-lg"
            style={{ height: '352px' }}
            src="https://open.spotify.com/embed/playlist/0RTMsaRMsKH7LqYTPhZGKv?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>

      <div className="flex space-x-6">
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          <MusicIcon size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          <Youtube size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          <MessageSquare size={24} />
        </a>
      </div>
    </div>
  );
};

export default Music;