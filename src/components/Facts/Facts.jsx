import React, { useRef } from 'react';

import { useIsVisible } from '../../utils/IsVisible/IsVisible';

import { IoGameControllerOutline } from 'react-icons/io5';
import { BsBrush } from 'react-icons/bs';
import { BiMusic } from 'react-icons/bi';
import { MdOutlineFastfood } from 'react-icons/md';

import UnderLine from '../UnderLine/UnderLine';
import Interest from '../Interest/Interest';

import './Facts.scss';

const Facts = () => {
    const facts = [
        {
            name: 'game dev',
            icon: <IoGameControllerOutline />,
        },
        {
            name: 'art',
            icon: <BsBrush />,
        },
        {
            name: 'music',
            icon: <BiMusic />,
        },
        {
            name: 'food',
            icon: <MdOutlineFastfood />,
        },
    ];
    const factsRef = useRef();
    const isFactsVisible = useIsVisible(factsRef);

    return (
        <article
            id='facts'
            ref={factsRef}
            className={isFactsVisible ? 'animated-projects' : ''}
        >
            <h1 className='article-heading'>Facts</h1>
            <UnderLine />
            <p>
                When I'm not doing web development, I do several other things.
                I'm interested in game development too and constantly learning
                it making small games like pong and what not. I like making art
                and listening to music. And then there is food.
            </p>
            <ul>
                {facts.map((fact, index) => {
                    return (
                        <Interest
                            key={index}
                            name={fact.name}
                            icon={fact.icon}
                        />
                    );
                })}
            </ul>
        </article>
    );
};

export default Facts;
