import React from 'react';
import { BiHome, BiUser, BiBookContent, BiServer } from 'react-icons/bi';
import { MdOutlineEmail, MdOutlineInsertDriveFile } from 'react-icons/md';

import NavButton from './NavButton';

import './Navigation.scss';

const Navigation = ({ toggleNav }) => {
    const navButtons = [
        {
            name: 'home',
            icon: <BiHome />,
        },
        {
            name: 'about',
            icon: <BiUser />,
        },
        {
            name: 'resume',
            icon: <MdOutlineInsertDriveFile />,
        },
        {
            name: 'portfolio',
            icon: <BiBookContent />,
        },
        {
            name: 'contact',
            icon: <MdOutlineEmail />,
        },
    ];

    return (
        <nav className={toggleNav ? 'visible' : 'hidden'}>
            <ul>
                {navButtons.map((button, index) => {
                    return (
                        <NavButton
                            key={index}
                            name={button.name}
                            icon={button.icon}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
