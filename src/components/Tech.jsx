import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The software programs I am proficient in</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Being a lifelong learner is a trait that is really important to me, and I know that a good education is not just for the schoolyard. Some lessons were learned in the traditional way, while others I have received from professional mentors, while working and in some cases, friends and family. Read about my professional journey and get in touch if you have any questions.
      </motion.p>

      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
    
  );
};

export default SectionWrapper(Tech, "");