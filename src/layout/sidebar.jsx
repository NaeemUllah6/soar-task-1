import React, { useState, useCallback } from "react";
import { NavLink, Link } from "react-router-dom";
import { Dashboard, transactions, accounts, investments, cards, loans, services, MyPrivileges, settings } from '../components/icons.js';
import headerImg from '../../src/assets/images/main_logo.svg';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarLinks = [
        { name: "Dashboard", icon: Dashboard, path: "/" },
        { name: "Transactions", icon: transactions, path: "/transactions" },
        { name: "Accounts", icon: accounts, path: "/accounts" },
        { name: "Investments", icon: investments, path: "/investments" },
        { name: "Credit Cards", icon: cards, path: "/credit-cards" },
        { name: "Loans", icon: loans, path: "/loans" },
        { name: "Services", icon: services, path: "/services" },
        { name: "My Privileges", icon: MyPrivileges, path: "/privileges" },
        { name: "Settings", icon: settings, path: "/settings" },
    ];

    const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
    const handleLinkClick = useCallback(() => setIsSidebarOpen(false), []);

    return (
        <div className="relative">
            {/* Sidebar Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="text-2xl text-gray-800  border-none p-4 z-50 mt-2 md:mt-4"
                aria-label="Toggle Sidebar"
            >
                ☰
            </button>

            {/* Sidebar */}
            <nav
                className={`fixed top-0 left-0 w-64 bg-white z-50 lg:border-r-2 transition-transform ease-in-out duration-300
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
                aria-label="Sidebar Navigation"
            >
                <div className="p-4 text-2xl font-bold text-gray-800 flex items-center pt-5 px-[34px] pb-[40px]">
                    <Link to="/">
                        <img loading="lazy" src={headerImg} alt="Logo" />
                    </Link>
                </div>
                <div className="h-[calc(100vh-96px)] overflow-y-auto overflow-x-hidden pb-3">
                    <div className="mt-4 flex flex-col gap-10 justify-center px-[34px]">
                        {sidebarLinks.map((link) => (
                            <NavLink
                                to={link.path}
                                key={link.name}
                                className={({ isActive }) =>
                                    `flex items-center ${
                                        isActive ? "fill-blue text-[#232323] " : "text-[#B1B1B1]"
                                    }`
                                }
                                onClick={handleLinkClick}
                            >
                                <div className="flex gap-[26px]">
                                    <span className="fill-svg">{link.icon}</span>
                                    <span className="text-[18px] font-[500]">{link.name}</span>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            <div
                onClick={() => setIsSidebarOpen(false)}
                className={`fixed inset-0 bg-black bg-opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
            />
        </div>
    );
};

export default Sidebar;
