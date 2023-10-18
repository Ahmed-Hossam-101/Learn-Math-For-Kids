import React, { useState } from 'react'
import '../../style/Home.css'
import {Date1} from './tasks'
export const Tasks = () => {
    const [rerender, setrerender] = useState(0)
  return (
    <section className="tasks">
<nav className="TasksBar" id="pGoals"  style={{"--color":'#ffb4b4'}}>
    <h1 className="heddingTag">Tasks</h1>
{Date1['+'].map(item =>(
    
    <div style={{"--color":'#F45050'}} key={Math.random()*10}>
        <p className='goal' style={{"--color":'#ffb4b4'}}>{item.Goal}</p>
        <p className='prize'>{item.prize}</p>
        <button className='getPrize' style={{"--color":'#ffb4b4'}} onClick={() =>{
            if (localStorage.getItem('xp+') >=  item.Goal) {
                localStorage.setItem('xp+',+localStorage.getItem('xp+') + +item.prize)
            }
}}>Get it</button>
    </div>

))}
</nav>
<nav className="TasksBar" id="mGoals" style={{"--color":'#80B3FF'}}>
{Date1['-'].map(item=>(
    
    <div style={{"--color":'#a0cbff'}} key={Math.random() *10}>
        <p className='goal' style={{"--color":'#a0cbff'}}>{item.Goal}</p>
        <p className='prize'>{item.prize}</p>
        <button className='getPrize' style={{"--color":'#a0cbff'}} onClick={e =>{
        
}
        }>Get it</button>
    </div>

))}
</nav>
    </section>  
    )
}
