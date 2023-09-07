import React from 'react';

import './NavButton.scss';

const NavButton = ({ name, icon }) => {
    return (
        <li>
            <a href={`#${name}`}>
                {icon}
                <span>{name}</span>
            </a>
        </li>
    );
};

export default NavButton;
