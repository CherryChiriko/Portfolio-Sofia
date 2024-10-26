import React from "react";
import { AsyncImage } from 'loadable-image';
import { motion } from "framer-motion";

import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, source_code_link }) => {

  return (
    <div className="bg-gray-300 max-w-xs rounded-2xl p-5 overflow-hidden shadow-lg
    md:h-[30rem] flex flex-col">
      <div className="flex h-1/2 relative">
        <AsyncImage
            src={image}
            alt='image'
            className='w-full h-full object-contain rounded-2xl shadow-xl'
        />
        {source_code_link.length > 0 && <div className='absolute top-0 end-0 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>}
      </div>

      
      
      <div className="px-6 py-4">
        <div className="text-gray-800 font-bold text-md mb-2">{name}</div>
        <p className="text-gray-700 text-base text-xs"> {description}  </p>
      </div>
    </div>
  );
};

const Works = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState(projects[0].language);
  const selectedProjects = projects.find(proj => proj.language === selectedLanguage);
  
  const nProjsPerPage = 3; 
  const pageNum = Math.floor(selectedProjects.prjs.length/(nProjsPerPage + 1)) + 1;

  const projsPerPage = selectedProjects.prjs.reduce((res, item, index) => { 
    const pageIndex = Math.floor(index/nProjsPerPage)

    if(!res[pageIndex]) { res[pageIndex] = [] } // start a new page

    res[pageIndex].push(item)

    return res
  }, [])

  console.log(projsPerPage); 

  const [activePageIndex, setActivePageIndex] = React.useState(0);

  const handleNext = () => {
    setActivePageIndex((prevPrjIndex) => (prevPrjIndex + 1) % pageNum);
  };
  const handlePrev = () => {
    setActivePageIndex((prevPrjIndex) => (prevPrjIndex - 1 + pageNum) % pageNum);
  };
  const goToPage = (index) => {    setActivePageIndex(index);  };
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects showcases my skills and experience through
          real-world examples of my work, reflecting my
          ability to solve complex problems, work with different technologies
          and manage projects effectively.
          {/* <p className="font-bold text-white">Click on the play button to start the program and on the Github icon for the source code.</p> */}
        </motion.div>
      </div>

      <div className="container mx-auto p-4 mt-10">
      <div className="flex justify-center mb-4">
        {projects.map((project, index) => (
          <button
            key={project.language}
            onClick={() => {
              setSelectedLanguage(project.language);
              setActivePageIndex(0);
            }}
            className={` font-bold py-2 px-4 
              ${project.language === selectedLanguage ? 
                'bg-gray-300 text-gray-800' : 
                'bg-gray-700  hover:bg-gray-300 text-white hover:text-gray-800 border-2 border-gray-300'
              }
              ${index === 0 ? 'rounded-l' : ''} 
              ${index === projects.length - 1 ? 'rounded-r' : ''}`}
          >
            {project.language}
          </button>
        ))}
      </div>
      </div>

      <div id="indicators-carousel" className="rounded-xl relative w-full px-4 pb-6" data-carousel="static">
          
          <div className="relative overflow-hidden rounded-lg h-64 md:h-[32rem]">
              
            {projsPerPage.map((item, index) => (
              <div
                key={index}
                className={`${
                  activePageIndex === index ? 'block' : 'hidden'
                } duration-700 ease-in-out absolute inset-0`}
                data-carousel-item={activePageIndex === index ? 'active' : ''}
              >
                <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
                absolute flex justify-evenly items-center w-full h-full">
                {item.map((proj, projIndex) => (
                  <ProjectCard index={projIndex}  {...proj}  key={`prj-${selectedLanguage.language}-${projIndex}`}  />
                ))} 
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-2 left-1/2">
            {[...Array(pageNum)].map((_, index) => (
              <button
                key={index}
                type="button"
                className={`${ activePageIndex === index ? 'bg-white' : 'bg-gray-700' } w-3 h-3 rounded-full`}
                onClick={() => goToPage(index)}
              />
            ))}
          </div> 

          <button type="button" className= {`${activePageIndex > 0 ? 'block' : 'hidden'} absolute top-0 start-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none`} 
                  data-carousel-prev onClick={handlePrev}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-300/30 group-hover:bg-white/50 dark:group-hover:bg-gray-300/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-300/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-300 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                  </svg>
              </span>
          </button>
          <button type="button" className={`${activePageIndex < pageNum - 1 ? 'block' : 'hidden'} absolute top-0 end-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none`}
                 data-carousel-next  onClick={handleNext}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 dark:bg-gray-300/30 group-hover:bg-gray-800/50 dark:group-hover:bg-gray-300/60 group-focus:ring-4 group-focus:ring-gray-800 dark:group-focus:ring-gray-300/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-gray-800 dark:text-gray-300 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
              </span>
          </button>
      </div>

    </>
  );
};

export default SectionWrapper(Works, "");