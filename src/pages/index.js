import React from "react"
import Menu from "../components/menu"
import Sidebar from "../components/sidebar"
import Header from "../components/header"
import Backdrop from "../components/backdrop"
import '../styles/main.scss'
import icon from '../../public/favicon.png'

class IndexPage extends React.Component {
  state = {
    sidebarOpen: false
  }

  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sidebarOpen: false})
  }

  render(){
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop hideSidebar={this.backdropClickHandler}/>
    }

    return (
      <div style={{height: "100%"}}>
        <Menu toggleMenu={this.sidebarToggleClickHandler} />
        <Sidebar show={this.state.sidebarOpen} hideSidebar={this.backdropClickHandler}/>
        {backdrop}
        <Header style={{marginTop: "64px"}} imgSrc={icon} title="Hillary & Mark"/>
      </div>
    )
  }
}


export default IndexPage
