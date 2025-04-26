import React from 'react'

const Section = ({title, children}) => {
    return (
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-2 border-b pb-1">{title}</h2>
          <ul className="list-disc list-inside space-y-1">{children}</ul>
        </div>
      );
}

export default Section