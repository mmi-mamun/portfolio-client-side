import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [projects])
    return (
        <div className='px-10'>
            {/* <p>{projects.length}</p> */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 my-5 p-5 mx-auto">
                {
                    projects.map(project => <ProjectCard key={project.project_id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;