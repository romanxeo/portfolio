import React from 'react';
import s from './App.module.css';
import Header from "./Header/Header";
import Main from "./Main/Main";

function App() {
  return (
    <div className={s.App}>
        <Header />
        <Main />
    </div>
  );
}

export default App;
