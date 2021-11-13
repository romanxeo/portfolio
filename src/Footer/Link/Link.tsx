import React from 'react';
import s from './Link.module.scss';

type PropsType = {
  title: string
  icon: string
}

function Link(props: PropsType) {
  return (
    <div className={s.link}>
      <img className={s.icon} src={props.icon}/>
      <div className={s.title}>{props.title}</div>
    </div>
  );
}

export default Link;
