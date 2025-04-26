import React from 'react';

const MainContent = ({ activeContent }) => {
  return (
    <main className="flex-1 p-4 md:p-8 overflow-auto">
      {activeContent && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{activeContent.title}</h2>
          <div className="text-gray-600">{activeContent.content}</div>
        </div>
      )}
    </main>
  );
};

export default MainContent;