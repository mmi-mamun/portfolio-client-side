import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data.slice(0, 3)))
    }, [projects])
    return (
        <div className='px-10 md:px-12 lg:px-20 xl:px-32 2xl:px-40 my-12'>
            <div className="divider"></div>
            {/* <p>{projects.length}</p> */}
            <div className="mb-5">
                <h1 className="text-5xl text-center text-orange-600 font-bold my-3">Feature Projects</h1>
                <h5 className="text-xl text-center mt-2 mb-12 font-bold">Things I have built that prove my skills and capacity regarding the technologies I mentioned.</h5>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mx-auto">
                {
                    projects.map(project => <ProjectCard key={project.project_id} project={project}></ProjectCard>)
                }
            </div>

            <div className="text-center pt-12">
                <Link to="/projects">
                    <button className="btn gap-2">
                        See more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                </Link>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Projects;