import React from 'react';

const tabs = [
  { id: 'community', label: 'Community' },
  { id: 'classroom', label: 'Classroom' },
  { id: 'calendar', label: 'Calendar' },
  { id: 'members', label: 'Members' },
  { id: 'leaderboards', label: 'Leaderboards' },
  { id: 'about', label: 'About' }
];

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-1 py-4 border-b-2 ${
                tab.id === activeTab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}