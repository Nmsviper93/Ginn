import React, { useState } from 'react';
import { Calendar, Play } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import InstagramFeed from '../components/InstagramFeed';
import ginnPhoto1 from '../assets/photos/ginnPhoto1.JPG';
import ginnPhoto2 from '../assets/photos/ginnPhoto2.JPG';
import ginnPhoto3 from '../assets/photos/ginnPhoto3.jpeg';

const HomePage = () => {
  // State for email subscription form
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // News items data
  const newsItems = [
    {
      date: "February 3, 2025",
      title: "Meet Ginn",
      content: "Featured article in Nashville Voyager magazine",
      link: "https://nashvillevoyager.com/interview/meet-ginn-of-east-nashville"
    },
    {
      date: "September 29, 2024",
      title: "Magic Hands Single Release",
      content: "Review of my single by Netherlands based music blog Leftfuturewave",
      link: "https://lefuturewave.com/2024/09/29/ginn-magic-hands/"
    },
    {
      date: "September 19, 2024",
      title: "Magic Hands Review",
      content: "Review of my single Magic Hands by Mexican media company Expansión Radial",
      link: "https://www.expansionradial.mx/ginn-magic-hands-pop-rock/"
    }
  ];

  // Handle newsletter subscription
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_nrpu5kc',
        'template_mrlf554',
        {
          subscriber_email: email,
          to_email: 'management@ginnmuiscofficial.com'
        },
        'IQLILtAkpanC0w6AI'
      );

      if (result.text === 'OK') {
        toast.success('Thanks for subscribing!');
        setEmail('');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      <Toaster position="top-center" />
      
      {/* Photo Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[ginnPhoto1, ginnPhoto2, ginnPhoto3].map((photo, index) => (
          <div key={index} className="flex items-center justify-center h-[500px]">
            <img
              src={photo}
              alt={`Ginn Photo ${index + 1}`}
              className="h-full w-auto object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Featured Music Video */}
      <div className="bg-primary-blue rounded-lg shadow-md overflow-hidden">
        <a href="https://www.youtube.com/watch?v=7IcFcyX2z8U" target="_blank" rel="noopener noreferrer" className="relative block">
          <img 
            src="https://img.youtube.com/vi/7IcFcyX2z8U/maxresdefault.jpg"
            alt="1976 - Official Music Video"
            className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <Play size={48} className="text-white" />
          </div>
        </a>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-white mb-2">1976 - Official Music Video</h3>
          <p className="text-white/80">Released May 2025</p>
        </div>
      </div>

      {/* News Section */}
      <div className="grid gap-8">
        <div className="bg-primary-blue rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6 text-white border-b pb-2">Latest News</h2>
          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
                <div className="text-sm text-white/80">{item.date}</div>
                <h3 className="text-lg font-semibold text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-white/80 mt-1">{item.content}</p>
                <a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-white hover:text-white/80 text-sm mt-2 inline-block"
                >
                  Read more →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Tour Dates Section */}
        <div className="bg-primary-blue rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <Calendar size={48} className="text-white" />
            <h2 className="text-3xl font-bold text-white">Live Shows</h2>
            <p className="text-xl text-white/80 max-w-2xl">
              Want to catch a live performance? Check out my upcoming tour dates and get tickets!
            </p>
            <a 
              href="https://www.bandsintown.com/a/15553536-ginn"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-teal text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors inline-flex items-center space-x-2 text-lg"
            >
              <span>View Tour Dates</span>
              <span className="text-xl">→</span>
            </a>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-primary-blue rounded-lg shadow-md p-6">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">Join the Mailing List</h2>
            <p className="text-xl text-white/80 max-w-2xl">
              Stay updated with new releases, tour dates, and exclusive content!
            </p>
            <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-primary-teal focus:ring-primary-teal bg-white p-3 text-lg"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-primary-teal text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors text-lg
                    ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;