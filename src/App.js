import React, {useState, useEffect}  from 'react';
import Home from './components/Home'
import './App.css'
import night from './images/night.jpg'
import day from './images/day.jpg'

function App() {
  const [background, setBackground] = useState('')
  const [colorFrom, setColorFrom] = useState('')
  const [colorTo, setColorTo] = useState('')

  
  useEffect(()=>{
    let date = new Date
    let hour = date.getHours()
    if(8 < hour < 19){
      setBackground(night)
      setColorFrom('#001584')
      setColorTo('#08668D')
    }else{
      setBackground(day)
      setColorFrom('#4C9DE2')
      setColorTo('#63ABE3')
    }
  }, [])

  return (
    <div className="App">
        <Home bg={background} colorFrom={colorFrom} colorTo={colorTo}/>
    </div>
  );
}

export default App;
