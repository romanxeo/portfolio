import React from 'react';
import s from './Projects.module.scss';
import sContainer from '../../src/common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/Title";
import {Fade} from 'react-awesome-reveal';

import img1 from './../assets/1.jpg'
import img2 from './../assets/2.jpg'
import img3 from './../assets/3.jpg'

function Projects() {
    return (
        <div className={s.projectsBlock} id='projects'>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Fade duration={200}>
                    <Title title={'My Projects'}/>
                </Fade>
                <div className={s.projects}>
                    <Project title={'Social network'}
                             description={'ewfew nlfe erjwel fdlsnfljdf'}
                             icon={img1}
                             link={'https://romanxeo.github.io/socnetwork'}/>
                    <Project title={'Todolist'}
                             description={'HAHAHA ewfew nlfe erjwel fdlsnfljdf'}
                             icon={img2}
                             link={'https://romanxeo.github.io/todolist'}/>
                    <Project title={'Cards learning'}
                             description={'Application for self-study by cards. The ability to create your own collection of cards. Learning with other user in network.'}
                             icon={img3}
                             link={'https://romanxeo.github.io/cardsapp'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
