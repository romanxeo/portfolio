import React from 'react';
import s from './Footer.module.scss';
import sContainer from '../common/styles/Container.module.css'
import Title from "../common/components/Title";
import Link from './Link/Link';
import iconInst from './../assets/link/inst.png'
import iconTG from './../assets/link/tg.png'
import iconGit from './../assets/link/git.png'
import iconLIN from './../assets/link/lin.png'
import {Fade} from 'react-awesome-reveal';

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>

                <div className={s.footer}>
                    <Fade cascade={true} duration={200}>
                        <Link title={'instagram'} icon={iconInst} link={'https://instagram.com/romancyber'}/>
                        <Link title={'telegram'} icon={iconTG} link={'https://t.me/romanxeo'}/>
                        <Link title={'github'} icon={iconGit} link={'https://github.com/romanxeo'}/>
                        <Link title={'linkedin'} icon={iconLIN} link={'https://linkedin.com/in/romanxeo'}/>
                    </Fade>
                </div>
                <Fade>
                    <div className={s.text}>(c) 2021</div>
                </Fade>
            </div>
        </div>
    );
}

export default Footer;


/*<Title title={'ROMAN G'}/>*/