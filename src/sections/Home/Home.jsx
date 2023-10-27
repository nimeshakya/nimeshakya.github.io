import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';

import {
    BiLogoLinkedin,
    BiLogoInstagram,
    BiLogoFacebook,
} from 'react-icons/bi';

import './Home.scss';

const Home = ({ refHome }) => {
    const socialLinks = [
        {
            name: 'instagram',
            icon: <BiLogoInstagram />,
            link: 'https://www.instagram.com/nimeshakya/',
        },
        {
            name: 'facebook',
            icon: <BiLogoFacebook />,
            link: 'https://www.facebook.com/nimeshakya',
        },
        {
            name: 'linkedin',
            icon: <BiLogoLinkedin />,
            link: 'https://www.linkedin.com/in/nimeshakya/',
        },
    ];

    return (
        <section id='home' ref={refHome}>
            <article>
                <h1>Nimesh Shakya</h1>
                <p>
                    I'm{' '}
                    <span>
                        <TypeAnimation
                            sequence={[
                                'Frontend Developer',
                                1000,
                                'Web Developer',
                                1000,
                            ]}
                            speed={200}
                            repeat={Infinity}
                        />
                    </span>
                </p>
                <ul>
                    {socialLinks.map((socialLink, index) => {
                        return (
                            <li key={index}>
                                <a href={socialLink.link}>{socialLink.icon}</a>
                            </li>
                        );
                    })}
                </ul>
            </article>
        </section>
    );
};

export default Home;
