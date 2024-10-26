import React from "react";

import { AsyncImage } from 'loadable-image';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { studies } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ study }) => {
  return ( 
    <VerticalTimelineElement
    contentStyle={{
      background: "rgb(209 213 219)",
    }}
    contentArrowStyle={{ borderRight: "7px solid  #232631" }}
    date={study.date}
    iconStyle={{ background: study.iconBg }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <AsyncImage
          src={study.icon}
          alt={study.company_name}
          className='w-[60%] h-[60%] object-contain'
        />
      </div>
    }
  >
    <div>
        <h3 className='text-gray-800 text-[24px] font-bold'>{study.title}</h3>
        <p
          className='text-gray-700 text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {study.company_name}
        </p>
        
      </div>

    {study.points && study.points.length > 0 && (
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {study.points.map((point, index) => (
          <li
            key={`study-point-${index}`}
            className='text-gray-600 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    )}
    {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
      {education.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-gray-600 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul> */}
  </VerticalTimelineElement>
  
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have studied so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {studies.map((study, index) => (
            <EducationCard
              key={`study-${index}`}
              study={study}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");