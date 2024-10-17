import React from "react";
import { motion } from "framer-motion";
import MagicButton from "../components/ui/Magicbutton";
import { Tabs } from "../components/ui/tabs";
import { TabContent } from "../components/TabContent";
import html from "../../public/html.png";
import css from "../../public/css.png";
import js from "../../public/js.png";
import output from "../../public/output.png";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";
import { WordPullUp } from "../components/ui/words-pull-up";
import { ShineBorder } from "../components/ui/shine-border";
import { Meteors } from "../components/ui/meteors";
import  DotPattern  from "../components/ui/dot-pattern";
import ShimmerButton from "../components/ui/shimmer-button";
import  cn  from "../lib/utils";
import SparklesText from "../components/ui/sparkles-text";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";


const Landing: React.FC = () => {

  const navigate = useNavigate();
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
  <BackgroundBeamsWithCollision>
    {/* Main Heading with tighter spacing */}
    <div className="relative z-10 text-center font-sans font-bold leading-tight md:leading-snug">
      <h1 className="text-3xl md:text-5xl lg:text-6xl bg-clip-text text-white">
        Master The Art Of Code With
      </h1>

      {/* Apply sparkles effect only to "Tricode" */}
      <SparklesText
        className="text-3xl md:text-5xl lg:text-6xl bg-clip-text text-white"
        text="Tricode"
        sparklesCount={12}
      />

      {/* Subtitle with tighter spacing */}
      <motion.p
        className="relative z-10 text-base md:text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-semibold mt-2 md:mt-4"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
      >
        An Online Collaborative Coding Platform
      </motion.p>

      {/* Button with compact margin */}
      <div className="mt-6 lg:mt-8" onClick={()=>(navigate("/compiler"))}>
        <MagicButton
          title="Try Now"
          icon={<span className="text-white border-color-pink">➔</span>}
          position="left"
        />
      </div>
    </div>
  </BackgroundBeamsWithCollision>
</div>



      <div className="bg-black ">
        <div className="h-[70rem] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center  bg-black p-12">
          <h1 className="relative z-6 text-md md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pb-10">
            Start Coding Together Now
          </h1>
          <Tabs tabClassName="py-4" tabs={tabs} />
        </div>
        <div className="p-20">
          <WordPullUp
            className="relative z-6 text-md md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pb-10"
            words="Share, Save, Code From Anywhere"
          />
          <div className="flex flex-wrap justify-center gap-20 p-10 py-16">
            {/* Card 1 */}
            <ShineBorder
              className="relative flex h-[400px] w-[350px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-black p-4"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              {/* Title Section with Gradient Color */}
              <span className="pointer-events-none bg-gradient-to-r from-purple-400 via-blue-400 to-[#1f1f3f] bg-clip-text text-center text-3xl font-bold leading-none text-transparent">
                Save Your Code, Securely
              </span>

              {/* Simplified Content */}
              <p className="mt-4 text-center text-white">
                Your code is stored safely , accessible anytime, anywhere.
              </p>

              <Meteors number={20} />
            </ShineBorder>

            {/* Card 2 */}
            <ShineBorder
              className="relative flex h-[400px] w-[350px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-black p-4"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              {/* Title Section with Gradient Color */}
              <span className="pointer-events-none bg-gradient-to-r from-purple-400 via-blue-400 to-[#1f1f3f] bg-clip-text text-center text-3xl font-bold leading-none text-transparent">
                Share Your Code, Instantly
              </span>

              {/* Simplified Content */}
              <p className="mt-4 text-center text-white">
                Seamlessly share your code with friends, teams, or the world. No
                boundaries, just a click away.
              </p>

              <Meteors number={20} />
            </ShineBorder>

            {/* Card 3 */}
            <ShineBorder
              className="relative flex h-[400px] w-[350px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-black p-4"
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            >
              {/* Title Section with Gradient Color */}
              <span className="pointer-events-none bg-gradient-to-r from-purple-400 via-blue-400 to-[#1f1f3f] bg-clip-text text-center text-3xl font-bold leading-none text-transparent">
                Code Anonymously
              </span>

              {/* Simplified Content */}
              <p className="mt-4 text-center text-white">
                Want to stay under the radar? Code anonymously without
                compromising on features. Safely enjoy the freedom to code
                without revealing your identity.
              </p>

              <Meteors number={20} />
            </ShineBorder>
          </div>
        </div>

        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-black">
        <h1 className="relative z-6 text-md md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold pb-10">
            What are you waiting for?
          </h1>
        <div className="z-10 flex min-h-64 items-center justify-center" onClick={()=>(navigate("/compiler"))}>
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none text-blue-400 dark:from-white dark:to-slate-900/10 lg:text-lg">
         Start Coding
        </span>
      </ShimmerButton>
    </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,purple,transparent)]",
        )}
      />
    </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;
