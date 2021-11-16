import React from 'react';
import s from './Contacts.module.scss';
import sContainer from '../common/styles/Container.module.css'
import Title from "../common/components/Title";
import {Fade} from 'react-awesome-reveal';
import emailjs from 'emailjs-com'

function Contacts() {

    const sendEmail = (e: any) => {
        e.preventDefault()

        e.target[0].value = ''
        e.target[1].value = ''
        e.target[2].value = ''

        emailjs.sendForm('service_5afmvy7', 'template_29qkvx9', e.target, 'user_T2kNcEPpX8u2L6nplw9Gc')
            .then(res => {
                    alert('Your message has been sent')
                }
            )
            .catch(err => {
                    alert('Your message has not been sent')
                }
            )
    }


    return (
        <div className={s.contactsBlock} id='contacts'>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Fade duration={200}>
                    <Title title={'My Contacts'}/>
                </Fade>
                <form className={s.contacts} onSubmit={sendEmail}>
                    <Fade cascade={true} duration={200}>
                        <>
                            <div className={s.text}>Name</div>
                            <input className={s.input} name='name'></input>
                        </>
                        <>
                            <div className={s.text}>E-mail</div>
                            <input className={s.input} name='emailName'></input>
                        </>
                        <>
                            <div className={s.text}>Post</div>
                            <textarea className={s.input} name='message'></textarea>
                        </>
                        <>
                            <input type='submit' className={s.button} value="Send.."/>
                        </>
                    </Fade>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
