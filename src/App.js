import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/sidebar.jsx";
import Settings from "./pages/settings.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Header from "./layout/header.jsx";
import PageNotFound from './pages/not-found.jsx'
import './index.css'


const App = () => {
  return (

    <div className="bg-[#EFF3F9]">
      <Router>
        <div className="py-5 z-40 ps-[20px] bg-white fixed top-0 right-0 w-full lg:w-[calc(100%-250px)] border-b-2 border-[#E6EFF5]">
          <Header headerHeading />
        </div>
        <div className="flex justify-start gap-2 bg-white lg:bg-transparent ">
          {/* Sidebar */}
          <div className=" z-50 max-w-[250px] custom-scrollbar overflow-auto lg:border-r-2 h-[100%] fixed ">
            <Sidebar />
          </div>
          {/* Main Content */}
          <div className=" w-full lg:w-[calc(100%-250px)] px-[18px] md:px-[26px] mt-[90px] md:mt-[120px] lg:px-[36px]  lg:mt-[130px]  lg:ms-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<PageNotFound/>} />
              <Route path="/accounts" element={<PageNotFound/>}/>
              <Route path="/investments" element={<PageNotFound/>} />
              <Route path="/credit-cards" element={<PageNotFound/>} />
              <Route path="/loans" element={<PageNotFound/>} />
              <Route path="/services" element={<PageNotFound/>} />
              <Route path="/privileges" element={<PageNotFound/>} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
