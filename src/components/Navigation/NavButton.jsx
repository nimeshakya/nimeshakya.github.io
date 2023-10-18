import React from 'react';

import './NavButton.scss';

const NavButton = ({ name, icon, isActive }) => {
    return (
        <li className='navBtns'>
            <a href={`#${name}`} className={`${isActive && 'isActive'}`}>
                {icon}
                <span>{name}</span>
            </a>
        </li>
    );
};

export default NavButton;
