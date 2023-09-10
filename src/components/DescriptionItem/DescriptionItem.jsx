import React from 'react';

import { BsChevronRight } from 'react-icons/bs';

import './DescriptionItem.scss';

const DescriptionItem = ({ name, value }) => {
    return (
        <li id='descriptionItem'>
            <span>
                <BsChevronRight />
            </span>
            <span>{name}:</span>
            <span>{value}</span>
        </li>
    );
};

export default DescriptionItem;
