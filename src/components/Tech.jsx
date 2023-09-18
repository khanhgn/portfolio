import React from "react";
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <motion.p
    variants={fadeIn("", "", 0.2, 1)}
    >
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </motion.p>
  );
};

export default SectionWrapper(Tech, "");