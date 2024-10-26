import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { motion } from "framer-motion";

const TechCard = ({ index, name, icon }) => (
  <div className='xs:w-[150px] w-full transform transition-transform duration-300 hover:scale-105'>
   {/* <motion.div
     variants={fadeIn("right", "spring", index * 0.5, 0.3)}
     className='w-full  p-[1px] rounded-[20px] shadow-card'
   > */}
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-gray-300 rounded-[15px] py-2 px-6 min-h-[180px] flex justify-evenly items-center flex-col'
    > 
    
      <img
        src={icon}
        alt='icon'
        className='w-16 h-16 object-contain'
      />

      <p className='text-gray-800 text-[15px] font-bold text-center'>
        {name}
      </p>
    </div>
  {/* </motion.div> */}
  </div> 

);

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center mb-16 text-white font-semibold`}>
          My tech skills
        </p>
    </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
          <TechCard key={technology.name} index={index} {...technology} />
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");