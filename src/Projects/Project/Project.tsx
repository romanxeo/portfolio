import React from 'react';
import s from './Project.module.scss';
import {Fade} from 'react-awesome-reveal';

type PropsType = {
    title: string
    description: string
    icon: string
    link: string
}

function Project(props: PropsType) {


    return (

        <div className={s.project}>

            <div className={s.dws}>
                <Fade>
                    <>
                        <div className={s.blocImg}>
                            <img
                                src={props.icon}
                                alt=""/>
                            <div className={s.blocText}>
                                <div className={s.text}>
                                    <h3>{props.title}</h3>
                                    <span>{props.description}</span>
                                </div>
                            </div>
                        </div>
                        <a className={s.div} href={props.link}>
                            Link..
                        </a>
                    </>
                </Fade>
            </div>

        </div>

    /**/
    )
}

export default Project;
