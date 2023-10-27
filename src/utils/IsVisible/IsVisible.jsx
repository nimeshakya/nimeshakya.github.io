import React, { useState, useEffect } from 'react';

export const useIsVisible = (ref) => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry], obs) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.disconnect();
                }
            },
            { rootMargin: '0px 0px 150px 0px' }
        );
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return inView;
};
