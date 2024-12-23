import React, { useEffect, useState } from 'react';
import { Images } from '../assets/index.js';
import { useLocation, Link } from 'react-router-dom';
import search from '../assets/images/search.svg'
import HeaderSettings from '../assets/images/header-settings.svg'
import Notification from '../assets/images/notification.svg'
import avataruser from '../assets/images/avatar1.png'
import DropDown from '../layout/dropdown.jsx'
function Header() {
  const location = useLocation();
  const [pathurl, setPathurl] = useState("Heading");

  useEffect(() => {
    function headerHeading() {
      switch (location.pathname) {
        case '/':
          setPathurl('Overview');
          break;
        case '/transactions':
          setPathurl('Transactions');
          break;
        case '/settings':
          setPathurl('Settings');
          break;
        case '/accounts':
          setPathurl('Accounts');
          break;
        case '/investments':
          setPathurl('Investments');
          break;
        case '/credit-cards':
          setPathurl('Credit Cards');
          break;
        case '/loans':
          setPathurl('Loans');
          break;
        case '/services':
          setPathurl('Services');
          break;
        case '/privileges':
          setPathurl('My Privileges');
          break;

        default:
          setPathurl('Page Not Found');
      }
    }

    headerHeading();
  }, [location.pathname]);

  return (
    <div className='flex justify-between items-center pe-8  max-h-[100px] '>
      <div className='flex ps-7 lg:p-0'>
        <h2 className='font-[600] text-[20px] md:text-[28px] font-inter  lg:text-left'>
          {pathurl}
        </h2>
      </div>
      <div className='flex gap-[40px]'>
        <div className='relative hidden lg:block'>
          <input className='focus:outline-none h-[50px] bg-[#F5F7FA] ps-[60px] rounded-[40px] placeholder:text-[#8BA3CB] placeholder:text-[15px]' placeholder='Search for something' type="text" />
          <div className='absolute top-4 left-6'>
            <img src={search} alt="" />
          </div>

        </div>

        {/* Remove or add appropriate src for the next two images */}
        <Link to='/'><img className='hidden md:block' loading='lazy' src={HeaderSettings} alt="Image 2" /></Link>
        <Link to='/'><img className='hidden md:block' loading='lazy' src={Notification} alt="Image 3" /></Link>
        <div className='hidden md:block'>
          <img className='h-[60px] w-[60px]' loading='lazy' src={avataruser} alt="Image 3" />
        </div>
        <div className='block md:hidden'>
          <DropDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
