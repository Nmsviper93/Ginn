import React from 'react';
import ginnPhoto4 from '../assets/photos/ginnPhoto4.JPG'
import ginnPhoto5 from '../assets/photos/ginnPhoto5.jpeg'
import ginnPhoto6 from '../assets/photos/ginnPhoto6.jpg'

// Image gallery configuration
const images = [
  {
    id: 4,
    image: ginnPhoto4,
    alt: "Live Performance"
  },
  {
    id: 5,
    image: ginnPhoto5,
    alt: "Studio Session"
  },
  {
    id: 6,
    image: ginnPhoto6,
    alt: "Backstage"
  }
];

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Photo Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {images.map((image) => (
          <div key={image.id} className="flex items-center justify-center h-64">
            <img
              src={image.image}
              alt={image.alt}
              className="max-h-full w-auto rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Biography Section */}
      <div className="max-w-3xl text-lg leading-relaxed text-white space-y-6 bg-primary-teal/90 p-8 rounded-lg">
        <p>
          Ginn is a dynamic and versatile pop/rock artist known for her powerhouse vocals and captivating theatricality. Based in Nashville, she has taken her energy and talent to over 20 cities across the U.S. and Canada, 
          performing at renowned venues such as Moonshine Flats, The Basement, Eastside Bowl with Breaking Sound, and various Tin Roof locations.
        </p>
        <p>
          Ginn has graced the stages of Nashville's iconic Broadway street, including its premiere artist showcase, Whiskey Jam, and sung at major venues 
          like Bridgestone Arena with the Nashville Predators, The Schermerhorn Symphony Center for Christmas at Belmont, streamed live on PBS, and the historic Ryman Auditorium alongside Blake Shelton, Keala Settle, and The War and Treaty.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;