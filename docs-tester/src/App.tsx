import './App.css';
import TextField from './components/TextField';
import { useEffect, useState, useRef } from 'react'

function App() {
  const func = () => {
    console.log("yolo")
    return "yolo"
  }

  // testing an idea about renders
  const [info, setInfo] = useState('')
  const num = useRef(0)
  useEffect(()=>{
    num.current += 1
  })
  
  return (
    <div className="App">
      <TextField
        text="hello"
        chill={false}
        funky={func}
        obj2={{ firstName: 'spandex', lastName: 'lim' }}
      />
      <input onChange={(ev)=> {
        setInfo(ev.target.value)
        }} />
      <div>{num.current}</div>
    </div>
  );
}

export default App;
