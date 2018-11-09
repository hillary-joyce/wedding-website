import React from "react"

const Header = (props) => (
  <div className="header" style={{backgroundImage: `url(${props.imgSrc})`}}>
    <h1 className="header-title">{props.title}</h1>
  </div>
)

export default Header
