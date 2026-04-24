import React from 'react';
import { motion } from 'framer-motion';

function DetailCard ({ title, place, year, description, variants }) {
  return (
    <motion.div 
      variants={variants} 
      whileHover={{ scale: 1.02 }}
      className="bg-white border p-6 rounded-2xl shadow-sm mb-4 dark:bg-gray-800"
    >
      <div className="flex justify-between items-start">
      <h1 className="text-lg font-bold text-gray-900  dark:text-white">{title}</h1>
      <div className="text-blue-600 text-sm font-medium">{year}</div>
      </div>
      <p className="text-blue-600 font-semibold text-sm mb-2 dark:text-gray-400">{place}</p>
      <p className="text-gray-500 text-sm leading-relaxed dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

export default DetailCard;