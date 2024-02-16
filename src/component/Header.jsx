import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/tmovie.png';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

const Header = () => {
    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        };
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header bg-gray-800 py-4">
            <div className="header__wrap container mx-auto flex items-center justify-between">
                <div className="logo flex items-center">
                    <img src={logo} alt="tMovies" className="h-8" />
                    <Link to="/" className="text-white font-semibold ml-2 text-lg">tMovies</Link>
                </div>
                <ul className="header__nav flex items-center">
                    {headerNav.map((e, i) => (
                        <li key={i} className={`${i === active ? 'active' : ''} ml-4`}>
                            <Link to={e.path} className="text-white hover:text-gray-300">{e.display}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;
