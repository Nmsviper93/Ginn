import React from 'react';
import { Facebook, Instagram, Music, Youtube, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-64 h-64 overflow-hidden rounded-full shadow-lg">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJSEqHeta1tpdPZQLWrA1vjciuCkQmVCi66A&s"
          alt="singing"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-3xl text-lg leading-relaxed text-gray-700 space-y-6">
        <p>
          Ginn is a dynamic and versatile pop/rock artist known for her powerhouse vocals and captivating theatricality. Based in Nashville, she has taken her energy and talent to over 20 cities across the U.S. and Canada, 
          performing at renowned venues such as Moonshine Flats, The Basement, Eastside Bowl with Breaking Sound, and various Tin Roof locations. 
          Ginn has graced the stages of Nashville's iconic Broadway street, including its premiere artist showcase, Whiskey Jam, and sung at major venues 
          like Bridgestone Arena with the Nashville Predators, The Schermerhorn Symphony Center for Christmas at Belmont, streamed live on PBS, and the historic Ryman Auditorium alongside Blake Shelton, Keala Settle, and The War and Treaty.
        </p>
        <p>
          In 2019, she made waves as a top ten semifinalist on Broadway's Search for Roxie in the musical, Chicago. Featured in Nashville Voyager Magazine, 
          Ginn continues to make a name for herself in the music scene. She draws inspiration from artists like Christina Aguilera, Paramore, and Alanis Morisette. With two successful releases in 2024 and a 
          highly anticipated debut project set for June 2025, Ginn is poised to bring her bold sound and passionate performances to a larger audience.
        </p>
      </div>

      <div className="flex space-x-6">
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

export default About;