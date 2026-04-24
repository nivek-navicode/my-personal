import React from 'react';

const ProjectsSkeleton = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 pt-24 animate-pulse">
      {/* title */}
      <div className="h-10 bg-gray-200 rounded-lg w-48 mx-auto mb-10"></div>

      {/* grid layout cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
        {/* image area */}
        <div className="h-48 bg-gray-200"></div>
            
        <div className="p-5">
        {/* title */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        {/* description  */}
        <div className="h-4 bg-gray-100 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-100 rounded w-5/6 mb-5"></div>
        {/* link */}
        <div className="h-4 bg-gray-100 rounded w-1/3"></div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSkeleton;