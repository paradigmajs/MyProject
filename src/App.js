import React, {useState, useEffect}  from 'react';
import Home from './components/Home'
import './App.css'
import night from './images/night.jpg'
import day from './images/day.jpg'

function App() {
  const [background, setBackground] = useState('')
  const [colorFrom, setColorFrom] = useState('')
  const [colorTo, setColorTo] = useState('')
  const [loginBg,setLoginBg] = useState('')
  
  useEffect(()=>{
    let date = new Date
    let hour = date.getHours()

    if(hour > 7 || hour < 18){
      setBackground(night)
      setColorFrom('#001584')
      setColorTo('#08668D')
      setLoginBg('#010E6B')
    }else{
      setBackground(day)
      setColorFrom('#4C9DE2')
      setColorTo('#63ABE3')
      setLoginBg('#4B9EE2')
    }
  }, [])

  return (
    <div className="App">
        <Home bg={background} colorFrom={colorFrom} colorTo={colorTo} loginBg={loginBg}/>
    </div>
  );
}

export default App;
