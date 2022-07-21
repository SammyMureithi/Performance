import React from "react"
import Child from "../Components/Child"
import GrandChild from "./GrandChild"

function Parent() {
    console.log("[ ]   [👩🏼‍⚕️]   [ ]   [ ] rendered")
    return (
        <div>
            <p>I'm a Parent Component</p>
            <Child />
            <GrandChild/>
        </div>
    )
}

export default React.memo(Parent)