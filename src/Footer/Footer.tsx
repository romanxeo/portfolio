import React from 'react';
import s from './Footer.module.css';
import sContainer from '../common/styles/Container.module.css'
import Link from './Link/Link';


function Footer() {
    return (
        <div className = {s.footerBlock}>
            <div className = {`${sContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Roman G</h2>


                <div className={s.footer}>
                    <Link title={'instagram'} />
                    <Link title={'telegram'} />
                    <Link title={'github'} />
                    <Link title={'linkedin'} />
                </div>

                <div>(c) 2021</div>
            </div>
        </div>
    );
}

export default Footer;
