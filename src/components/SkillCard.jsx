import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, icon: Icon,languages, variants }) => {
  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.05 }}
      className="flex sm:flex-col items-center gap-4 bg-white border p-1 rounded-xl shadow-sm dark:bg-gray-800">
    <div className="text-blue-600 text-xl"><Icon /></div>
    <h1 className="font-bold text-gray-800 dark:text-white">{title}</h1>
    <div className="flex sm:flex-row gap-2">
        {languages.map((lang, index) => (
          <div
            key={index} 
            className="text-[11px] font-semibold bg-gray-50 dark:bg-gray-700 dark:text-blue-400 text-blue-700 px-2 py-1 rounded-md border border-blue-50">
            {lang}
          </div>))
        }</div>
    
    </motion.div>
  );
};

export default SkillCard;