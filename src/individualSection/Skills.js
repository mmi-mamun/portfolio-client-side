import React from 'react';
import reactIcon from '../../src/assets/icons/icon-react.png'
import htmlIcon from '../../src/assets/icons/icon-html5.png'
import iconCSS3 from '../../src/assets/icons/icon-css3.png'
import iconBootstrap from '../../src/assets/icons/icon-bootstrap.png'
import iconTailwind from '../../src/assets/icons/icon-tailwindCSS.png'
import iconJavaScript from '../../src/assets/icons/icon-javaScript.png'
import iconReactJs from '../../src/assets/icons/icon-react.png'
import iconNodeJs from '../../src/assets/icons/icon-nodeJs.png'
import iconExpressJs from '../../src/assets/icons/icon-expressJS.png'
import iconMongoDB from '../../src/assets/icons/icon-mongoDB.png'
import iconReactRouter from '../../src/assets/icons/icon-reactRouter.png'
import iconFirebase from '../../src/assets/icons/icon-firebase.png'
import iconJWT from '../../src/assets/icons/icon-jwt.png'
import iconVScode from '../../src/assets/icons/icon-vscode.png'
import iconGit from '../../src/assets/icons/icon-git.png'
import iconNetlify from '../../src/assets/icons/icon-netlify.png'
import SkillCard from '../components/SkillCard';

const Skills = () => {
    const skills = [
        {
            customId: 1,
            name: 'HTML5',
            icon: htmlIcon
        },

        {
            customId: 2,
            name: 'CSS3',
            icon: iconCSS3
        },
        {
            customId: 3,
            name: 'Bootstrap',
            icon: iconBootstrap
        },
        {
            customId: 4,
            name: 'Tailwind CSS',
            icon: iconTailwind
        },
        {
            customId: 5,
            name: 'JavaScript',
            icon: iconJavaScript
        },
        {
            customId: 6,
            name: 'React JS',
            icon: iconReactJs
        },
        {
            customId: 7,
            name: 'HTML5',
            icon: htmlIcon
        },
        {
            customId: 8,
            name: 'Node JS',
            icon: iconNodeJs
        },
        {
            customId: 9,
            name: 'Express JS',
            icon: iconExpressJs
        },
        {
            customId: 10,
            name: 'MongoDB',
            icon: iconMongoDB
        },
        {
            customId: 11,
            name: 'React Router',
            icon: iconReactRouter
        },
        {
            customId: 12,
            name: 'Firebase Auth',
            icon: iconFirebase
        },
        {
            customId: 13,
            name: 'JWT',
            icon: iconJWT
        },
        {
            customId: 14,
            name: 'VS Code',
            icon: iconVScode
        },
        {
            customId: 15,
            name: 'Git',
            icon: iconGit
        },
        {
            customId: 16,
            name: 'Netlify',
            icon: iconNetlify
        }

    ]
    return (
        <div className='mx-auto p-12'>
            <h1 className="text-5xl text-center text-orange-600 font-bold">Skills</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                {
                    skills.map(skill => <SkillCard key={skill.customId} skill={skill}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default Skills;