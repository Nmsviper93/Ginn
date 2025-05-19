import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home.tsx';
import './index.css';

// Create root element and render the app in strict mode for better development experience
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);