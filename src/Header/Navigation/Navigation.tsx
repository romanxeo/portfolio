import React from 'react';
import s from './Navigation.module.scss';
import {Link, animateScroll as scroll} from 'react-scroll'

function Navigation() {
    return (
        <div className={s.navigation}>
            <Link to='main' spy={true} smooth={true} duration={300}>Main</Link>
            <Link to='skills' spy={true} smooth={true} duration={300}>Skills</Link>
            <Link to='projects' spy={true} smooth={true} duration={300}>Projects</Link>
            <Link to='contacts' spy={true} smooth={true} duration={300}>Contacts</Link>
        </div>
    );
}

export default Navigation;
