import './App.css';
import TextField from './components/TextField';
import { useReducer, useRef, useState } from 'react'

// if i put this type here and hand it to the reducer, we get autocomplete when creating the onClicks
type Actions = { type: "INCREMENT" | "DECREMENT" }

// works the same way it does in redux: accepts state & and action
const reducer = (state: number, action: Actions) => {
  console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      throw new Error(`Unhandled type: ${action}`)
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

  // giving a type of boolean to the useState hook. I am unclear on the syntax here because if you compare it to the syntax below (giving a type to the return value of a function), it's totally different. and the angle brackets won't work with the other examples, only this one. 
  const [showButton, setShowButton] = useState<boolean>(true)

  // here's an example of typing the argument of a function AND typing the return value of a function
  function getNumber(name: string): number {
    console.log(name)
    return 6
  }
  // EQUALLY VALID version of typing the argument and return value
  const getName = (age: number): string => {
    console.log(age)
    return "Bingo"
  }

  let n: number
  n = 4
  //  with "strictNullChecks": false added to the tsconfig file, number would have a subtype of undefined and the next line would be valid:
  // n=undefined
  // however, the default setting will throw a TS error for trying to set a number type to undefined or null. 

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
      {showButton ?
        <button onClick={() => setShowButton(false)}>:(</button>
        :
        <button onClick={() => setShowButton(true)}>:)</button>
      }
    </div>
  );
}

export default App;
