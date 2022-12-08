import React from 'react';

const ProjectCard = ({ project }) => {
    const { projectName, img, technologies, bulletPoint1, bulletPoint2, bulletPoint3, description, gitHubClient, liveLink } = project;
    return (
        <div className="card card-compact max-w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img className='h-50 w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-purple-600">
                    {projectName}
                    {
                        project.project_id === 1 && <div className="badge badge-secondary">NEW</div>
                    }
                </h2>
                <p>{description}</p>
                {/* <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div> */}

                <div className='flex justify-between items-center'>
                    <a href={gitHubClient} target="_blank" rel="noreferrer">GitHub</a>
                    <a href={liveLink} target="_blank" rel="noreferrer">Live website</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;