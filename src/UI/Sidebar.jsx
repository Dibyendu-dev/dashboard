import React, { useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const Sidebar = ({ menuData, isOpen, toggleSidebar, onMenuItemClick }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(null);

  const toggleSection = (sectionIndex) => {
    setActiveSectionIndex(activeSectionIndex === sectionIndex ? null : sectionIndex);
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-30 md:z-0 h-full w-72 bg-gradient-to-b from-indigo-700 to-indigo-900 text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } overflow-y-auto`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-indigo-600">
          <h2 className="font-bold text-lg">Module Navigator</h2>
          <button
            className="md:hidden p-1 rounded hover:bg-indigo-600"
            onClick={toggleSidebar}
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="p-4">
          {menuData.map((section, index) => (
            <div key={index} className="mb-4">
              {/* Section Header */}
              <div
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
                  activeSectionIndex === index
                    ? 'bg-indigo-600 text-white'
                    : 'bg-indigo-800 text-gray-300 hover:bg-indigo-700 hover:text-white'
                } transition-colors duration-200`}
                onClick={() => toggleSection(index)}
              >
                <h3 className="font-medium">{section.label}</h3>
                {activeSectionIndex === index ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>

              {/* Section Items */}
              <div
                className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${
                  activeSectionIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                {section.children &&
                  section.children.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="py-2 px-3 rounded-lg cursor-pointer text-gray-300 hover:bg-indigo-700 hover:text-white transition-colors duration-150 flex items-center"
                      onClick={() => onMenuItemClick(item)}
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                      {item.label}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;