import React from 'react'
import { Link } from 'gatsby'

const Sidebar = props => (
  <nav className="sidebar">
    <ul>
      <li className="sidebar-menu-item"><Link to="/travel">Travel</Link></li>
      <li className="sidebar-menu-item"><Link to="/activities">Things to Do</Link></li>
      <li className="sidebar-menu-item"><Link to="/faq">FAQs</Link></li>
      <li className="sidebar-menu-item"><Link to="/registry">Registry</Link></li>
      <li className="sidebar-menu-item"><Link to="/rsvp">RSVP</Link></li>
    </ul>
  </nav>
)

export default Sidebar
