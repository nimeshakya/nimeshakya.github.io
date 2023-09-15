import React from 'react';

import './Interest.scss';

const Interest = ({ name, icon }) => {
    return (
        <li className='interest'>
            <span>{icon}</span>
            <span>{name}</span>
        </li>
    );
};

export default Interest;
