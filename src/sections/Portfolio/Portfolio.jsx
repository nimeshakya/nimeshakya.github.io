import React from 'react';

import { useIsVisible } from '../../utils/IsVisible/IsVisible';

import imgQuoteGen from '../../images/quotes.png';
import imgComingSoon from '../../images/comingsoon.png';
import imgPomodoro from '../../images/pomodoro.png';
import imgTodos from '../../images/todos.png';

import UnderLine from '../../components/UnderLine/UnderLine';
import Project from '../../components/Project/Project';

import './Portfolio.scss';

const Portfolio = ({ refPortfolio }) => {
    const projects = [
        {
            name: 'coming soon page',
            description:
                "This is a 'Coming Soon' page which you deploy before the actual landing page. I wanted to challenge myself to build it with just HTML, CSS and Javascript so that's what I did.",
            techUsed: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'VS Code'],
            image: imgComingSoon,
            link: 'https://beaches-landing.netlify.app/',
            github: 'https://github.com/nimeshakya/frontend-projects.git',
        },
        {
            name: 'todo app',
            description:
                'After building several ToDo Apps on the web, I created this one using ReactJS. This project is a demonstration of CRUD functionality and it is usable as well. It stores the data in localStorage of the web browser.',
            techUsed: ['ReactJS', 'VS Code', 'Netlify'],
            image: imgTodos,
            link: 'https://stuffies-todo.netlify.app/',
            github: 'https://github.com/nimeshakya/frontend-projects.git',
        },
        {
            name: 'random guote gen',
            description:
                "This project was done as a course's final project. The course provided an online JSON data with the quotes and we did the API call to get the quotes.",
            techUsed: ['ReactJS', 'VS Code', 'Netlify'],
            image: imgQuoteGen,
            link: 'https://quote-gen-saucymind.netlify.app/',
            github: 'https://github.com/nimeshakya/random-quote-generator.git',
        },
        {
            name: 'pomodoro timer',
            description:
                'Here I learnt how the time works in JavaScript. I used ReactJS to build this project. This is also one of the final project of the course by freeCodeCamp.',
            techUsed: ['ReactJS', 'VS Code', 'Netlify'],
            image: imgPomodoro,
            link: 'https://the-pomodoro-timer.netlify.app/',
            github: 'https://github.com/nimeshakya/pomodoro_timer.git',
        },
    ];

    const isPortfolioVisible = useIsVisible(refPortfolio);

    return (
        <section
            id='portfolio'
            className={`sections ${isPortfolioVisible && 'animated-sections'}`}
            ref={refPortfolio}
        >
            <h1 className='article-heading section-heading'>Portfolio</h1>
            <UnderLine />
            <p className='section-description'>
                Here are some of the projects that I've built using the
                technologies I've learnt over time.
            </p>
            <article>
                {projects.map((project, index) => {
                    return <Project key={index} project={project} />;
                })}
                <p className='section-description'>
                    For more projects, please visit{' '}
                    <a
                        href='https://github.com/nimeshakya'
                        target='_blank'
                        rel='noreferrer'
                    >
                        my github page
                    </a>{' '}
                    where you can find all the repositories.
                </p>
            </article>
        </section>
    );
};

export default Portfolio;
