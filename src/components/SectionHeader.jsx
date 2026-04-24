import React from 'react';

function SectionHeader ({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-blue-600 text-xl" />
      <h1 className="text-2xl font-bold text-blue-400">{title}</h1>
    </div>
  );
};

export default SectionHeader;