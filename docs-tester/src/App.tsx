import './App.css';
import TextField from './components/TextField';
import { useReducer, useRef } from 'react'

// works the same way it does in redux: accepts a value & and action
const reducer = (state: number, action: { type: string }) => {
  console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      throw new Error(`Unhandled type: ${action.type}`)
  }
}

function App() {
  const func = () => {
    console.log("yolo")
    return "yolo"
  }

  // useRef tester
  const num = useRef(0)

  // accepts two params: the reducer function, and the initial state
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      <div>count: {count}</div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>inc</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>dec</button>
      <TextField
        text="hello"
        chill={false}
        funky={func}
        obj2={{ firstName: 'spandex', lastName: 'lim' }}
        handleChange={ev => {
          console.log(ev)
        }}
      />
      <button onClick={() => num.current += 1}>up to me</button>
    </div>
  );
}

export default App;
