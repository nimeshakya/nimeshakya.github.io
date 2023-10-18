import React, { useState, useRef, createRef } from 'react';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';

import Navigation from './components/Navigation/Navigation';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Resume from './sections/Resume/Resume';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

const App = () => {
    const [toggleNav, setToggleNav] = useState(false);

    const sections = [
        'sectionHome',
        'sectionAbout',
        'sectionResume',
        'sectionPortfolio',
        'sectionContact',
    ];
    const refs = useRef(sections.map(() => React.createRef()));

    return (
        <>
            <div
                id='navToggleBtn'
                className={toggleNav ? 'toggled' : ''}
                onClick={() => setToggleNav(!toggleNav)}
            >
                {toggleNav ? <MdClose /> : <HiOutlineMenu />}
            </div>
            <Navigation toggleNav={toggleNav} refs={refs} />
            <Home refHome={refs.current[0]} />
            <About refAbout={refs.current[1]} />
            <Resume refResume={refs.current[2]} />
            <Portfolio refPortfolio={refs.current[3]} />
            <Contact refContact={refs.current[4]} />
            <Footer />
        </>
    );
};

export default App;
