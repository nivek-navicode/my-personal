import profileImg from '../assets/profile.jpg';
import HomeSkeleton from '../components/HomeSkeleton';
import useLoading from '../hooks/useLoading';
import {motion} from 'framer-motion';

function Home () {
    
  const isLoading = useLoading(1500); 
  

  if (isLoading) {return <HomeSkeleton />};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

  return (
     <div className="min-h-screen bg-white dark:bg-gray-900">
    <motion.div id="home" variants={containerVariants} initial="hidden" whileInView="visible"
  viewport={{ once: false, amount: 0.4 }} className=" pt-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          {/*full stack developer intern */}
          <motion.h1 
            variants={itemVariants}
            className="text-blue-600 font-semibold uppercase text-sm mb-6"
          >
            {"Full stack developer Intern".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -20 }}
               whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
           {/*nivethitha kirupakaran */}
           <motion.h2
              variants={containerVariants}
              className="text-5xl md:text-7xl font-extrabold mb-3"
            ><span className="text-blue-900 dark:text-white flex justify-center md:justify-start">
             {"Nivethitha".split("").map((letter, i) => (
              <motion.span
              key={i}
              variants={letterVariants}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="inline-block"
              >{letter}
              </motion.span>
                ))}
              </span>
              <span className="text-black dark:text-white flex justify-center md:justify-start">
                {"Kirupakaran".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    transition={{ duration: 0.4, delay: i * 0.05 + 0.5 }}
                    className="inline-block"
                  >{letter}
                  </motion.span>
                ))}
              </span>
            </motion.h2>


          <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 dark:text-gray-400">
            Physical Science undergraduate at the University of Jaffna.
            Skilled in application design, development, and problem-solving. 
            Passionate about building modern front-end experiences.
          </motion.p>
          
           {/*Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-4 rounded-xl font-bold dark:hover:bg-blue-200 hover:bg-gray-800 transition shadow- shadow-gray-200">
            View Projects</motion.button>
            <motion.a 
            href="/my-personal/Nivethitha_CV.pdf"
            download="Nivethitha_CV.pdf"
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="dark:border-gray-600 dark:text-gray-300 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition">Download CV</motion.a>
          </motion.div>

        </div>

        {/* Image*/}
        <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
         viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.5 }} className="order-1 md:order-2 flex justify-center">
    
            
        {/* Main Image Container */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="w-64 h-80 md:w-80 md:h-[450px] bg-gray-200 rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
        <img 
        src={profileImg}
        alt="Nivethitha Kirupakaran pic" 
        className="w-full h-full object-cover"
        />
        </motion.div>
        
        </motion.div>

      </div>
    </motion.div>
    </div>
  );
}

export default Home;