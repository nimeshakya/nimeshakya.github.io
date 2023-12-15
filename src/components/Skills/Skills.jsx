import React, { useRef } from 'react';
import { RxTriangleRight } from 'react-icons/rx';

import { useIsVisible } from '../../utils/IsVisible/IsVisible';

import UnderLine from '../UnderLine/UnderLine';

import './Skills.scss';

const Skills = () => {
    const skills = [
        'Communication',
        'HTML5',
        'Collaboration',
        'CSS3',
        'Teamwork',
        'TailwindCSS',
        'Research',
        'SASS',
        'JavaScript (ES6+)',
        'ReactJS',
    ];

    const skillsRef = useRef();
    const isSkillsVisible = useIsVisible(skillsRef);

    return (
        <article
            id='skills'
            className={isSkillsVisible ? 'animated-projects' : ''}
            ref={skillsRef}
        >
            <h1 className='article-heading'>Skills</h1>
            <UnderLine />
            <p>
                After learning that the web development field is so vast and we
                can go in so much depth, I realised I am much interested in the
                frontend side of things. So, over the years, I have gathered
                some experience in learning the skills needed to become a good
                frontend web developer. Still constantly learning and evolving
                my knowledge, here are some skills that I can work well with and
                can use.
            </p>
            <ul>
                {skills.map((skill, index) => {
                    return (
                        <li key={index}>
                            <span>
                                <RxTriangleRight />
                            </span>
                            <span>{skill}</span>
                        </li>
                    );
                })}
            </ul>
        </article>
    );
};

export default Skills;
