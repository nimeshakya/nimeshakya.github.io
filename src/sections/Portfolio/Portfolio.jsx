import React from 'react';

import imgQuoteGen from '../../images/quotes.png';
import imgComingSoon from '../../images/comingsoon.png';
import imgPomodoro from '../../images/pomodoro.png';
import imgTodos from '../../images/todos.png';

import UnderLine from '../../components/UnderLine/UnderLine';
import Project from '../../components/Project/Project';

import './Portfolio.scss';

const Portfolio = () => {
    const projects = [
        {
            name: 'random guote gen',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae incidunt, sint atque eum minima est reprehenderit nobis assumenda ipsa suscipit.',
            techUsed: ['ReactJS', 'VS Code', 'Netlify'],
            image: imgQuoteGen,
            link: 'https://quote-gen-saucymind.netlify.app/',
            github: 'https://github.com/nimeshakya/random-quote-generator.git',
        },
        {
            name: 'landing / coming soon page',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae incidunt, sint atque eum minima est reprehenderit nobis assumenda ipsa suscipit.',
            techUsed: ['ReactJS', 'VS Code', 'Netlify'],
            image: imgComingSoon,
            link: 'https://beaches-landing.netlify.app/',
            github: 'https://github.com/nimeshakya/frontend-projects.git',
        },
        {
            name: 'pomodoro timer',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae incidunt, sint atque eum minima est reprehenderit nobis assumenda ipsa suscipit.',
            techUsed: ['ReactJS', 'VS Code', 'Netlify'],
            image: imgPomodoro,
            link: 'https://the-pomodoro-timer.netlify.app/',
            github: 'https://github.com/nimeshakya/pomodoro_timer.git',
        },
        {
            name: 'todo app',
            description:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae incidunt, sint atque eum minima est reprehenderit nobis assumenda ipsa suscipit.',
            techUsed: ['ReactJS', 'VS Code', 'Netlify'],
            image: imgTodos,
            link: 'https://stuffies-todo.netlify.app/',
            github: 'https://github.com/nimeshakya/frontend-projects.git',
        },
    ];

    return (
        <section id='portfolio' className='sections'>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero enim ullam, magnam quam exercitationem vitae suscipit
                    mollitia debitis culpa voluptatibus id odio ab aspernatur.
                </p>
            </article>
        </section>
    );
};

export default Portfolio;
