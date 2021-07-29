import React from 'react';
import s from './Link.module.css';

type PropsType = {
    title: string
}

function Link(props: PropsType) {
    return (
        <div className = {s.link}>
            <div className={s.icon}>ICO</div>
            <div className={s.title}>{props.title}</div>
        </div>
    );
}

export default Link;
