import {useState} from "react";
import './Counter.scss';

export const Conter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={increment}>increase: {count}</button>
        </div>
    )
}