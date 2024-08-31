import React from 'react';
import { motion } from 'framer-motion';
import { Spotlight } from '../components/ui/spotlight';
import MagicButton from '../components/ui/Magicbutton';


const Landing: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-black to-black">

      
      
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-900/50" />

      <nav className="absolute top-0 left-0 right-0 p-4 z-20">
        <ul className="flex justify-center space-x-6 text-white">
          {['About', 'Testimonials', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors">{item}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
      
      <div className="flex flex-col items-center justify-center h-full text-center px-4 relative z-10">
        
        <motion.p 
          className="text-purple-300 mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Spotlight className='bg-blue h-50'/>
          DYNAMIC WEB MAGIC WITH NEXT.JS
        </motion.p>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Transforming Concepts into<br />
          Seamless <span className="text-purple-300">User Experiences</span>
        </motion.h1>
        <motion.p 
          className="text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Hi! I'm Adrian, a Next.js Developer based in Croatia.
        </motion.p>
       
          <MagicButton title="Show my work" icon={<span className="text-white">➔</span>} position="left" />
        
      </div>
    </div>
  );
};

export default Landing;