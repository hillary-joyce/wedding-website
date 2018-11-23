import React from "react"

const Button = props => (
  <button className="button" id={props.id}>{props.children}</button>
)

export default Button;
