import React from 'react'
import './css/login.css';

const Login = () => {
    return (
        <div class="auth-form">
                    <div class="auth-form__container">
                        <div class="auth-form__header">
                            <h3 class="auth-form__heading">Login</h3>
    
                        </div>
                        <div class="auth-form__form">
                            <div class="auth-form__group">
                                <span>User Name: </span>
                                <input type="text" class="auth-form__input" placeholder="User name"></input>
                            </div>
                            <div class="auth-form__group">
                                <span>Password: </span>
                                <input type="password" class="auth-form__input" placeholder="Password"></input>
                            </div>
                            

                        </div>
                       

                        <div class="auth-form__controls">
                            <button class="btn btn--prime btn--normal">Login</button>
                        </div>
                    </div>
            
            </div> 
    )
}

export default Login
