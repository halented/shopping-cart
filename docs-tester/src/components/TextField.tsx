import React, { useState, useRef } from 'react'

// this is used in props
interface Person {
    firstName: string
    lastName: string
}

// in the first line of the component, we COULD declare the type of the props that we expect inline, and it would look like this:
// const TextField: React.FC<{ text: string}> = () => { //component stuff here. }
// however, you can also declare the props in an interface, and then pass them to the react.fc type like so:

interface Props {
    // TextField expects you to pass a prop called text, a string; chill, a bool, oopsies, a num; a function; and an object.
    text: string,
    chill: boolean,
    // question mark before colon means that the field is optional
    oopsies?: number,
    // the function should receive an arg of type string, and it should return a string. you can also tell it to return any valid type, including void if it returns nothin.
    funky: (bob: string) => string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    // obj1 has one entry: f1 (whose key is a string)
    obj1?: {
        f1: string
    },
    // obj2 should be of type Person, defined above.
    obj2: Person
}
// next to the name of the component, we define its type using typescript. If you hover over the FC, it stands for functional component -- something that is handed to you by react, as it plays nice with TSX. Props are handed to the FC inside angle brackets.
const TextField: React.FC<Props> = (props) => {
    // below, if we simply set the default state to 5, typescript would assume that the type of count is a number. however, it would throw an error if you EVER set count to ANYTHING else. so, if you also want the count to be occasionally null, you can define those types with the angle brakcets using the or pipe. undefined is a different type from null, so if you want that too, you just have to add another pipe and put undef in there.
    // eslint-disable-next-line
    const [count, setCount] = useState<number | null>(5)

    // you can also do a situation similar to props.
    // eslint-disable-next-line
    const [info, setInfo] = useState<{ age: number, zildjian: boolean }>({ age: 15, zildjian: false })

    // once again, you can use an interface for this instead of entering it inline
    interface Kid {
        age: number,
        zildjian: boolean
    }
    const orlando: Kid = { age: 109, zildjian: true }
    // eslint-disable-next-line
    const [kid, setKid] = useState<Kid>(orlando)


    // usually, you would be able to set inputRef like this, without any errors:
    // const inputRef = useRef()
    // but because the types won't initially match, you have to tell typescript what to expect for the ref in order to work.
    const inputRef = useRef<HTMLInputElement>(null)

    // I am getting this type, HTMLDivElement, from hovering over the ref prop on the div below. because VS Code uses typescript under the hood, it has tool tips built in to let you know what the "type" of each thingy should be.
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={divRef}>
            <div>{props.text}</div>
            {/* if your function comes from props, it has to be a super specific type of event, defined in the props interface above. hover over onChange to see the type. */}
            <input ref={inputRef} onChange={props.handleChange} />
        </div>
    )
}

export default TextField
