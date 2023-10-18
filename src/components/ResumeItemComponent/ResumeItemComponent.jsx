import React from 'react';

import './ResumeItemComponent.scss';

const ResumeItemComponent = ({ resumeItemComponent }) => {
    return (
        <div className='resume-item-description'>
            <h4>{resumeItemComponent.itemName}</h4>
            {resumeItemComponent.itemDate && (
                <p className='resume-item-p resume-item-date'>
                    {resumeItemComponent.itemDate}
                </p>
            )}
            <p className='resume-item-p'>
                {resumeItemComponent.itemDescription}
            </p>
            {resumeItemComponent.itemLink && (
                <p className='resume-item-link'>
                    Link:
                    <a
                        href={resumeItemComponent.itemLink}
                        target='_blank'
                        rel='noreferrer'
                    >
                        Click here
                    </a>
                </p>
            )}
            {resumeItemComponent.itemLists && (
                <ul id='address-contacts'>
                    {resumeItemComponent.itemLists.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            )}
        </div>
    );
};

export default ResumeItemComponent;
