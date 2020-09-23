import React from 'react'
import './Menu.css'

function Menu(props) {
    
    return (
        <div>

            <div className="menu" style={{background: "linear-gradient(349.67deg, "+ props.colorFrom+" -16.63%, " +props.colorTo + " 108.14%)", left: props.ml+'%'}}>

                
            </div>
        
        </div>
    )
}
export default Menu