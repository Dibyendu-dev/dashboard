import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import StudentTable from "./StudentTable";
import { sidebarData } from "../data/menuData";
import MainContent from "./MainContent"; // Ensure MainContent is imported

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeContent, setActiveContent] = useState({
    title: "Welcome to School Management System",
    content: "Please select a module from the sidebar to get started.",
    component: null, // Dynamically render components here
  });

  // Toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle menu item clicks
  const handleMenuClick = (item) => {
    if (item.label === "Students Details") {
      // Render the StudentTable component when "Personal Details" is clicked
      setActiveContent({
        title: "Students - Personal Details",
        content: null,
        component: <StudentTable />,
      });
    } else {
      // Render default content for other menu items
      setActiveContent({
        title: item.label,
        content: `Content for ${item.label} module. This would display the actual functionality for ${item.label}.`,
        component: null,
      });
    }

    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          menuData={sidebarData}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onMenuItemClick={handleMenuClick}
        />

        {/* Main Content */}
        <MainContent activeContent={activeContent} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;