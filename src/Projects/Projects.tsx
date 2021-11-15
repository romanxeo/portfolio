import React from 'react';
import s from './Projects.module.scss';
import sContainer from '../../src/common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title";

import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'

function Projects() {
    return (
        <div className = {s.projectsBlock}>
            <div className = {`${sContainer.container} ${s.projectsContainer}`}>
                <Title title={'My Projects'}/>
                <div className={s.projects}>
                    <Project title={'Social network'} description={'ewfew nlfe erjwel fdlsnfljdf'} icon={img1} link={'https://google1.com'}/>
                    <Project title={'Todolist'} description={'HAHAHA ewfew nlfe erjwel fdlsnfljdf'} icon={img2} link={'https://google1.com'}/>
                    <Project title={'Cards learning'} description={'HAHAHA ewfew nl11fe erjwel fdlsnfljdf'} icon={img3} link={'https://google1.com'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
