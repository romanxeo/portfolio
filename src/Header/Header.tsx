import React from 'react';
import s from './Header.module.css';
import Navigation from "./Navigation/Navigation";

function Header() {
    return (
        <div className = {s.header}>
            HEADER
            <Navigation />
        </div>
    );
}

export default Header;
