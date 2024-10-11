"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import cn from "./../../lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div className={cn("flex flex-col items-center justify-center w-full space-y-4", containerClassName)}>
      {/* Navigation container with black background */}
      <div
        className={cn(
          "flex flex-row items-center justify-center space-x-4 overflow-x-auto no-visible-scrollbar max-w-full bg-black p-4 rounded-lg",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-6 py-2 rounded-full transition-all duration-300 ease-in-out",
              active.value === tab.value ? activeTabClassName : tabClassName
            )}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className="absolute inset-0 bg-[#393BB2] rounded-full"
              />
            )}
            <span className="relative block text-white">{tab.title}</span>
          </button>
        ))}
      </div>

      {/* Content area */}
      <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden relative">
        {propTabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              opacity: active.value === tab.value ? 1 : 0,
              zIndex: active.value === tab.value ? 1 : -1,
            }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
            className={cn("absolute inset-0 w-full h-full", contentClassName)}
          >
            {tab.content}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
