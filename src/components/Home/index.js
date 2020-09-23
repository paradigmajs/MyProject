import React, {useState, useEffect} from 'react';
import night from '../../images/night.jpg'
import './Home.css'
import Header from '../Header';
import Footer from '../Footer';
import Menu from '../Menu';

function Home(props){
    const [colorFrom, setColorFrom] = useState('')
    const [colorTo, setColorTo] = useState('')
    const [menuToggle, setMenuToggle] = useState(false)
    const [ml , setMl] = useState(-25)

    useEffect(()=>{
        setColorTo(props.colorTo)
        setColorFrom(props.colorFrom)
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
    function doSetTimeout(i) {
        setTimeout(function() { setMl(i); }, 100);
    }
    
    return(
        <div className="background" style={{backgroundImage: "url(" +  props.bg  + ")"}}>
            <Header togleMenu={togleMenu}/>
            <Menu colorFrom={colorFrom} colorTo={colorTo} ml={ml}/>
            <Footer/>
        </div>
    )
}
export default Home