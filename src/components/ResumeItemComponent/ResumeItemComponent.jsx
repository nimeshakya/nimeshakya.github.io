import React from 'react';

import './ResumeItemComponent.scss';

const ResumeItemComponent = ({ resumeItemComponent }) => {
    console.log(resumeItemComponent.itemLists);
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
            {resumeItemComponent.itemLists && (
                <ul id='address-contacts'>
                    {resumeItemComponent.itemLists.map((item, index) => {
                        console.log(item);
                        return <li key={index}>{item}</li>;
                    })}
                </ul>
            )}
        </div>
    );
};

export default ResumeItemComponent;
