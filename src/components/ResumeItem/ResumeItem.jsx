import React from 'react';

import ResumeItemComponent from '../ResumeItemComponent/ResumeItemComponent';

import './ResumeItem.scss';

const ResumeItem = ({ resumeItem }) => {
    return (
        <div className='resume-item'>
            <h2>{resumeItem.title}</h2>
            {resumeItem.items.map((resumeItemComponent, index) => {
                return (
                    <ResumeItemComponent
                        key={index}
                        resumeItemComponent={resumeItemComponent}
                    />
                );
            })}
        </div>
    );
};

export default ResumeItem;
