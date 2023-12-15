import React, { useRef } from 'react';
import {
    BiEnvelope,
    BiLogoLinkedin,
    BiLogoMessenger,
    BiLogoInstagram,
} from 'react-icons/bi';

import { useIsVisible } from '../../utils/IsVisible/IsVisible';
import UnderLine from '../../components/UnderLine/UnderLine';

import './Contact.scss';

const Contact = ({ refContact }) => {
    const isContactVisible = useIsVisible(refContact);

    const contactLinks = [
        {
            name: 'email',
            link: 'mailto: nimeshakyabtw@gmail.com',
            icon: <BiEnvelope />,
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/nimeshakya/',
            icon: <BiLogoLinkedin />,
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/nimeshakya/',
            icon: <BiLogoInstagram />,
        },
        {
            name: 'messenger',
            link: 'https://m.me/nimeshakya/',
            icon: <BiLogoMessenger />,
        },
    ];
    return (
        <section
            id='contact'
            className={isContactVisible ? 'animated-projects' : ''}
            ref={refContact}
        >
            <h1 className='section-heading'>Contact</h1>
            <UnderLine />

            <div className='contact-info-container'>
                <p>For any futher queries and collaboration offers:</p>
                <a
                    href='mailto: nimeshakyabtw@gmail.com'
                    target='_blank'
                    rel='noreferrer'
                    className='contact-hello-btn'
                >
                    Say Hello!
                </a>
                <p>Or contact me via:</p>
                <ul className='contact-links'>
                    {contactLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <a
                                    href={link.link}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <span>{link.icon}</span>
                                    <span>{link.name}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Contact;
