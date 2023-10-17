import React from 'react';
import { NavLink } from 'react-router-dom';

import {
    BiLogoLinkedin,
    BiLogoInstagram,
    BiLogoFacebook,
} from 'react-icons/bi';

import './Home.scss';

const Home = ({ addMultiRef }) => {
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
        <section id='home'>
            <article>
                <h1>Nimesh Bahadur</h1>
                <p>
                    I'm <span>Frontend Developer</span>
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
