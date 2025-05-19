import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import ginnPhoto10 from '../assets/photos/ginnPhoto10.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    to_email: 'management@ginnmusicofficial.com',
    from_name: '',
    from_email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_nrpu5kc',
        'template_kzjw4ov',
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          to_email: formData.to_email
        },
        'IQLILtAkpanC0w6AI'
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully!');
        setFormData({
          ...formData,
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
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name === 'name' ? 'from_name' : name === 'email' ? 'from_email' : name]: value
    });
  };

  return (
    <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
      <Toaster position="top-center" />
      
      <div className="flex items-center justify-center h-96 w-full">
        <img 
          src={ginnPhoto10} 
          alt="Contact" 
          className="max-h-full w-auto rounded-lg"
        />
      </div>

      <p className="text-xl text-white text-center">
        Interested in working together, or need music for your event? Send me a message and let's talk!
      </p>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.from_name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-teal focus:ring-primary-teal bg-white p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.from_email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-teal focus:ring-primary-teal bg-white p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-teal focus:ring-primary-teal bg-white p-2"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-primary-teal text-white py-2 px-4 rounded-lg transition-colors duration-200 
            ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;