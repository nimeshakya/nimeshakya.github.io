import React from 'react';

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

    return (
        <article id='facts'>
            <h1 className='article-heading'>Facts</h1>
            <UnderLine />
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                temporibus modi omnis totam tempore explicabo quas illum et
                incidunt quis. Nihil odio delectus voluptatibus molestias
                explicabo debitis aliquam placeat nam recusandae, rem hic earum
                eligendi voluptatum! Suscipit voluptatem harum quasi!
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
