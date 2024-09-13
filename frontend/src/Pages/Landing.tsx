// import React from 'react';
// import { motion } from 'framer-motion';
// import { Spotlight } from '../components/ui/spotlight';
// import MagicButton from '../components/ui/Magicbutton';
// //import { HeroParallax } from '../components/HeroParallax';
// import { useNavigate } from 'react-router-dom';
// //import { ContainScroll } from '../components/ContainerScroll';
// const Landing: React.FC = () => {

//   const navigate = useNavigate();

  
//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-black">
//     <div className="absolute inset-0 bg-gradient-radial from-transparent to-blue-900/50" />
  
//     <nav className="absolute top-0 left-0 right-0 p-4 z-20">
//       <ul className="flex justify-center space-x-6 text-white">
//         {['About', 'Testimonials', 'Contact'].map((item) => (
//           <motion.li
//             key={item}
//             whileHover={{ scale: 1.1, rotate: 0 }}
//             whileTap={{ scale: 0.9, rotate: 2 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <a href={`#${item.toLowerCase()}`} className="hover:text-purple-500 transition-colors text-lg">
//               {item}
//             </a>
//           </motion.li>
//         ))}
//       </ul>
//     </nav>
  
//     <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10">
//       <Spotlight className="h-200 bg-blue" />
  
//       <motion.h1
//       className="text-2xl md:text-6xl font-bold text-white mb-4 leading-tight"
//       initial={{ opacity: 0, y: 50, scale: 1.2 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
//     >
//       Master the Art of Code <br />
//       With <span className="text-purple-500 text-lg md:text-8xl">TRICODE</span>
//     </motion.h1>

//     <motion.p
//       className="text-white mb-8 text-lg md:text-xl"
//       initial={{ opacity: 0, x: -30 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
//     >
//       An Online Collaborative Coding Platform
//     </motion.p>

//     <MagicButton 
//       title="Try Now" 
//       icon={<span className="text-white border-color-pink">➔</span>} 
//       position="left" 
//       onClick={() => navigate('/home')}
//     />
//   </div>
// </div>
 
  
//   );
// };

// export default Landing;


import React from 'react';
import { motion } from 'framer-motion';
import MagicButton from '../components/ui/Magicbutton';
import { useNavigate } from 'react-router-dom';
import GradualSpacing from '../components/ui/gradualSpacing';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#393BB2] to-[black]">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 p-4 z-20">
        <ul className="flex justify-center space-x-6 text-white">
          {['About', 'Testimonials', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, rotate: 0 }}
              whileTap={{ scale: 0.9, rotate: 2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <a href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors text-lg">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center text-white text-4xl font-semibold font-nunito-sans min-h-screen text-center px-4 relative z-10">
  Master The Art Of Code
  <GradualSpacing
    className="font-nunito-sans text-center text-4xl font-semibold tracking-[-0.1em]  text-white dark:text-white md:text-7xl md:leading-[5rem]"
    text=" With TRICODE"
  />

  <motion.p
    className="text-gray-500 mb-8 text-lg md:text-xl"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
  >
    An Online Collaborative Coding Platform
  </motion.p>

  <MagicButton
    title="Try Now"
    icon={<span className="text-white border-color-pink">➔</span>}
    position="left"
  />
</div>

    </div>
  );
};

export default Landing;
