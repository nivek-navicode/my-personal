import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import ProjectsSkeleton from "../components/ProjectsSkleton";
import useLoading from "../hooks/useLoading";

const containerAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
const projectsData =[
    {
    title: "webtask_interview",
    description: "For Interview purpose.",
    githubLink: "https://github.com/nivethitha-03/web-task",
    image: "https://media.licdn.com/dms/image/v2/C4E12AQEDHtUmDLS3yQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520046874939?e=2147483647&v=beta&t=9r5LerPDALfUQW36HYezN-aRfmXdJsWrtjJ-j-VDZAs" 
  },
  {
    title: "Vehicle Booking management system",
    description: "Group project.",
    githubLink: "https://github.com/UoJ-LK/Management-Information-System",
    image: "https://images.squarespace-cdn.com/content/v1/61730a7d9c7a0c57e52d6f0b/dfc46856-7e43-401b-b941-ae85cedb0548/AdobeStock_170135481.jpeg"
  },
  {
    title: "portfolio website ",
    description: "For my personal.",
    githubLink: "https://github.com/nivethitha-03/portfolio",
    image: "https://static-blog.onlyoffice.com/wp-content/uploads/2025/09/30124756/portfolio.png"
  }
];

function Projects(){

    const isLoading = useLoading(1500); // 1.5 seconds loading

  if (isLoading) {return <ProjectsSkeleton />};

    return(
        <div className="w-full bg-white dark:bg-gray-900">
        <motion.div id="projects" variants={containerAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }} 
            className="max-w-6xl mx-auto p-6 pt-24 ">
            <motion.h1 variants={itemAnim} className="text-3xl font-bold dark:text-white text-blue-900 mb-10 text-center">My Projects</motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            image={project.image}
            variants={itemAnim} 
          />
        ))}
      
        </div>
        </motion.div>
        </div>
    );
}
export default Projects;
