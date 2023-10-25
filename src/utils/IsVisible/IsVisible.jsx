import React, { useState, useEffect } from 'react';

export const useIsVisible = (ref) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            },
            { rootMargin: '0px 0px 150px 0px' }
        );
        observer.observe(ref.current);

        return () => {
            observer.unobserve(ref.current);
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
};
