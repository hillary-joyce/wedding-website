import React from 'react'
import { Link } from 'gatsby'

const Sidebar = props => {
  let sidebarClasses = 'sidebar';
  if (props.show) {
    sidebarClasses = 'sidebar open'
  }
  return (
  <nav className={sidebarClasses}>
    <div onClick={props.hideSidebar} className="sidebar-close-btn">x</div>
    <ul>
      <li className="sidebar-menu-item"><Link to="/">Home</Link></li>
      <li className="sidebar-menu-item"><Link to="/travel">Travel</Link></li>
      <li className="sidebar-menu-item"><Link to="/activities">Things to Do</Link></li>
      <li className="sidebar-menu-item"><Link to="/faq">FAQs</Link></li>
      <li className="sidebar-menu-item"><Link to="/registry">Registry</Link></li>
      <li className="sidebar-menu-item"><Link to="/rsvp">RSVP</Link></li>
    </ul>
  </nav>
)
}
export default Sidebar
