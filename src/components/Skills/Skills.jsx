// import React from 'react';
// import { SkillsInfo } from '../../constants';
// import Tilt from "react-parallax-tilt"

// const Skills = () => {
//   return (
//       <section id="skills" >

//          {/* Section Title */}
//         <div className='mt-8 text-center'>
//           <h2 className='text-3xl font-bold text-center text-white sm:text-4xl '>SKILLS</h2>
//           <div className='bg-[#8245ec] w-24 h-1 mt-2 mx-auto'></div>
//           <p className='mt-4 text-lg font-semibold text-gray-400'>
//             A collection of my technical skills and expertise honed through various projects and experiences
//           </p>
//         </div>


//         {/* Skill Categories */}        
//         <div className='flex flex-wrap justify-between gap-1 px-10 py-10 lg:gap-5'>
//           {SkillsInfo.map((category) => (
//             <div key={category.title}
//             className='bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
//             shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'
//             >
//             <h3 className='mb-4 text-2xl font-semibold text-center text-gray-400 sm:text-3xl'>
//             {category.title}
//             </h3>  
            
//             {/* Skill Items - 3 per row on larger screens */}
            
//             <Tilt
//             key={category.title}
//             tiltMaxAngleX={20}
//             tiltMaxAngleY={20}
//             perspective={1000}
//             scale={1.05}
//             transitionSpeed={1000}
//             gyroscope={true}
//             >
//               <div className='grid w-full grid-cols-3 gap-3 '>
//                 {category.skills.map((skill) => (
//                   <div id={skill.name}
//                   className='flex items-center justify-center px-2 py-2 space-x-2 bg-transparent border-2 border-gray-700 text center rounded-3xl sm:py-2 sm:px-2'
//                   >
//                     <img
//                     src={skill.logo}
//                     alt={`${skill.name} logo` }
//                     className='w-6 h-6 sm:w-8 sm:h-8'
//                     />
//                   <span className="text-xs text-gray-300 sm:text-sm">
//                     {skill.name}
//                   </span>
//                   </div>
//                 ))}
//               </div>
//             </Tilt>

//             </div>
//           ))}

//         </div>
//       </section>
//   )
// }

// export default Skills


// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="mt-4 text-lg font-semibold text-gray-400">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap justify-between gap-1 py-10 lg:gap-5">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="mb-4 text-2xl font-semibold text-center text-gray-400 sm:text-3xl">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center px-2 py-2 space-x-2 text-center bg-transparent border-2 border-gray-700 rounded-3xl sm:py-2 sm:px-2"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs text-gray-300 sm:text-sm">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;