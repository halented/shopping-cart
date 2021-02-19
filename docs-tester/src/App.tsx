import './App.css';
import TextField from './components/TextField';
import { useEffect, useState, useRef } from 'react'

function App() {
  const func = () => {
    console.log("yolo")
    return "yolo"
  }

  // useRef tester
  const num = useRef(0)

  return (
    <div className="App">
      <TextField
        text="hello"
        chill={false}
        funky={func}
        obj2={{ firstName: 'spandex', lastName: 'lim' }}
      />
      <button onClick={() => num.current += 1}>up to me</button>
    </div>
  );
}

export default App;
