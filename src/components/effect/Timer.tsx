import { useEffect, useState } from "react"

export const Timer = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((previousCount) => previousCount + 1)
        }, 1000);
    }, [count])

    return (
        <h2>{count}</h2>
    )
}
