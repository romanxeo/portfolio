import React from 'react';
import s from './App.module.scss';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className={s.App}>
        1
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
