import React from 'react'
import './Login.css'

function Login(props) {
    return (
        <div>
            {props.toggleLogin && 
            <div className="lll">
                <div className="auth"></div>
                <h3>Login</h3>
                <div className="loginAuth">
                    
                    <div className='loginInAcc'></div>
                    <div className="dontHaveAcc" style={{background: props.loginBg}}></div>
                </div>
            </div>
            }
        </div>
    )
}
export default Login