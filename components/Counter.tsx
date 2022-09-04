import { useState } from 'react'
type Props = {
    start_counter: number
}
const Counter = ({ start_counter }: Props) => {
    const [counter, setCounter] = useState<number>(start_counter)

    return (<div>
        <button onClick={() => setCounter(prevVal => prevVal - 1)}>-</button>
        <span>{counter}</span>
        <button onClick={() => setCounter(prevVal => prevVal + 1)}>+</button>
    </div>)
}

export default Counter 