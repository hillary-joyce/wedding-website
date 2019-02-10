import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"
import PageTitle from "../components/pageTitle"
import Header from "../components/header"
import '../styles/main.scss'
import { FiGift } from "react-icons/fi"

import zolaLogo from '../../public/registry/zola-logo.png'
const Registry = () => (
  <Layout>
    <Header id="registry-pg" title="Registry"/>
    <div className="container">
      <div className="grid-title">
        <h3> We are registered at:</h3>
      </div>
      <div className="one info-grid">
        <div className="grid-cell">
          <a href="https://www.zola.com/registry/hillaryandmark"><img src={zolaLogo} alt="Zola Logo"/></a>
        </div>
      </div>
    </div>
  </Layout>
)

export default Registry
