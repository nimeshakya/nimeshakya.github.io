import React from 'react';
import { BiLogoGithub, BiLinkExternal } from 'react-icons/bi';

import projectImg from '../../images/quotes.png';

import './Project.scss';

const Project = ({ project }) => {
    console.log(project);
    return (
        <div className='project-container'>
            <a href={project.link} target='_blank' className='image-link'>
                <img src={project.image} alt='project img' />
            </a>
            <div className='project-description-container'>
                <p className='project-text'>Featured Project</p>
                <h4>{project.name}</h4>
                <div className='project-description'>
                    <p>{project.description}</p>
                </div>
                <p className='project-text'>
                    {project.techUsed.map((tech, index) => {
                        return <span key={index}>{tech}</span>;
                    })}
                </p>
                <p className='project-links'>
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
