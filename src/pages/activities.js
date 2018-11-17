import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"
import PageTitle from "../components/pageTitle"
import '../styles/main.scss'
import TravelStarMap from "../../public/travel_star_map.png"


const Activities = () => (
  <Layout>
  <PageTitle pageName="Welcome to DC" imgsrc={TravelStarMap} id="activities"/>
  <div style={{height: "100vh"}} className="container"></div>
  </Layout>
)

export default Activities
