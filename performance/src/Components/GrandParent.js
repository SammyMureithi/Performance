import React, {Component} from "react"
import Parent from "./Parent"

class GrandParent extends Component {  
    /* here we ensure that our component only updates when the count changes
    which is not possible since we are not receiving the count state to our grandparent component 
    in any mannner
     */
    
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.count === this.props.count) {
            return false
        }
        return true
    }
      
    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a GrandParent Component</p>
                <Parent />
                <Parent />
            </div>
        )
    }
}

export default GrandParent