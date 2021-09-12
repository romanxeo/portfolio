import React from 'react';
import s from './Skills.module.css';
import sContainer from "../common/styles/Container.module.css";
import Skill from "./Skill/Skill";
import Title from '../common/components/Title';

function Skills() {
    return (
        <div className = {s.skillsBlock}>
            <div className = {`${sContainer.container} ${s.skillsContainer}`}>
                <Title title={'My Skills'}/>
                <div className={s.skills}>
                    <Skill title={'CSS'} description={'ewfew nlfe erjwel fdlsnfljdf'}/>
                    <Skill title={'JS'} description={'ewfew nlfe erjwel fdlsnfljdf'}/>
                    <Skill title={'REACT'} description={'ewfew wqwqe wqe qwrewxzxf d sd dsgfgfd gfddfg fdg dsgfgfd gfddfg fdgdf  dsgfgfd gfddfg fdgdf  dsgfgfd gfddfg fdgdf  dsgfgfd gfddfg fdgdf  dsgfgfd gfddfg fdgdf  dsgfgfd gfddfg fdgdf  dsgfgfd gfddfg fdgdf  dsgfgfd gfddfg fdgdf  dsgfgfd gfddfg fdgdf  dsgfgfd gfddfg fdgdf df fd fgdfg fdgdfgdf dfg dfgdfgfdgre rer rwer we ew e qr eqtwetwer werwe nlfe erjwel fdlsnfljdf'}/>
                    <Skill title={'CSS'} description={'ewfew nlfe erjwel fdlsnfljdf'}/>
                    <Skill title={'JS'} description={'ewfew nlfe erjwel fdlsnfljdf'}/>
                    <Skill title={'REACT'} description={'ewfew wqwqe wqe qwrewre rer rwer we ew e qr eqtwetwer werwe nlfe erjwel fdlsnfljdf'}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;
