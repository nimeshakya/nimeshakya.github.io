import React from 'react';

import { useIsVisible } from '../../utils/IsVisible/IsVisible';

import UnderLine from '../../components/UnderLine/UnderLine';
import DescriptionItem from '../../components/DescriptionItem/DescriptionItem';

import Facts from '../../components/Facts/Facts';
import Skills from '../../components/Skills/Skills';

import './About.scss';
import profilePlaceholder from '../../images/profile.jpg';

const About = ({ refAbout }) => {
    const descriptionList2 = [
        {
            name: 'degree',
            value: 'Bachelors in Computer Engineering',
        },
        {
            name: 'soft skills',
            value: 'Communication, Collaboration, Teamwork, Research',
        },
    ];

    const descriptionList1 = [
        {
            name: 'city',
            value: 'Bhaktapur, Nepal',
        },
        {
            name: 'phone',
            value: '+977 9869862900',
        },
        {
            name: 'email',
            value: 'nimeshakyabtw@gmail.com',
        },
    ];

    const isAboutVisible = useIsVisible(refAbout);
    console.log(isAboutVisible);

    return (
        <section
            id='about'
            className={`sections ${isAboutVisible && 'animated-sections'}`}
            ref={refAbout}
        >
            <article>
                <h1 className='article-heading'>About</h1>
                <UnderLine />
                <p>
                    Doodling around with HTML and CSS, it was just a way to pass
                    some time at the beginning. I was like playing a game.
                    Further interest in this field led me to this vast world of
                    web development. It liked how a web page can be so
                    interactive with small animated buttons, amazing scrolling
                    features and so on. I also realised how dark internet can be
                    and understood how important security can be. Just another
                    web developer in the block, <b>who am I?</b> Her's a little
                    bit of myself.
                </p>
                <div className='description-container'>
                    <img src={profilePlaceholder} alt='profile_placeholder' />
                    <div className='description-texts'>
                        <h2>Frontend Web Developer</h2>
                        <p>First, a litte detail about where I live and all.</p>
                        <div className='description-lists'>
                            <ul>
                                {descriptionList1.map((item, index) => {
                                    return (
                                        <DescriptionItem
                                            key={index}
                                            name={item.name}
                                            value={item.value}
                                        />
                                    );
                                })}
                            </ul>
                            <ul>
                                {descriptionList2.map((item, index) => {
                                    return (
                                        <DescriptionItem
                                            key={index}
                                            name={item.name}
                                            value={item.value}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                        <p>
                            College is quite fun, and I'm learning about
                            computers in more depth than before and I'm always
                            amazed at how it evolved to be what it is and what
                            more it can be.
                        </p>
                    </div>
                </div>
            </article>
            <Facts />
            <Skills />
        </section>
    );
};

export default About;
