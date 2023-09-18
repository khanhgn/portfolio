import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { profilePic } from '../assets';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import Tech from './Tech';

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
      <div className="grid grid-cols-10">
      <div className='col-span-4'>
          <motion.img
              src={profilePic}
              alt="Your Name"
              className="w-80 h-80 object-cover rounded-full"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={imageVariants}
              onLoad={handleImageLoad}
            />
        </div>
        <div className="col-span-6">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] flex-1"
          >
            I'm an aspiring full-stack developer with experience in JavaScript, and expertise
            in frameworks like React, and Node.js. I'm a quick learner and very keen to get more industry experience!
          </motion.p>
        </div>
      </div>
      <Tech />
    </>
  );
};

export default SectionWrapper(About, 'about');
