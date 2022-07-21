import React, {PureComponent} from "react"
import Parent from "./Parent"

class GrandParent extends PureComponent {  
 /**
  * We extend not from Componets but from PureComponent which performs on our behalf the 
  * shouldComponentUpdate() for us in much easier way ,we make the parent component a 
  * Pure Component and it will perform the check all through.
  * It's elways good to have  our pure coponent on our child component to 
  * check if it is receiving any props/states from the parent component so
  * for any changes it will update 
  * 
  */     
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