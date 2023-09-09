import React from 'react';

import './NavButton.scss';

const NavButton = ({ name, icon }) => {
    return (
        <li className='navBtns'>
            <a href={`#${name}`}>
                {icon}
                <span>{name}</span>
            </a>
        </li>
    );
};

export default NavButton;
