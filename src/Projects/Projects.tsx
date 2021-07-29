import React from 'react';
import s from './Projects.module.css';
import sContainer from '../../src/common/styles/Container.module.css'
import Project from "./Project/Project";

function Projects() {
    return (
        <div className = {s.projectsBlock}>
            <div className = {`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>MY PROJECTS</h2>
                <div className={s.projects}>
                    <Project title={'Social network'} description={'ewfew nlfe erjwel fdlsnfljdf'}/>
                    <Project title={'Todolist'} description={'ewfew nlfe erjwel fdlsnfljdf'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
