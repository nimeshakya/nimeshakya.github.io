import React, { useEffect, useState } from 'react';
import { BiHome, BiUser, BiBookContent, BiServer } from 'react-icons/bi';
import { MdOutlineEmail, MdOutlineInsertDriveFile } from 'react-icons/md';

import NavButton from './NavButton';

import './Navigation.scss';

const Navigation = ({ toggleNav, refs }) => {
    const [activeNavIndex, setActiveNavIndex] = useState(0);

    const navButtons = [
        {
            name: 'home',
            icon: <BiHome />,
            ref: refs[0],
        },
        {
            name: 'about',
            icon: <BiUser />,
            ref: refs[1],
        },
        {
            name: 'resume',
            icon: <MdOutlineInsertDriveFile />,
            ref: refs[2],
        },
        {
            name: 'portfolio',
            icon: <BiBookContent />,
            ref: refs[3],
        },
        {
            name: 'contact',
            icon: <MdOutlineEmail />,
            ref: refs[4],
        },
    ];

    const nearestSectionIndex = (currentPosition, startIndex, endIndex) => {
        if (startIndex === endIndex) {
            return startIndex;
        } else if (startIndex === endIndex - 1) {
            if (
                Math.abs(
                    navButtons[startIndex].ref.current.offsetTop -
                        currentPosition
                ) <
                Math.abs(
                    navButtons[endIndex].ref.current.offsetTop - currentPosition
                )
            ) {
                return startIndex;
            } else {
                return endIndex;
            }
        } else {
            let nextNearest = ~~((startIndex + endIndex) / 2); // ~~ means double NOT bitwise operator used instead of Math.floor() since faster
            let a = Math.abs(
                navButtons[nextNearest].ref.current.offsetTop - currentPosition
            );
            let b = Math.abs(
                navButtons[nextNearest + 1].ref.current.offsetTop -
                    currentPosition
            );
            if (a < b) {
                return nearestSectionIndex(
                    currentPosition,
                    startIndex,
                    nextNearest
                );
            } else {
                return nearestSectionIndex(
                    currentPosition,
                    nextNearest,
                    endIndex
                );
            }
        }
    };

    useEffect(() => {
        const handleScroll = (e) => {
            let index = nearestSectionIndex(
                window.scrollY,
                0,
                navButtons.length - 1
            );
            setActiveNavIndex(index);
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <nav className={toggleNav ? 'visible' : 'hidden'}>
            <ul>
                {navButtons.map((button, index) => {
                    return (
                        <NavButton
                            key={index}
                            name={button.name}
                            icon={button.icon}
                            isActive={activeNavIndex === index}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
