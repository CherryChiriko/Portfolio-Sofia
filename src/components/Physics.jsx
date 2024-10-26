import React from "react";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../style";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-full'>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div
      className='bg-gray-300 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col transform transition-transform duration-300 hover:scale-105 cursor-pointer'
    >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-gray-300 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
    >
    
      <img
        src={icon}
        alt='web-development'
        className='w-16 h-16 object-contain'
      />

      <h3 className='text-gray-800 text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
    </div>
  </motion.div>
  </div>

);

const Physics = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with a strong background in Physics
        and an extensive experience in Front-end and Cobol development, which
        brings a unique combination of analytical skills and technical expertise.
        I'm a quick learner and I listen closely to the clients' demands to
        create efficient and user-friendly solutions.
        <p className="font-bold text-white">I'm always curious to learn new things!</p>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))} 
      </div>
    </>
  );
};

export default SectionWrapper(Physics, "physics");