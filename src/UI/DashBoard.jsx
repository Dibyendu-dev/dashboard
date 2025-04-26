import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { sidebarData } from '../data/menuData'; // Import your menu data

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState({
    title: "Welcome to School Management System",
    content: "Please select a module from the sidebar to get started.",
  });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleMenuClick = (item) => {
    setActiveContent({
      title: item.title || item.label,
      content: `Content for ${item.label} module. This would display the actual functionality for ${item.label}.`,
    });

    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          menuData={sidebarData}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onMenuItemClick={handleMenuClick}
        />
        <MainContent activeContent={activeContent} />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;