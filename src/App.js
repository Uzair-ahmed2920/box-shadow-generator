import React,{useState} from 'react';
import './App.css';

function App() {
  const [Hori,setHori]= useState(10)
  const [Veri,setVeri]= useState(10)
  const [Blur,setBlur]= useState(10)
  const [Color,setColor]= useState(10)
  const [Bgcolor,setBgcolor]= useState(10)


  return (
    <div className="App">
      <div className='control'>
      <label>Background Color</label>
      <input type="color" value={Bgcolor} onChange={(e)=>setBgcolor(e.target.value)} />
      <label>Horizontal Length</label>
      <input type="range" min="-200" max="200" value={Hori} onChange={(e)=>setHori(e.target.value)} />
      <label>Vertical Length</label>
      <input type="range" min="-200" max="200" value={Veri} onChange={(e)=>setVeri(e.target.value)} />
      <label>Blur</label>
      <input type="range" min="0" max="200" value={Blur} onChange={(e)=>setBlur(e.target.value)} />
      <label>Color</label>
      <input type="color" value={Color} onChange={(e)=>setColor(e.target.value)} />
      </div> 
      
      <div className='output'>
        <div className='box' style={{boxShadow:`${Hori}px ${Veri}px ${Blur}px ${Color}`,backgroundColor:`${Bgcolor}`}}></div>
      </div>
    </div>
  );
}

export default App;
