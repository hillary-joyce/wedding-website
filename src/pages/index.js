import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Icon from "../components/icon"
import { FiClock } from "react-icons/fi"
import { FiMapPin } from "react-icons/fi"

import IndexHeaderBackground from '../../public/index-header-bg.jpg'


const IndexPage = () => (
  <Layout>
    <Header imgSrc={IndexHeaderBackground} title="Mark & Hillary"/>
    <div style={{paddingBottom: "200px"}}className="container">
      <div className="two info-grid">
        <div className="grid-cell">
          <Icon size="5rem">
            <FiClock />
          </Icon>
          <h1>When</h1>
          <div>Saturday</div>
          <div>September 28 2019</div>
          <div>4:00 PM</div>
          <br/>
          <button className="button">Add to Calendar</button>
        </div>

        <div className="grid-cell">
          <Icon size="5rem">
            <FiMapPin />
          </Icon>
          <h1>Where</h1>
          <div>St. Francis Hall</div>
          <div>1340 Quincy St NE</div>
          <div>Washington, DC 20017</div>
          <br/>
          <button className="button">get directions</button>
        </div>
      </div>

    </div>
  </Layout>
)


export default IndexPage
