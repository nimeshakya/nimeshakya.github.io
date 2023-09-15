import React from 'react';
import { RxTriangleRight } from 'react-icons/rx';

import UnderLine from '../UnderLine/UnderLine';

import './Skills.scss';

const Skills = () => {
    const skills = [
        'HTML5',
        'CSS3',
        'TailwindCSS',
        'SASS',
        'JavaScript (ES6+)',
        'ReactJS',
    ];

    return (
        <article id='skills'>
            <h1 className='article-heading'>Skills</h1>
            <UnderLine />
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                recusandae animi tempora eaque totam autem, dolores repellendus
                architecto minus perferendis quae atque iure dolore molestiae?
            </p>
            <ul>
                {skills.map((skill, index) => {
                    return (
                        <li>
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
