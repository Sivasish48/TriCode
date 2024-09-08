import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  useInView,
} from "framer-motion";

export const HeroParallaxDemo = ({
  products,
}: {
  products: {
    title: string;
    a: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-gradient-to-b from-black to-purple-900"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-10"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
      <ParallaxOverlay />
    </div>
  );
};

const Header = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-20"
    >
      <h1 className="text-2xl md:text-7xl font-bold text-white mb-6">
        Experience the Future of{" "}
        <span className="bg-clip-text text-transparent bg-purple-700">
          Collaborative Coding
        </span>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 text-neutral-200">
        Transform your coding with real-time collaboration, versatile code editing, and an integrated preview.
        Enjoy a responsive design and powerful tools that enhance productivity and streamline your workflow.
      </p>
    </motion.div>
  );
};

const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    a: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
        transition: { duration: 0.3 },
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 overflow-hidden rounded-lg shadow-lg"
    >
      <motion.a
        href={product.a}
        className="block group-hover/product:shadow-2xl transition-all duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 transition-all duration-300 group-hover/product:scale-110"
          alt={product.title}
        />
      </motion.a>
      <motion.div
        className="absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-60 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
      />
      <motion.h2
        className="absolute bottom-4 left-4 text-white text-xl font-semibold opacity-0 group-hover/product:opacity-100 transition-all duration-300"
        initial={{ y: 20, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        {product.title}
      </motion.h2>
    </motion.div>
  );
};

const ParallaxOverlay = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      <div className="h-full w-full bg-[url('/noise.png')] opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-purple-900/10 to-transparent" />
    </div>
  );
};

export default HeroParallaxDemo;