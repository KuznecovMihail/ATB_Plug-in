import React from 'react'
import logo from '../../img/logo.png'
import Form from './Form'
import '../../style/auth.css'

export default function Authorization (){
    return (
      <div className='authorization'>
        <div className="auth__logo">
            <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="auth__form">
            <h1 className="form__title">Авторизация </h1>
            <Form/>
        </div>
      </div>
    )
}
