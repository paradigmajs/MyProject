import React, {useState, useEffect} from 'react'
import paradigma from "../../images/Paradigma.png"
import burger from "../../images/burger.png"
import login from "../../images/login.png"
import trash from "../../images/trash.png"
import './Header.css'
import Login from '../Login'

function Header(props) {
    const [toggleLogin, setToggleLogin] = useState(false)
    const [loginBg,setLoginBg] = useState('')

    const logins =()=>{
        setToggleLogin(!toggleLogin)
    }
    useEffect(()=>{
        setLoginBg(props.loginBg)
    })

    return (
        <div>
            <div className="header">
            </div>
            <div className="headerContent">
                <div className="burger-menu">
                    <img src={burger} onClick={props.togleMenu}/>
                </div>
                <div className="logo">
                    <img src={paradigma}/>
                </div>
                <div className="login-trash">
                    <div className="login">
                        <img src={login} onClick={logins} />
                    </div>
                    <div className="trash">
                        <img src={trash}/>
                    </div>
                </div>
            </div>
            <Login toggleLogin={toggleLogin} loginBg={loginBg}/>
        </div>
    )
}
export default Header