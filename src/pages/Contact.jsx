import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import ContactSkeleton from '../components/ContactSkeleton';
import useLoading from '../hooks/useLoading';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },  //children comes not same time one by one comes main petti vantha piraku child anim start aka 0.3 s edukum 
  },
};
const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};
const iconVariants = {
  hidden: { opacity: 0, scale: 0.4, y: 16 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
};
const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.9 } },
};


function Contact() {

     const isLoading = useLoading(1500); // 1.5 seconds loading

    if (isLoading) {return <ContactSkeleton />};

  return (
     <div id="contact" className="w-full bg-white dark:bg-gray-900">
    <motion.div className="min-h-screen pt-32 flex flex-col items-center" initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }} 
      variants={containerVariants}>
      <motion.h1 className="text-4xl font-bold text-center mb-10 dark:text-white" variants={titleVariants}>Contact Info</motion.h1>
      
      <motion.div className="flex gap-10 grid grid-cols-1 md:grid-cols-3" variants={containerVariants}>
        <motion.a 
          href="https://github.com/nivethitha-03" 
          target="_blank"  //link click pana new tab open akum 
          rel="noopener noreferrer"      //tab a redirect panama iruka 
          className="text-4xl text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-all duration-300 hover:-translate-y-2"
          variants={iconVariants}
          whileHover={{ y: -8, scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        ><FaGithub /></motion.a>

        <motion.a 
          href="https://linkedin.com/in/nivethitha-kirupakaran-b11407387" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-4xl text-gray-600 dark:text-gray-300 hover:text-sky-400 transition-all duration-300 hover:-translate-y-2"
          variants={iconVariants}
          whileHover={{ y: -8, scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        ><FaLinkedin /></motion.a>

        <motion.a 
          href="mailto:nivethithakirupakaran@gmail.com" 
          className="text-4xl text-gray-600 dark:text-gray-300 hover:text-orange-700 transition-all duration-300 hover:-translate-y-2"
          variants={iconVariants}
          whileHover={{ y: -8, scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        ><FaEnvelope /></motion.a>
      </motion.div>

      <motion.div className="mt-12 text-center text-gray-500 font-serif " variants={infoVariants}>
        <p className="text-lg font-medium">Nivethitha Kirupakaran</p>
        <p>Atchuvely,Jaffna</p>
      </motion.div>
    </motion.div>
    </div>
  );
}

export default Contact;