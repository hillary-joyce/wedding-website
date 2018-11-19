import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"
import PageTitle from "../components/pageTitle"
import '../styles/main.scss'
import TravelStarMap from "../../public/travel_star_map.png"

const FAQ = () => (
  <Layout>
    <PageTitle pageName="FAQ" imgsrc={TravelStarMap} />
    <div style={{height: "100vh"}} className="container">
      <div className="info-grid">
        <div className="grid-cell faq-cell">
          <h3>Can I bring my kids?</h3>
          <p></p>
        </div>
        <div className="grid-cell faq-cell">
          <h3>Do you have a hotel block?</h3>
          <p></p>
        </div>
        <div className="grid-cell faq-cell">
          <h3>Is there a dress code?</h3>
          <p></p>
        </div>
        <div className="grid-cell faq-cell">
          <h3>Will parking be available?</h3>
          <p></p>
        </div>
        <div className="grid-cell faq-cell">
          <h3>Will transportation be provided?</h3>
          <p></p>
        </div>
        <div className="grid-cell faq-cell">
          <h3>What if I have other questions?</h3>
          <p></p>
        </div>
      </div>
    </div>
  </Layout>
)

export default FAQ
