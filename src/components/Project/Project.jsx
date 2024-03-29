import React, { useRef } from 'react';
import { BiLogoGithub, BiLinkExternal } from 'react-icons/bi';

import { useIsVisible } from '../../utils/IsVisible/IsVisible';

import projectImg from '../../images/quotes.png';

import './Project.scss';

const Project = ({ project, index }) => {
    const projectRef = useRef();
    const isProjectVisible = useIsVisible(projectRef);

    return (
        <div
            className={`project-container ${
                isProjectVisible
                    ? index % 2 === 0
                        ? 'animated-projects-even'
                        : 'animated-projects-odd'
                    : ''
            }`}
            ref={projectRef}
        >
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
                    <a href={project.github} target='_blank' rel='noreferrer'>
                        <BiLogoGithub />
                    </a>
                    <a href={project.link} target='_blank' rel='noreferrer'>
                        <BiLinkExternal />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Project;
