import React from 'react'
import './Brands.css'

function Brands(props) {
    return (
        <div>
            {props.brandsToggle &&
                <div className='wrapper' style={{background: "linear-gradient(349.67deg, "+ props.colorFrom+" -16.63%, " +props.colorTo + " 108.14%)"}}>
                    <div className="brandsContent">
                        
                    </div>
                </div>
             }
        </div>
    )
}
export default Brands