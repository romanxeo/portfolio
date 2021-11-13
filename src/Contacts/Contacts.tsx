import React from 'react';
import s from './Contacts.module.scss';
import sContainer from '../common/styles/Container.module.css'
import Title from "../common/components/Title";


function Contacts() {
    return (
        <div className = {s.contactsBlock}>
            <div className = {`${sContainer.container} ${s.contactsContainer}`}>
                <Title title={'My Contacts'}/>
                <form className={s.contacts}>
                    <div className={s.text}>Name</div>
                    <input className={s.input}></input>
                    <div className={s.text}>E-mail</div>
                    <input className={s.input}></input>
                    <div className={s.text}>Post</div>
                    <textarea className={s.input}></textarea>

                    <button className={s.button}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
