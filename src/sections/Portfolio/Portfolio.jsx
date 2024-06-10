import React from 'react';

import { useIsVisible } from '../../utils/IsVisible/IsVisible';

import imgWeather from '../../images/weather.png';
import imgComingSoon from '../../images/comingsoon.png';
import imgTodos from '../../images/todos.png';
import imgLetterboxd from '../../images/letterboxd.png';

import UnderLine from '../../components/UnderLine/UnderLine';
import Project from '../../components/Project/Project';

import './Portfolio.scss';

const Portfolio = ({ refPortfolio }) => {
    const projects = [
        {
            name: 'letterboxd site clone',
            description:
                'This is a frontend for a website called Letterboxd. Used ReactJS with SCSS and in this project I challenged myself to code all styling by myself without using external libraries.',
            techUsed: ['ReactJS', 'SCSS', 'Netlify'],
            image: imgLetterboxd,
            link: 'https://my-letterboxd.netlify.app/',
            github: 'https://github.com/nimeshakya/letterboxd-site-clone.git',
        },
        {
            name: 'weather app',
            description:
                'This project was a way for me to learn about fetching data from an online API. I used axios to do the fetching from an online api provider: www.weatherapi.com',
            techUsed: ['ReactJS', 'SCSS', 'Axios', 'VS Code', 'WeatherAPI'],
            image: imgWeather,
            link: 'https://my-weatherinfo.netlify.app/',
            github: 'https://github.com/nimeshakya/weather-app.git',
        },
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
                    return (
                        <Project key={index} project={project} index={index} />
                    );
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
