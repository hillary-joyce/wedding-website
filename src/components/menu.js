import React from "react"
import { Link } from "gatsby"

const menu = () => (
  <div className="menu-div">
    <div className="menu-item"><Link to="/">Home</Link></div>
    <div className="menu-item"><Link to="/travel">Travel</Link></div>
    <div className="menu-item"><Link to="/activities">Things to Do</Link></div>
    <div className="menu-item"><Link to="/faq">FAQs</Link></div>
    <div className="menu-item"><Link to="/registry">Registry</Link></div>
    <div className="menu-item"><Link to="/rsvp">RSVP</Link></div>
  </div>
)


export default menu
