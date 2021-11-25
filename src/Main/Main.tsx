import React from 'react';
import s from './Main.module.scss';
import sContainer from '../../src/common/styles/Container.module.css'
import photo from './../assets/my.png'
import Particles from 'react-particles-js';
import {Fade} from 'react-awesome-reveal';

const particlesOptions = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": false
            }
        },
        "color": {
            "value": "#cda274"
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "opacity": {
            "value": 0.4,
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "random": true,
            "speed": 1,
        }
    }
}


function Main() {

    return (
        <div className={s.main} id='main'>
            <Particles className={s.particles} params={particlesOptions}/>
            <div className={`${sContainer.container} ${s.mainContainer}`}>
                <div className={s.text}>
                    <Fade cascade={true} duration={300}>
                        <span>Hi all</span>
                        <h1>I'm <b>Roman GREBINCHAK</b></h1>
                        <p>Frontend developer</p>
                    </Fade>
                </div>
                <Fade cascade={true} duration={700}>
                    <div className={s.photoBlock}>
                        <img className={s.photo} src={photo}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Main;
