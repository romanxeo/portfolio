import React from 'react';
import s from './Skill.module.css';

type PropsType = {
    title: string
    description: string
}

function Skill(props: PropsType) {
    return (
        <div className = {s.skill}>
            <div className={s.icon}>ICO</div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
