import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({title, description, githubLink, image, variants}){
    return(
        <motion.div
            variants={variants}
            whileHover={{ y: -8 }}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm dark:bg-gray-800 dark:border-gray">
            <div className="h-48 bg-gray-100">
                <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        </div>
        <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">{title}</h3>
        <p className="text-gray-500 text-sm mb-5 dark:text-gray-400">{description}</p>

        <a 
          href={githubLink} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold dark:text-blue-400 text-blue-600 hover:text-blue-800">
            <FaGithub size={18} />View Code</a>
      </div>

        </motion.div>
    );
}

export default ProjectCard;