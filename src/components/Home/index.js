import React, {useState, useEffect} from 'react';
import night from '../../images/night.jpg'
import './Home.css'
import Header from '../Header';
import Footer from '../Footer';
import Menu from '../Menu';
import Brands from '../Brands';
import air from '../../images/flot.png'



function  Home(props){
    const [colorFrom, setColorFrom] = useState('')
    const [colorTo, setColorTo] = useState('')
    const [menuToggle, setMenuToggle] = useState(false)
    const [ml , setMl] = useState(-25)
    const [brandsToggle, setBrandsToggle] = useState(false)
    const [loginBg,setLoginBg] = useState('')

    useEffect(()=>{
        setColorTo(props.colorTo)
        setColorFrom(props.colorFrom)
        setLoginBg(props.loginBg)
    })
    
    const togleMenu = () =>{
        setMenuToggle(!menuToggle)

        if(menuToggle===false){
            for(var i = ml; i>=-25; i--){
                doSetTimeout(i)
            }
        }else{
            for(var i = ml; i<=0;i++){
                doSetTimeout(i)
            }
        }
    }

    const doSetTimeout=(i)=> {
        setTimeout(function() { setMl(i); }, 100);
    }

    const brands=()=>{
        setBrandsToggle(!brandsToggle)
    }
    const toggles=()=>{
        if(brandsToggle !== false ){
            setBrandsToggle(false)
        }
        
    }
    

    return(
        
        <div>
        <div className="background" style={{backgroundImage: "url(" +  props.bg  + ")"}} onClick={toggles}>
        <button onClick={brands}>Click me</button>
            <div className="AirFlot">
                <img src={air}/>
            </div>
        </div>
            
            <Header togleMenu={togleMenu} loginBg={loginBg}/>
            
            <Menu colorFrom={colorFrom} colorTo={colorTo} ml={ml}/>
            <Brands colorFrom={colorFrom} colorTo={colorTo} brandsToggle={brandsToggle}/>
            <Footer/>
        </div>
    )
}
export default Home