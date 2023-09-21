import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';

import Navigation from './components/Navigation/Navigation';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Resume from './sections/Resume/Resume';
import Portfolio from './sections/Portfolio/Portfolio';

const App = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <>
            <div
                id='navToggleBtn'
                className={toggleNav ? 'toggled' : ''}
                onClick={() => setToggleNav(!toggleNav)}
            >
                {toggleNav ? <MdClose /> : <HiOutlineMenu />}
            </div>
            <Navigation toggleNav={toggleNav} />
            <Home />
            <About />
            <Resume />
            <Portfolio />
        </>
    );
};

export default App;
