import React from 'react';
import s from './Header.module.scss';
import Navigation from "./Navigation/Navigation";
import sContainer from "../common/styles/Container.module.css";

function Header() {
  return (
    <div className={s.header}>
      <div className={`${sContainer.container} ${s.headerContainer}`}>
        <Navigation/>
      </div>
    </div>
  )
}

export default Header;
