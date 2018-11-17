import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"
import PageTitle from "../components/pageTitle"
import '../styles/main.scss'
import TravelStarMap from "../../public/travel_star_map.png"

const Registry = () => (
  <Layout>
    <PageTitle pageName="Registry" imgsrc={TravelStarMap} />
    <div style={{height: "100vh"}} className="container"></div>
  </Layout>
)

export default Registry
