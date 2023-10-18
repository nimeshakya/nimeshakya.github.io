import React from 'react';
import UnderLine from '../../components/UnderLine/UnderLine';
import ResumeItem from '../../components/ResumeItem/ResumeItem';

import ResumePDF from '../../download-files/resume.pdf';

import './Resume.scss';

const Resume = ({ refResume }) => {
    const resumeItems1 = [
        {
            title: 'summary',
            items: [
                {
                    itemName: 'Nimesh Shakya',
                    itemDate: '',
                    itemDescription:
                        'Dedicated and motivated entry-level Frontend Developer with a strong foundation in web development and expertise in ReactJS, TailwindCSS, JavaScript, HTML, and CSS. Equipped with a solid understanding of frontend principles and a passion for creating dynamic and user-friendly web interfaces. Eager to contribute to collaborative projects and apply my skills in a professional environment while continuously expanding my knowledge in the ever-evolving field of frontend development.',
                    itemLists: [
                        'Bhaktapur, Nepal',
                        '(+977) 9869862900',
                        'nimeshakyabtw@gmail.com',
                    ],
                },
            ],
        },
        {
            title: 'summary',
            items: [
                {
                    itemName: 'Nimesh Shakya',
                    itemDate: '',
                    itemDescription:
                        'Dedicated and motivated entry-level Frontend Developer with a strong foundation in web development and expertise in ReactJS, TailwindCSS, JavaScript, HTML, and CSS. Equipped with a solid understanding of frontend principles and a passion for creating dynamic and user-friendly web interfaces. Eager to contribute to collaborative projects and apply my skills in a professional environment while continuously expanding my knowledge in the ever-evolving field of frontend development.',
                    itemLists: [
                        'Bhaktapur, Nepal',
                        '(+977) 9869862900',
                        'nimeshakyabtw@gmail.com',
                    ],
                },
            ],
        },
    ];
    const resumeItems2 = [
        {
            title: 'summary',
            items: [
                {
                    itemName: 'Nimesh Shakya',
                    itemDate: '',
                    itemDescription:
                        'Dedicated and motivated entry-level Frontend Developer with a strong foundation in web development and expertise in ReactJS, TailwindCSS, JavaScript, HTML, and CSS. Equipped with a solid understanding of frontend principles and a passion for creating dynamic and user-friendly web interfaces. Eager to contribute to collaborative projects and apply my skills in a professional environment while continuously expanding my knowledge in the ever-evolving field of frontend development.',
                    itemLists: [
                        'Bhaktapur, Nepal',
                        '(+977) 9869862900',
                        'nimeshakyabtw@gmail.com',
                    ],
                },
                {
                    itemName: 'Nimesh Shakya',
                    itemDate: '2003 - Present',
                    itemDescription:
                        'Dedicated and motivated entry-level Frontend Developer with a strong foundation in web development and expertise in ReactJS, TailwindCSS, JavaScript, HTML, and CSS. Equipped with a solid understanding of frontend principles and a passion for creating dynamic and user-friendly web interfaces. Eager to contribute to collaborative projects and apply my skills in a professional environment while continuously expanding my knowledge in the ever-evolving field of frontend development.',
                    itemLists: [
                        'Bhaktapur, Nepal',
                        '(+977) 9869862900',
                        'nimeshakyabtw@gmail.com',
                    ],
                },
                {
                    itemName: 'Nimesh Shakya',
                    itemDate: '',
                    itemDescription:
                        'Dedicated and motivated entry-level Frontend Developer with a strong foundation in web development and expertise in ReactJS, TailwindCSS, JavaScript, HTML, and CSS. Equipped with a solid understanding of frontend principles and a passion for creating dynamic and user-friendly web interfaces. Eager to contribute to collaborative projects and apply my skills in a professional environment while continuously expanding my knowledge in the ever-evolving field of frontend development.',
                    itemLists: [],
                },
            ],
        },
    ];

    return (
        <section id='resume' ref={refResume}>
            <h1 className='section-heading'>Resume</h1>
            <UnderLine />
            <p className='resume-description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                at dolore, mollitia, iure beatae vero nostrum quas vel tenetur
                esse eum laboriosam cum. Non, dolorem?
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
