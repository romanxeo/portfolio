import React from 'react';
import s from './Main.module.scss';
import sContainer from '../../src/common/styles/Container.module.css'
import photo from './../assets/my.png'


function Main() {
  return (
    <div className={s.main}>
      <div className={`${sContainer.container} ${s.mainContainer}`}>
        <div className={s.text}>
          <span>Hi all</span>
          <h1>I'm <b>Roman GREBINCHAK1</b></h1>
          <p>A Front-end developer1</p>
        </div>
        <div className={s.photoBlock}>
          <img className={s.photo} src={photo} alt={'her'}/>
        </div>
      </div>
    </div>
  );
}

export default Main;
