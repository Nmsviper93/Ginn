import React from 'react';

interface Tab {
  id: string;
  color: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-2 sm:space-x-4 rounded-xl bg-primary-blue/5 p-2 shadow-lg backdrop-blur-sm border border-black">
        {tabs.map((tab) => {
          if (tab.id === 'Contact') return null;
          
          return (
            <button
              key={tab.id}
              className={`flex-1 min-w-[100px] rounded-lg py-2 sm:py-3 text-sm sm:text-base font-medium leading-5 transition-all uppercase
                ${activeTab === tab.id
                  ? `bg-gray-300 text-primary-blue shadow-md`
                  : 'text-white hover:bg-white/50 hover:text-primary-blue'
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.id}
            </button>
          );
        })}
        {tabs.find(tab => tab.id === 'Contact') && (
          <button
            className={`flex-1 min-w-[100px] rounded-lg py-2 sm:py-3 text-sm sm:text-base font-medium leading-5 transition-all uppercase
              ${activeTab === 'Contact'
                ? `bg-gray-300 text-primary-blue shadow-md`
                : 'text-white hover:bg-white/50 hover:text-primary-blue'
              }`}
            onClick={() => setActiveTab('Contact')}
          >
            Contact
          </button>
        )}
      </div>

      <div className="mt-6 p-4 sm:p-6 rounded-lg shadow-lg">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

export default Tabs;