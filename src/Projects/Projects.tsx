import React from 'react';
import s from './Projects.module.css';
import sContainer from '../../src/common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title";

function Projects() {
    return (
        <div className = {s.projectsBlock}>
            <div className = {`${sContainer.container} ${s.projectsContainer}`}>
                <Title title={'MY PROJECT'}/>
                <div className={s.projects}>
                    <Project title={'Social network'} description={'ewfew nlfe erjwel fdlsnfljdf'}/>
                    <Project title={'Todolist'} description={'ewfew nlfe erjwel fdlsnfljdf'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
