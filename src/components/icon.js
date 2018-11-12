import React from "react"
import { IconContext } from "react-icons"


const Icon = props => (
  <IconContext.Provider value={{size: props.size, color: "#001D4A"}}>
    <div>
      {props.children}
    </div>
  </IconContext.Provider>
)

export default Icon
