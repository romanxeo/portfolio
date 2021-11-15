import React from 'react';
import s from './Contacts.module.scss';
import sContainer from '../common/styles/Container.module.css'
import Title from "../common/components/Title";
import {Fade} from 'react-awesome-reveal';

function Contacts() {
    return (
        <div className={s.contactsBlock} id='contacts'>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Fade duration={200}>
                    <Title title={'My Contacts'}/>
                </Fade>
                <form className={s.contacts}>
                    <Fade cascade={true} duration={200}>
                        <>
                            <div className={s.text}>Name</div>
                            <input className={s.input}></input>
                        </>
                        <>
                            <div className={s.text}>E-mail</div>
                            <input className={s.input}></input>
                        </>
                        <>
                            <div className={s.text}>Post</div>
                            <textarea className={s.input}></textarea>
                        </>
                        <>
                            <button className={s.button}>Send</button>
                        </>
                    </Fade>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
