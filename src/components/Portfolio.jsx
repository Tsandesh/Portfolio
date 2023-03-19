import React from 'react'
import { Section } from './common/Section'

import {FaGithub,FaExternalLinkSquareAlt} from 'react-icons/fa'

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.jpg";

const projects =[
    {
        id:1,
        image:p1,
        title:"Futsa app",
        github:"https://github.com/Software-Batch-2018/Futsa-4th-sem-project.git",
        demo:"https://github.com/Software-Batch-2018/Futsa-4th-sem-project.git"
    }, {
        id:2,
        image:p2,
        title:"Mind Game app",
        github:"https://github.com/Tsandesh/React-MemoryGame",
        demo:"https://tsandesh.github.io/React-MemoryGame/"
    }, {
        id:3,
        image:p3,
        title:"Fund Nepal",
        github:"https://github.com/debuggers-pu/Fund-Nepal.git",
        demo:"https://github.com/debuggers-pu/Fund-Nepal.git"
    }, {
        id:4,
        image:p4,
        title:"Chat Buddy",
        github:"https://github.com/Tsandesh/Chat_Buddy",
        demo:"https://www.youtube.com/shorts/jAzrmEMbI00"
    },{
        id:5,
        image:p5,
        title:"Futsa app",
        github:"https://github.com/Software-Batch-2018/Futsa-4th-sem-project.git",
        demo:"https://github.com/Software-Batch-2018/Futsa-4th-sem-project.git"
    },{
        id:6,
        image:p6,
        title:"Best app",
        github:"https://github.com/nodejs/node",
        demo:"https://nodejs.org.en"
    },
]

const Portfolio = () => {
  return (
    <Section title="Portfolio 📝" subtitle="These are all the projects that i have worked on.Some of them i have worked before i gained some experinces.So go gentle on them.">

    <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>
        {projects.map(({id,image,title,github,demo})=>(
            <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
                <img src={image} alt={title} className="w-2/3" />
                <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                    <h2>{title}</h2>
                    <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={github} target="_blank" rel='noopener noreferrer'>
                        <FaGithub/>
                    </a>
                    <a className='text-2xl cursor-pointer duration-150 hover:scale-110' href={demo} target="_blank" rel='noopener noreferrer'>
                        <FaExternalLinkSquareAlt/>
                    </a>
                </div>
            </div>
        ))}
    </div>
    </Section>
  )
}

export default Portfolio