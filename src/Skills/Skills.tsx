import React from 'react';
import s from './Skills.module.scss';
import sContainer from "../common/styles/Container.module.css";
import Skill from "./Skill/Skill";
import Title from '../common/components/Title';
import icoHtml from '../assets/icon/html.png'
import icoCss from '../assets/icon/css.png'
import icoJS from '../assets/icon/js.png'
import icoTS from '../assets/icon/ts.png'
import icoReact from '../assets/icon/react.png'
import icoRedux from '../assets/icon/redux.png'

function Skills() {
    return (
        <div className = {s.skillsBlock}>
            <div className = {`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={s.skills}>
                    <Skill title={'HTML'} icon={icoHtml}/>
                    <Skill title={'CSS'} icon={icoCss}/>
                    <Skill title={'JavaScript'} icon={icoJS}/>
                    <Skill title={'TypeScript'} icon={icoTS}/>
                    <Skill title={'React'} icon={icoReact}/>
                    <Skill title={'Redux'} icon={icoRedux}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
