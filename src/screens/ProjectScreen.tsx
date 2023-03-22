import React, { ReactNode } from 'react'
import imgErp from "@/assets/images/website/erp.png"
import imgIntender from "@/assets/images/website/intender.png"
import imgEasyfood from "@/assets/images/website/easyfood.png"
import { PhpLogo, PythonLogo, SqlLogo, VueLogo, WordpressLogo } from '@/components/logo/Logo'

type Project = {
  img: string;
  number: string;
  name: string;
  desc: string;
  features: string[];
  stack: ReactNode[];
};

const projects: Project[] = [
  {
    img: imgErp,
    number: "01",
    name: "Enterprise Resource Planning (ERP)",
    desc: "An internal-use platform for a contractor company.",
    features: [
      "Invoice tracking",
      "Item price tracking",
      "Subcontractor management"
    ],
    stack: [
      <VueLogo />,
      <PhpLogo />,
      <SqlLogo />
    ] 
  },
  {
    img: imgIntender,
    number: "02",
    name: "Intender",
    desc: "A construction information provider",
    features: [
      "Provide project, company, contact info",
      "Admin dashboard",
      "Automatic data processing"
    ],
    stack: [
      <VueLogo />,
      <PhpLogo />,
      <SqlLogo />,
      <PythonLogo />
    ] 
  },
  {
    img: imgEasyfood,
    number: "03",
    name: "Easyfood",
    desc: "Raw chicken E-commerce",
    features: [
      "Invoice tracking",
      "Item price tracking",
      "Subcontractor management"
    ],
    stack: [
      <WordpressLogo />
    ] 
  },
]

export default function ProjectScreen() {
  return (
    <div className='project'>
      <h2 className='project__title'>Projects.</h2>

      
      <div className='mt-3'>
        {projects.map((project, index) => (

        <div className='block'>
          <div className='project__header'>
            <img src={project.img} alt="my profile" className='project__header__image'/>
            <div className='project__header__subtitle'>
              <h3 className='text-3xl'>{project.number}</h3>
              <h3 className='mt-3 text-3xl'>{project.name}</h3>
            </div>
          </div>

          <p>{project.desc}</p>

          <ul className='list-disc pl-5'>
          {project.features.map((feature, index) => (
            <li>{feature}</li>
          ))}
          </ul>

          <h4 className='mt-5'>Stack</h4>
          {project.stack.map((logo,index) => (
            logo
          ))}

        </div>

        ))}
 
      </div>

    </div>
  )
}
