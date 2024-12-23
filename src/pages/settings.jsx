import React, { useState } from 'react';
import Profile from '../components/tab-components/profile';
import search from '../assets/images/search.svg';

function TabsWithContent() {
  const [activeTab, setActiveTab] = useState('profile'); // Default active tab

  // Function to handle tab clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Tab Header */}
      <div className='mb-10 rounded-2xl'>
        <div className='relative block md:hidden w-full mb-3 '>
          <input className='w-full focus:outline-none h-[50px] bg-[#F5F7FA] ps-[60px] rounded-[40px] placeholder:text-[#8BA3CB] placeholder:text-[15px]' placeholder='Search for something' type="text" />
          <div className='absolute top-4 left-6'>
            <img src={search} alt="" />
          </div>
        </div>
        <div className=" bg-white sm:pb-5 lg:p-[30px] rounded-b-none rounded-3xl">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
            <li className="me-2" role="presentation">
              <button
                onClick={() => handleTabClick('profile')}
                className={`inline-block p-4 border-b-[3px] rounded-t-lg text-[] ${activeTab === 'profile'
                  ? 'text-[#232323] border-[#232323]'
                  : 'border-transparent text-[#718EBF] hover:border-gray-300 dark:hover:text-[#232323]'
                  }`}
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === 'profile'}
              >
                Profile
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                onClick={() => handleTabClick('dashboard')}
                className={`inline-block p-4  border-b-[3px] rounded-t-lg ${activeTab === 'dashboard'
                  ? 'text-[#232323] border-[#232323]'
                  : 'border-transparent text-[#718EBF] hover:border-gray-300 dark:hover:text-[#232323]'
                  }`}
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected={activeTab === 'dashboard'}
              >
                Dashboard
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                onClick={() => handleTabClick('settings')}
                className={`inline-block p-4 border-b-[3px] rounded-t-lg ${activeTab === 'settings'
                  ? 'text-[#232323] border-[#232323]'
                  : 'border-transparent text-[#718EBF] hover:border-gray-300 dark:hover:text-[#232323]'
                  }`}
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === 'settings'}
              >
                Settings
              </button>
            </li>

          </ul>
        </div>

        {/* Tab Content */}
        <div className='bg-white  mb-4 rounded-b-3xl' id="default-tab-content">
          {activeTab === 'profile' && (
            <div className="p-4  rounded-b-3xl bg-white" id="profile" role="tabpanel">
              <Profile />
            </div>
          )}
          {activeTab === 'dashboard' && (
            <div className="p-4 rounded-b-3xl  bg-white" id="dashboard" role="tabpanel">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Preferences content will appear here
              </p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="p-4 rounded-b-3xl bg-white mb-5" id="settings" role="tabpanel">
              security content will appear here
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default TabsWithContent;
