import React from "react"
import { Link } from "gatsby"
import SidebarToggleButton from "./sidebarToggleButton"
import Logo from "../../public/logo.png"

const showMenu = (event) => {
  console.log("hello world");
}
const menu = props => (
  <header className="menu">
    <div className="menu-navigation">
      <div className="sidebar-toggle-btn-div" onClick={props.toggleMenu}><SidebarToggleButton /></div>
      
      <div className="spacer"/>
      <div className="menu-logo"><Link to="/"></Link></div>
      <div className="menu-navigation-items">
        <ul>
          <li className="menu-item"><Link to="/travel">Travel</Link></li>
          <li className="menu-item"><Link to="/activities">Activities</Link></li>
          <li className="menu-item"><Link to="/faq">FAQs</Link></li>
          <li className="menu-item"><Link to="/registry">Registry</Link></li>
          <li className="menu-item"><Link to="/rsvp">RSVP</Link></li>
        </ul>
      </div>
    </div>
  </header>
);


export default menu
