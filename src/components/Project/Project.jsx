import React from 'react';
import { BiLogoGithub, BiLinkExternal } from 'react-icons/bi';

import projectImg from '../../images/quotes.png';

import './Project.scss';

const Project = ({ project }) => {
    console.log(project);
    return (
        <div className='project-container'>
            <img src={project.image} alt='project img' />
            <div className='project-description-container'>
                <p>Featured Project</p>
                <h4>{project.name}</h4>
                <div className='project-description'>
                    <p>{project.description}</p>
                </div>
                <p>
                    {project.techUsed.map((tech, index) => {
                        return <span key={index}>{tech}</span>;
                    })}
                </p>
                <p>
                    <a href={project.github}>
                        <BiLogoGithub />
                    </a>
                    <a href={project.link}>
                        <BiLinkExternal />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Project;
