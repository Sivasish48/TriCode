import React from 'react';
import { motion } from 'framer-motion';
import MagicButton from '../components/ui/Magicbutton';
import GradualSpacing from '../components/ui/gradualSpacing';
import { Tabs } from "../components/ui/tabs";
import { TabContent } from "../components/TabContent";
import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/js.png";
import output from "../../public/output.png";
import { BackgroundBeamsWithCollision } from '../components/ui/background-beams-with-collision';

const Landing: React.FC = () => {
  const tabs = [
    {
      title: "First Editor",
      value: "product",
      content: (
        <div className="w-full h-full relative rounded-xl p-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1f1f3f] to-black">
          <TabContent imageUrl={html} />
        </div>
      ),
    },
    {
      title: "Second Editor",
      value: "services",
      content: (
        <div className="w-full h-full relative rounded-xl p-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1f1f3f] to-black">
          <TabContent imageUrl={css} />
        </div>
      ),
    },
    {
      title: "Third Editor",
      value: "playground",
      content: (
        <div className="w-full h-full relative rounded-xl p-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1f1f3f] to-black">
          <TabContent imageUrl={js} />
        </div>
      ),
    },
    {
      title: "Output",
      value: "content",
      content: (
        <div className="w-full h-full relative rounded-xl p-6 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1f1f3f] to-black">
          <TabContent imageUrl={output} />
        </div>
      ),
    },
  ];

  return (
    <div>
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#393BB2] via-[#1f1f3f] to-black">
      <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center text-white text-4xl font-semibold font-nunito-sans min-h-screen text-center px-4 relative z-10">
        Master The Art Of Code
        <GradualSpacing
          className="font-nunito-sans text-center text-4xl font-semibold tracking-[-0.1em] text-white dark:text-white md:text-7xl md:leading-[5rem]"
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

        <MagicButton title="Try Now" icon={<span className="text-white border-color-pink">➔</span>} position="left" />
      </div>
      </BackgroundBeamsWithCollision>
      
</div>
<div className='bg-black'>
<div className="h-[40rem] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center my-0 bg-black">
  <Tabs tabs={tabs} />
</div>
</div>
</div>
 
  );
};

export default Landing;


