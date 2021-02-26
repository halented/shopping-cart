import { useState } from 'react'

interface Props {
    children: (count: number, setCount: React.Dispatch<React.SetStateAction<number>>) => JSX.Element | null
}

function Counter(props: Props) {
    const { children } = props

    const [count, setCount] = useState(0)

    return (
        <div>{children(count, setCount)}</div>
    )
}

export default Counter
