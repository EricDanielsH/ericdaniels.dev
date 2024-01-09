import React from 'react'
import ProjectCard from './ProjectCard'
import projectsData from "@data/projects.json"

const Projects = () => {
  console.log(projectsData)

  return (
    <section  className='py-28 px-4 md:px-16'>
      <div className='container mx-auto flex justify-center items-center flex-col space-y-4'>
        <h3 className='text-xl font-semibold w-full max-w-[700px] '>/ Projects</h3>

        {/* Projects Container */}
        <div className='flex justify-between items-center gap-4 flex-col lg:grid grid-cols-2'>
          {projectsData.map(project => <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} icons={project.icons} link={project.link} />)}
        </div>



      </div>
    </section>
  )
}

export default Projects