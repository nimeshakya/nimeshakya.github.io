import React, { useState, useRef, createRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';

import { useIsVisible } from './utils/IsVisible/IsVisible';

import Navigation from './components/Navigation/Navigation';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Resume from './sections/Resume/Resume';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

const App = () => {
    const [toggleNav, setToggleNav] = useState(false);

    const refHome = useRef();
    const refAbout = useRef();
    const refResume = useRef();
    const refPortfolio = useRef();
    const refContact = useRef();

    // const inView = useInViewport(refAbout);
    // console.log(inView);

    return (
        <>
            <div
                id='navToggleBtn'
                className={toggleNav ? 'toggled' : ''}
                onClick={() => setToggleNav(!toggleNav)}
            >
                {toggleNav ? <MdClose /> : <HiOutlineMenu />}
            </div>
            <Navigation
                toggleNav={toggleNav}
                refs={[refHome, refAbout, refResume, refPortfolio, refContact]}
            />
            <Home refHome={refHome} />
            <About refAbout={refAbout} />
            <Resume refResume={refResume} />
            <Portfolio refPortfolio={refPortfolio} />
            <Contact refContact={refContact} />
            <Footer />
        </>
    );
};

export default App;
