/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Image } from "../components/image";

import Navbar from './Navbar';
import "./layout.css"

const IMAGES = {
  navbar: 'navbarBackground',
  footer: 'footerBackground',
}

const Layout = ({ title, children }) => (
  <>
    <Navbar />
    <div className = 'navbar-bg'>
     <Image image={IMAGES.navbar}/>
    </div>
    <main>{children}</main>
    <div className='footer-bg'>
    <Image image={IMAGES.footer}/>
  </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
