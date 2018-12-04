import React from "react"
import { IconContext } from "react-icons"


const Icon = props => (
  <IconContext.Provider value={{size: props.size, color: "#071013"}}>
    <div>
      {props.children}
    </div>
  </IconContext.Provider>
)

export default Icon
