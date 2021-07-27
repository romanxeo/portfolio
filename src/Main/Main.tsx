import React from 'react';
import s from './Main.module.css';
import sContainer from '../../src/common/styles/Container.module.css'

function Main() {
    return (
        <div className = {s.main}>
            <div className = {sContainer.container}>
                <div className={s.text}>
                    <span>Hi all</span>
                    <h1>I am Roman XEO</h1>
                    <p>A front-developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
}

export default Main;
