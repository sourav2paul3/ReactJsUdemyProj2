"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import heroAirpods from "@/public/heroAirpods.png";
import heroBanner from "@/public/heroBanner.png";

const Hero: React.FC = () => {
  const variants = {
    hidden: { x: 0, y: 70, opacity: 0 },
    visible: { x: 0, y: -10, opacity: 1, transition: { delay: 0.05 } },
  };

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="object-cover">
          <Image src={heroBanner} height={100} width={1400} alt="banner" />
        </div>
        <div className="hero-airpods">
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <Image src={heroAirpods} height={100} width={700} alt="airpods" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
