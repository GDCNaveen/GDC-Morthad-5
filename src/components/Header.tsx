import React from 'react';

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const tabs = ['All', 'Mathematics', 'Science', 'Social', 'Telugu', 'English', 'Computer Science'];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/6d75de89-7405-42fc-9813-ebecde8e9a71.png" 
              alt="College Logo" 
              className="w-16 h-16 rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-purple-600"
            />
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Government Degree College, Morthad
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                (Affiliated to Telangana University)
              </p>
            </div>
          </div>
        </div>

        <nav className="border-t pt-4">
          <div className="flex space-x-1 overflow-x-auto justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-red-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
