import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap,FaTools,FaDatabase,FaNodeJs,FaReact,FaHtml5} from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';
import DetailCard from '../components/DetailCard';
import SkillCard from '../components/SkillCard';
import useLoading from '../hooks/useLoading';
import AboutSkeleton from '../components/AboutSkeleton';

const containerAnim = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};
const mySkills = [
  { 
    name: 'Frontend', 
    icon: FaHtml5, 
    languages: ['HTML', 'CSS', 'JavaScript'] 
  },
  { 
    name: 'Framework', 
    icon: FaReact, 
    languages: ['React', 'Tailwind CSS'] 
  },
  { 
    name: 'Backend', 
    icon: FaNodeJs, 
    languages: ['Node.js', 'Express.js'] 
  },
  { 
    name: 'Database', 
    icon: FaDatabase, 
    languages: ['MongoDB', 'MySQL'] 
  },
];

function About() {
    const isLoading = useLoading(1500);
     if (isLoading) {return <AboutSkeleton />};
  return (
    <div className="w-full bg-white dark:bg-gray-900">
    <motion.div id="about"
      variants={containerAnim}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4}} 
      className="max-w-4xl mx-auto p-6 pt-20 "
    >
      <motion.h1 variants={itemAnim} className="text-4xl font-bold text-center mb-10 dark:text-white">About Me</motion.h1>

        <div className="mb-10 ">
        <SectionHeader icon={FaGraduationCap} title="Education" />
        <DetailCard 
          variants={itemAnim}
          title="BSc Physical Science"
          place="University of Jaffna"
          year="2022-2025"
          description="Studied Computer Science ,Pure Mathematics and Applied Mathematics ."
        />
      </div>

      <div className="mb-10">
        <SectionHeader icon={FaBriefcase} title="Experience" />
        <DetailCard 
          variants={itemAnim}
          title="School Leaver (Trainee)"
          place="Bank of ceylon"
          year="2021"
          description="Gained experience in customer handling,documentation,and office procedures."
        />
      </div>

       <div className="mb-10">
       <SectionHeader icon={FaTools} title="Skills" />
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {mySkills.map((skill, index) => (
            <SkillCard 
            key={index}
            title={skill.name} 
            icon={skill.icon} 
            languages={skill.languages}
            variants={itemAnim} 
            />
            ))}
        </div>
      </div>
    </motion.div>
    </div>
  );
}

export default About;