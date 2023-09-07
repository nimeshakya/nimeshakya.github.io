import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import Navigation from './components/Navigation/Navigation';

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
        </>
    );
};

export default App;
