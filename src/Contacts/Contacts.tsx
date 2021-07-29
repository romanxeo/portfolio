import React from 'react';
import s from './Contacts.module.css';
import sContainer from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className = {s.contactsBlock}>
            <div className = {`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>MY CONTACTS</h2>
                <form className={s.contacts}>
                    <div>Name</div>
                    <input className={s.input}></input>
                    <div>E-mail</div>
                    <input className={s.input}></input>
                    <div>Post</div>
                    <textarea className={s.input}></textarea>
                    <button className={s.button}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
