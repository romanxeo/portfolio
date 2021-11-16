import React from 'react';
import s from './Link.module.scss';

type PropsType = {
    title: string
    icon: string
    link: string
}

function Link(props: PropsType) {
    return (
        <a className={s.link} href={props.link}>
            <img className={s.icon} src={props.icon}/>
            <div className={s.title}>{props.title}</div>
        </a>
    );
}

export default Link;
