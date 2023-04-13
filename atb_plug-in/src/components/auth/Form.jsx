import React from 'react'
import '../../style/form.css'

export default function Form() {

    const requestAuthForm = () => {
        return false
    }

  return (
    <div className="form">
        <form action="" onSubmit={requestAuthForm()} method='POST'>
            <div className="form__flex">
                <label htmlFor='username' className="form__label form__label_username">Логин</label>
                <input 
                    placeholder='Login' 
                    id='username' 
                    type="text" 
                    className="form__input username" 
                />
                <label htmlFor='pass' className="form__label form__label_pass">Пароль</label>
                <input 
                    placeholder='Password' 
                    id='pass' 
                    type="password" 
                    className="form__input password" 
                />
                <div className="form__chbox">
                    <input 
                        id='chbox' 
                        type="checkbox" 
                        className="form__check" />
                    <label for="chbox" className="form__label_chnbox">Запомнить меня</label>
                </div>
                <div className="form__error">Неверный логин или пароль</div>
                <button type='submit' className="form__button">Войти</button>
            </div>
    </form>
    </div>
  )
}
