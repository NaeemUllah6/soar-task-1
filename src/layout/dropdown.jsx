import React, { useState } from 'react';
import avataruser from '../assets/images/avatar1.png'
function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button
                id="dropdownDividerButton"
                onClick={toggleDropdown}
                className=""
                type="button"
            >
                <img className='w-[35px] h-[35px]' src={avataruser} alt="" />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div
                    id="dropdownDivider"
                    className="absolute top-10 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                User Profile
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Settings
                            </a>
                        </li>

                    </ul>

                </div>
            )}
        </div>
    );
}

export default Dropdown;
