import React from 'react';

const SkillCard = ({ skill }) => {
    const { name, icon } = skill;
    return (
        <div className="card card-side bg-base-100 shadow-xl px-5">
            <figure><img className='w-16' src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default SkillCard;