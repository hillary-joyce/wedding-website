import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"
import PageTitle from "../components/pageTitle"
import '../styles/main.scss'
import TravelStarMap from "../../public/travel_star_map.png"
import { FiGift } from "react-icons/fi"

const Registry = () => (
  <Layout>
    <PageTitle id="registry-page-title" pageName="Registry" imgsrc={TravelStarMap} />
    <div style={{height: "100vh"}} className="container">
      <div className="grid-title">
        <Icon size="5rem">
          <FiGift />
        </Icon>
        <h2> We are registered at:</h2>
      </div>
      <div className="three info-grid">
        <div className="grid-cell">
          <p>Crate & Barrel Logo </p>
        </div>
        <div className="grid-cell">
          <p>Target Logo </p>
        </div>
        <div className="grid-cell">
          <p>Zola Logo </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Registry
