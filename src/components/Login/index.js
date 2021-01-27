import React from 'react'
import './Login.css'
import loginImg from '../../images/login.png'

function Login(props) {
    return (
        <div>
            {props.toggleLogin && 
            <div className="lll">
                <div className="auth"></div>
                <h3>Login</h3>
                <div className="loginAuth">
                    
                    <div className='loginInAcc'>
                        <h3>E-MAIL ADDRESS</h3>
                        <div class="form__group1 field">
                            <input type="email" class="form__field" placeholder="E-mail" name="name" id='name' required />
                            <label for="E-mail" class="form__label">example@paradigma.com</label>
                            </div>
                        <h3 className="pass">PASSWORD</h3>
                        <div class="form__group2 field">
                        <input type="password" class="form__field" placeholder="Name" name="Password" id='name' required />
                        <label for="Password" class="form__label">Password</label>
                        </div>
                        <button style={{background: props.loginBg}}>Log In</button>
                        <p>Forgot you're password</p>
                    </div>
                    <div className="dontHaveAcc" style={{background: props.loginBg}} >
                        <img src={loginImg}/>
                        <h3>Don't have an account yet?</h3>
                        <p onClick={()=>{
                                props.setToggleSignUp(true) 
                                props.setToggleLogin(false)
                            }  
                        }>Sign up for an account</p>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
export default Login