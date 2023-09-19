import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Rodape from './components/rodape/Rodape';
import Navbar from './components/navbar/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Rodape
       titulo='CURSOS'
       item1='java'
       item2='react'
       item3='typescript'
       item4='cybersegurança'
       item5='javascript' 
       titulo2='SOBRE'
       item6='informações'
       item7='contato'
       item8='blog'
       item9='chat'
       item10='FAQ'
       titulo3='REDES SOCIAIS'
       item11='github'
       item12='trello'
       item13='instagram'
       item14='linkedin'
       item15='Facebook'/>
      <Navbar
       Nav1='Nome'
       Nav2='Projetos'
       Nav3='Github'
       Nav4='LinkedIn'
       Nav5='Instagram'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
