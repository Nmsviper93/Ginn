import React, { useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  // Initialize Instagram embed functionality
  useEffect(() => {
    const loadInstagramEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        // Retry if Instagram script hasn't loaded
        setTimeout(loadInstagramEmbed, 500);
      }
    };

    // Load Instagram embed script if not present
    if (!document.getElementById('instagram-embed-script')) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = loadInstagramEmbed;
    } else {
      loadInstagramEmbed();
    }
  }, []);

  return (
    <div className="space-y-6">
      {/* Instagram post container */}
      <div className="instagram-post-container flex justify-center">
        <blockquote
          className="instagram-media w-full"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/C4sMxkPuKVj/"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: '0',
            width: 'calc(100% - 2px)',
          }}
        >
        </blockquote>
      </div>
      
      {/* Instagram profile link */}
      <div className="text-center">
        <a
          href="https://www.instagram.com/ginn_sings/?igsh=MW03bWZlc2ZsN2Vkcw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
        >
          <span>Follow on Instagram</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;