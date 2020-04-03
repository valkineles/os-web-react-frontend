import './login.css';

import React from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import { authFirebase } from '../../assets/js/auth';
import InsertNewUser from './login.service';

export default function Login() {
  const history = useHistory();
  async function handleLogin(e) {
    e.preventDefault();
    if (await authFirebase.loginWithGoogle()) {
      if (authFirebase.isNewUser()) {
        InsertNewUser();
      }
      history.push('/client');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Os WebNelson Logo" className="imgLogo" />
        <form>
          <h1>Entrar</h1>
          <p>Projeto para estudo de uso de novas tencologias desenvolvido pelo grupo de estudo da SIAC Sistemas</p>
          <button onClick={handleLogin} id="btnLoginGoogle" className="loginBtn">
            Login com Google
          </button>
        </form>
      </section>
    </div>
  );
}
