import React from 'react';
import UnderLine from '../../components/UnderLine/UnderLine';
import ResumeItem from '../../components/ResumeItem/ResumeItem';

import ResumePDF from '../../download-files/resume.pdf';

import './Resume.scss';

const Resume = ({ refResume }) => {
    const resumeItems1 = [
        {
            title: 'Summary',
            items: [
                {
                    itemName: 'Nimesh Shakya',
                    itemDate: '',
                    itemDescription:
                        'Dedicated and motivated Frontend Developer with a strong foundation in web development and tools such as ReactJS, TailwindCSS, JavaScript, HTML, and CSS. Equipped with a solid understanding of frontend principles and a passion for creating dynamic and user-friendly web interfaces. Eager to contribute to collaborative projects and apply my skills in a professional environment while continuously expanding my knowledge in the ever-evolving field of frontend development.',
                    itemLists: [
                        'Bhaktapur, Nepal',
                        '(+977) 9869862900',
                        'nimeshakyabtw@gmail.com',
                    ],
                },
            ],
        },
        {
            title: 'Education',
            items: [
                {
                    itemName: 'Bachelors in Computer Engineering',
                    itemDate: '2022 - Present',
                    itemDescription:
                        'Khwopa Engineering College, Bhaktapur, Nepal',
                    itemLink: 'https://khec.edu.np/',
                },
            ],
        },
    ];
    const resumeItems2 = [
        {
            title: 'Courses & Certifications',
            items: [
                {
                    itemName: 'Responsive Web Design',
                    itemDate: '2020',
                    itemDescription:
                        'This certificate was provided by FreeCodeCamp. The site freeCodeCamp.org provided an online curriculum and tutorial to follow to learn web development.',
                    itemLink:
                        'https://www.freecodecamp.org/certification/nimeshakya/responsive-web-design',
                    itemLists: [
                        'Cascading Style Sheets(CSS)',
                        'Responsive Web Design',
                        'Front-End Development',
                    ],
                },
                {
                    itemName: 'JavaScript Algorithms and Data Structures',
                    itemDate: '2020',
                    itemDescription:
                        'Also a course by freeCodeCamp.org. It this course, I learnt basics of data structures used in JavaScript and the algorithms to solve various programming problems.',
                    itemLink:
                        'https://www.freecodecamp.org/certification/nimeshakya/javascript-algorithms-and-data-structures',
                    itemLists: ['JavaScript', 'Data Structures', 'Algorithms'],
                },
            ],
        },
    ];

    return (
        <section id='resume' ref={refResume}>
            <h1 className='section-heading'>Resume</h1>
            <UnderLine />
            <p className='resume-description'>
                Now, if you are in need of a web developer to work together on
                your team, you're in the right place! Take a look at my resume
                here.
            </p>
            <p className='resume-description'>
                You can find a pdf copy of this resume here:{' '}
                <a href={ResumePDF} target='_blank' rel='noreferrer'>
                    resume.pdf
                </a>
            </p>

            <article>
                <div id='col1' className='resume-cols'>
                    {resumeItems1.map((resumeItem, index) => {
                        return (
                            <ResumeItem key={index} resumeItem={resumeItem} />
                        );
                    })}
                </div>
                <div id='col2' className='resume-cols'>
                    {resumeItems2.map((resumeItem, index) => {
                        return (
                            <ResumeItem key={index} resumeItem={resumeItem} />
                        );
                    })}
                </div>
            </article>
        </section>
    );
};

export default Resume;
