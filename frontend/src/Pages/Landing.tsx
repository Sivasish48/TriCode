import React from 'react';
import { motion } from 'framer-motion';
import MagicButton from '../components/ui/Magicbutton';
import GradualSpacing from '../components/ui/gradualSpacing';
import { Tabs } from "../components/ui/tabs";

const Landing: React.FC = () => {
  const tabs = [
    {
      title: "First Editor",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1f1f3f] to-black">
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Second Editor",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1f1f3f] to-black">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Third Editor",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1f1f3f] to-black">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Output",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1f1f3f] to-black">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#393BB2] via-[#1f1f3f] to-black"> {/* Updated gradient */}
      {/* Main content */}
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

        <MagicButton
          title="Try Now"
          icon={<span className="text-white border-color-pink">➔</span>}
          position="left"
        />
      </div>
      
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-center justify-center my-40">
      <Tabs tabs={tabs} />
    </div>
     
    </div>
  );
};

export default Landing;

const DummyContent = () => {
  return (
    <img
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};