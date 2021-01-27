import React from 'react'
import loginImg from '../../images/login.png'

export default function SignUp(props) {
    return (
        <div>
            {props.toggleSignUp && 
            <div className="lll">
                <div className="auth"></div>
                <h3>Authorization</h3>
                <div className="loginAuth">
                    <div className='loginInAcc'>
                        <div class="form__group1 field">
                                <input type="email" class="form__field" placeholder="E-mail" name="name" id='name' required />
                                <label for="E-mail" class="form__label">First Name</label>
                            </div>
                            <div class="form__group1 field">
                                <input type="email" class="form__field" placeholder="E-mail" name="name" id='name' required />
                                <label for="E-mail" class="form__label">Last Name</label>
                            </div>
                        <div class="form__group1 field">
                            <input type="email" class="form__field" placeholder="E-mail" name="name" id='name' required />
                            <label for="E-mail" class="form__label">example@paradigma.com</label>
                        </div>
                      
                        <div class="form__group2 field">
                            <input type="password" class="form__field" placeholder="Name" name="Password" id='name' required />
                            <label for="Password" class="form__label">Password</label>
                        </div>
                    
                        <div class="form__group2 field">
                            <input type="password" class="form__field" placeholder="Name" name="Password" id='name' required />
                            <label for="Password" class="form__label">Confirm Password</label>
                        </div>
                        <button style={{background: props.loginBg}}>Sign Up</button>
                        <p>Forgot you're password</p>
                    </div>
                    <div className="dontHaveAcc" style={{background: props.loginBg}}>
                        <img src={loginImg}/>
                        <h3>Don't have an account yet?</h3>
                        <p>Sign up for an account</p>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
