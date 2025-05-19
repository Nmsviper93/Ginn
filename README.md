# Ginn's Music Portfolio

A professional artist portfolio website built with React, TypeScript, and Tailwind CSS, featuring music integration, tour dates, and a contact system.

## Features

- 🎵 Music Integration
  - Spotify player embedding
  - YouTube music video showcase
  - Latest releases section
  - Cross-platform music links

- 📸 Media Gallery
  - Photo gallery with lightbox
  - Music video collection
  - Live performance videos

- 🎫 Tour Information
  - BandsInTown integration
  - Upcoming shows listing through BandsInTown
  - Ticket purchase links through BandsInTown

- 📧 Contact System
  - Email contact form
  - Newsletter subscription
  - Social media links

- 📱 Responsive Design
  - Mobile-first approach
  - Optimized for all screen sizes
  - Smooth animations and transitions

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Integration**: EmailJS
- **Development**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ginn-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # Reusable React components
├── pages/          # Page components
├── App.tsx         # Main application component
└── main.tsx       # Application entry point
```

## Key Components

- `HomePage`: Landing page with latest news and mailing list
- `MusicPage`: Music player and releases showcase
- `MediaPage`: Photo gallery and video collection
- `AboutPage`: Artist biography and information
- `ContactPage`: Contact form and social links

## Deployment

The site is configured for deployment on Netlify. The build command is `npm run build` and the publish directory is `dist`.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [EmailJS](https://www.emailjs.com)