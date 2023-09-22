import React from 'react';
import {
    BiEnvelope,
    BiLogoLinkedin,
    BiLogoMessenger,
    BiLogoInstagram,
} from 'react-icons/bi';

import UnderLine from '../../components/UnderLine/UnderLine';

import './Contact.scss';

const Contact = () => {
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
        <section id='contact'>
            <h1 className='section-heading'>Contact</h1>
            <UnderLine />

            <div className='contact-info-container'>
                <p>
                    Looking for a good frontend developer to build your website?
                </p>
                <p>
                    Send me an{' '}
                    <a
                        href='mailto: nimeshakyabtw@gmail.com'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Email
                    </a>{' '}
                    or reach out on{' '}
                    <a
                        href='https://www.linkedin.com/in/nimeshakya/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        LinkedIn
                    </a>
                    ,{' '}
                    <a
                        href='https://m.me/nimeshakya/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Messenger
                    </a>{' '}
                    or{' '}
                    <a
                        href='https://www.instagram.com/nimeshakya/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Instagram
                    </a>
                    .
                </p>
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
