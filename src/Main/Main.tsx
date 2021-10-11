import React from 'react';
import s from './Main.module.scss';
import sContainer from '../../src/common/styles/Container.module.css'
import photo from './../assets/my.png'
//test

function Main() {
  return (
    <div className={s.main}>
      <div className={`${sContainer.container} ${s.mainContainer}`}>
        <div className={s.text}>
          <span>Hi all</span>
          <h1>I'm <b>Roman GREBINCHAK</b></h1>
          <p>A frontend-developer PLEEESE DEPLOY</p>
        </div>
        <div className={s.photoBlock}>
          <img className={s.photo} src={photo}/>
        </div>
      </div>
    </div>
  );
}

export default Main;
