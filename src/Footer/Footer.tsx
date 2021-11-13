import React from 'react';
import s from './Footer.module.scss';
import sContainer from '../common/styles/Container.module.css'
import Title from "../common/components/Title";
import Link from './Link/Link';
import iconInst from './../assets/link/inst.png'
import iconTG from './../assets/link/tg.png'
import iconGit from './../assets/link/git.png'
import iconLIN from './../assets/link/lin.png'

function Footer() {
    return (
        <div className = {s.footerBlock}>
            <div className = {`${sContainer.container} ${s.footerContainer}`}>

                <div className={s.footer}>
                    <Link title={'instagram'} icon={iconInst}/>
                    <Link title={'telegram'} icon={iconTG}/>
                    <Link title={'github'} icon={iconGit}/>
                    <Link title={'linkedin'} icon={iconLIN}/>
                </div>

                <div className={s.text}>(c) 2021</div>
            </div>
        </div>
    );
}

export default Footer;


/*<Title title={'ROMAN G'}/>*/