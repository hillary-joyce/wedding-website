import React from "react"
import Menu from "../components/menu"
import Sidebar from "../components/sidebar"
import Header from "../components/header"
import Backdrop from "../components/backdrop"
import '../styles/main.scss'
import icon from '../../public/favicon.png'

const indexPage = () => (
  <div style={{height: "100%"}}>
    <Menu />
    <Sidebar />
    <Backdrop />
    <Header style={{marginTop: "64px"}} imgSrc={icon} title="Hillary & Mark"/>
  </div>
)

export default indexPage
