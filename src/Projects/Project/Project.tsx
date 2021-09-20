import React from 'react';
import s from './Project.module.css';

type PropsType = {
  title: string
  description: string
  icon: string
}

function Project(props: PropsType) {
  return (
    <div className={s.project}>
      <div className={s.dws}>
        <div className={s.blocImg}>
          <img
            src={props.icon}
            alt="" />
          <div className={s.blocText}>
              <div className={s.text}>
                <h3>{props.title}</h3>
                <span>{props.description}</span>
              </div>
          </div>
        </div>
        <div>
          <button className={s.btn}>Link..</button>
        </div>
      </div>
    </div>
  )
}

export default Project;
