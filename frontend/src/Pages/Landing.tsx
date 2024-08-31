import React from "react";
import { Spotlight } from "../components/ui/spotlight";

export default function Landing() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-blue-900 to-black overflow-hidden relative">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <nav className="absolute top-0 left-0 right-0 p-4 z-20">
        <ul className="flex justify-center space-x-6 text-white">
          <li><a href="#about" className="hover:text-purple-300">About</a></li>
          <li><a href="#projects" className="hover:text-purple-300">Projects</a></li>
          <li><a href="#testimonials" className="hover:text-purple-300">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-purple-300">Contact</a></li>
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center h-full text-center px-4 relative z-10">
        <p className="text-purple-300 mb-2">DYNAMIC WEB MAGIC WITH NEXT.JS</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Transforming Concepts into<br />
          Seamless <span className="text-purple-300">User Experiences</span>
        </h1>
        <p className="text-white mb-8">
          Hi! I'm Adrian, a Next.js Developer based in Croatia.
        </p>
        <button className="bg-white text-blue-900 px-6 py-2 rounded-full hover:bg-purple-300 transition duration-300">
          Show my work ➔
        </button>
      </div>
    </div>
  );
}