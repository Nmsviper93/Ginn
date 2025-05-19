import React from 'react';

const BandsinTownWidget = () => {
  return (
    <div className="text-center">
      {/* Link to BandsInTown profile */}
      <a 
        href="https://www.bandsintown.com/a/15553536-ginn?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-teal text-white px-8 py-3 rounded-full hover:bg-primary-teal/90 transition-colors inline-flex items-center space-x-2"
      >
        <span>View Tour Dates</span>
        <span className="text-xl">→</span>
      </a>
    </div>
  );
};

export default BandsinTownWidget;