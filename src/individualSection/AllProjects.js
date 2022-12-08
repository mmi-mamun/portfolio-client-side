import React, { useEffect, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [projects])


    return (
        <div className='px-10'>
            {/* <p>{projects.length}</p> */}
            <div className="mb-5">
                <h1 className="text-5xl text-center text-orange-600 font-bold">Feature Projects</h1>
                <h5 className="text-xl text-center mt-2 mb-12 font-bold">Things I have built that prove my skills and capacity regarding the technologies I mentioned.</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 my-5 p-5 mx-auto">
                {
                    projects.map(project => <ProjectCard key={project.project_id} project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default AllProjects;