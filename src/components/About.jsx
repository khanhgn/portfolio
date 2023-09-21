import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { profilePic } from '../assets';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import Tech from './Tech';
import {isMobile} from 'react-device-detect';

const About = () => {
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);

  const handleImageLoad = () => {
    // This function will be called when the profile image has loaded.
    setProfileImageLoaded(true);
  };

  // Define animation variants for the profile image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} cursor-default`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} cursor-default`}>
          About me.
        </h2>
      </motion.div>
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="col-span-2 sm:col-span-1 flex items-center justify-center">
          <motion.img
            src={profilePic}
            alt="Khanh Nguyen"
            className="w-80 h-auto object-cover"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={imageVariants}
            onLoad={handleImageLoad}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-md sm:max-w-full leading-[30px] flex-1"
          >
             I'm an aspiring full-stack developer with experience in JavaScript and proficiency 
            in frameworks like React and Node.js. I'm a quick learner and very keen to get more industry experience!<br />
            <br />
            Outside of my university studies, I actively engage with various student organizations and groups, including the Society of Quantitative Analysis and Data. Being a part of these organizations has allowed me to immensely develop leadership and teamwork skills!
            <br /><br />
            This summer, I'm furthering my journey in research by being an intern at the Australian Institute of Machine Learning. 
            <br /><br />
            I'm committed to continuously expanding my knowledge and skills in using different technologies. Have a look below for those that I'm familiar with!
          </motion.p>
        </div>
      </div>
      <Tech />
    </>
  );
};

export default SectionWrapper(About, 'about');
