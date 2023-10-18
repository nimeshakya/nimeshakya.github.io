import React from 'react';

import UnderLine from '../../components/UnderLine/UnderLine';
import DescriptionItem from '../../components/DescriptionItem/DescriptionItem';

import Facts from '../../components/Facts/Facts';
import Skills from '../../components/Skills/Skills';

import './About.scss';
import profilePlaceholder from '../../images/profile.jpg';

const About = ({ refAbout }) => {
    const descriptionList2 = [
        {
            name: 'birthday',
            value: '27 July 2003',
        },
        {
            name: 'age',
            value: 20,
        },
        {
            name: 'degree',
            value: 'Bachelors in Computer Engineering',
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

    return (
        <section id='about' className='sections' ref={refAbout}>
            <article>
                <h1 className='article-heading'>About</h1>
                <UnderLine />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quae asperiores nemo enim, porro aperiam quibusdam adipisci
                    quaerat provident veritatis tenetur odio laudantium
                    voluptatum ea obcaecati.
                </p>
                <div className='description-container'>
                    <img src={profilePlaceholder} alt='profile_placeholder' />
                    <div className='description-texts'>
                        <h2>Frontend Web Developer</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium, vel!
                        </p>
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores, veritatis excepturi error harum optio
                            atque? Dolorem dignissimos provident ducimus
                            excepturi eos obcaecati asperiores maiores natus!
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
