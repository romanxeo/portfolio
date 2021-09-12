import React from 'react';
import s from "./title.module.css";

type PropsType = {
  title: string
}

const Title = (props: PropsType) => {
  return (
    <h2 className={s.title}>{props.title}</h2>
  )
}

export default Title