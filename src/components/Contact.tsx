import React, { useState, useRef } from 'react';
import { Facebook, Instagram, Music, Youtube, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactContent: React.FC = () => {
  const [formData, setFormData] = useState({
    to_email: 'your.email@example.com', // Replace with your email address
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: formData.to_email,
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        setFormData({
          to_email: formData.to_email,
          from_name: '',
          from_email: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name === 'name' ? 'from_name' : e.target.name === 'email' ? 'from_email' : e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-col items-center space-y-8 max-w-2xl mx-auto">
      <Toaster position="top-center" />
      
      <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Contact Header"
          className="w-full h-full object-cover"
        />
      </div>

      <p className="text-xl text-gray-700 text-center">
        Interested in working together, or need music for your event? Send me a message and let's talk!
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.from_name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.from_email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 bg-white p-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-purple-600 text-white py-2 px-4 rounded-md transition-colors duration-200 
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="flex space-x-6 pt-6">
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

export default ContactContent;