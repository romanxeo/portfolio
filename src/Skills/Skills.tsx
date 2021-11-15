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
import {Fade} from 'react-awesome-reveal';

function Skills() {
    return (
        <div className={s.skillsBlock} id='skills'>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Fade duration={200}>
                    <Title title={'My Skills'}/>
                </Fade>
                <div className={s.skills}>
                    <Fade cascade={true} duration={200}>
                        <Skill title={'HTML'} icon={icoHtml}/>
                        <Skill title={'CSS'} icon={icoCss}/>
                        <Skill title={'JavaScript'} icon={icoJS}/>
                        <Skill title={'TypeScript'} icon={icoTS}/>
                        <Skill title={'React'} icon={icoReact}/>
                        <Skill title={'Redux'} icon={icoRedux}/>
                    </Fade>
                </div>
            </div>
        </div>
    );
}

export default Skills;
