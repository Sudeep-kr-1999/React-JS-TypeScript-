import React from "react"
import { Greet } from "../Greet"

// note :---- extracting props types from a component(Greet) in the props type here 
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>{JSON.stringify(props)}</div>
    )
}
