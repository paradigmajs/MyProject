import React, {useState, useEffect} from 'react'
import paradigma from "../../images/Paradigma.png"
import burger from "../../images/burger.png"
import login from "../../images/login.png"
import trash from "../../images/trash.png"
import './Header.css'

function Header(props) {
    

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
                        <img src={login}/>
                    </div>
                    <div className="trash">
                        <img src={trash}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header