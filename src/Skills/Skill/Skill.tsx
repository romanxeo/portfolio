import React from 'react';
import s from './Skill.module.scss';

type PropsType = {
  title: string
  icon: string
}

function Skill(props: PropsType) {
  return (
    <div className={s.skill}>
      <img className={s.icon} src={props.icon}/>
      <div className={s.title}>{props.title}</div>
    </div>
  );
}

export default Skill;
