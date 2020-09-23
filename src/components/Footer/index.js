import React from 'react'
import './Footer.css'
import instagram from '../../images/inst.png'
import facebook from '../../images/face.png'
import whatsapp from '../../images/whats.png'

function Footer() {
    return (
        <div className="footer">
            <a href="#"><img src={instagram}/></a>
            <a href="#"><img className="f" src={facebook}/></a>
            <a href="#"><img src={whatsapp}/></a>
        </div>
    )
}
export default Footer