import React from 'react';
import { Facebook, Instagram, Music, Youtube, MessageSquare } from 'lucide-react';

const Media: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example media items - replace with actual content */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Performance"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Live Performance</h3>
            <p className="text-gray-600">Nashville Music Festival 2024</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Recording"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Studio Session</h3>
            <p className="text-gray-600">Recording new singles</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Concert"
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Concert Highlights</h3>
            <p className="text-gray-600">Summer Tour 2024</p>
          </div>
        </div>
      </div>

      <div className="flex space-x-6 mt-8">
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          <Facebook size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          <Instagram size={24} />
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
          <Music size={24} />
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

export default Media;