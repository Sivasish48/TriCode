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
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#393BB2] via-[#1f1f3f] to-black">
  <BackgroundBeamsWithCollision >
    {/* Main Heading with tighter spacing */}
    <div className="relative z-10 text-3xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold leading-tight md:leading-snug">
      Master The Art Of Code
      <GradualSpacing
        className="relative z-10 text-3xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold leading-tight md:leading-snug"
        text=" With TRICODE"
      />
      {/* Subtitle with tighter spacing */}
      <motion.p
        className="relative z-10 text-base md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-semibold mt-2 md:mt-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 300 }}
      >
        An Online Collaborative Coding Platform
      </motion.p>

      {/* Button with compact margin */}
      <div className="mt-6 lg:mt-8">
        <MagicButton title="Try Now" icon={<span className="text-white border-color-pink">➔</span>} position="left" />
      </div>
    </div>
  </BackgroundBeamsWithCollision>
</div>


<div className='bg-black'>
<div className="h-[70rem] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center  bg-black">
<h1 className="relative z-6 text-md md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pb-10">
     Start Coding Together Now
        </h1>
  <Tabs tabClassName="py-4"tabs={tabs} />
</div>
</div>
</div>
 
  );
};

export default Landing;


