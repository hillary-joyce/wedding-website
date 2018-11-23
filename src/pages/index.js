import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Icon from "../components/icon"
import Button from "../components/button"
import { FiClock } from "react-icons/fi"
import { FiMapPin } from "react-icons/fi"
import AddToCalendar from 'react-add-to-calendar';

import IndexHeaderBackground from '../../public/index-header-bg.jpg'

const event = {
  title: "Hillary & Mark's Wedding",
  description: '',
  location: 'St. Francis Hall, Washington, DC',
  startTime: '2019-09-28T16:00:00-04:00',
  endTime: '2019-09-28T22:00:00-04:00'
}

const IndexPage = () => (
  <Layout>
    <Header imgSrc={IndexHeaderBackground} title="Mark & Hillary"/>
    <div style={{paddingBottom: "100px"}} className="container">
      <div className="two info-grid">
        <div className="grid-cell">
          <Icon size="4rem">
            <FiClock />
          </Icon>
          <h1>When</h1>
          <div>Saturday</div>
          <div>September 28 2019</div>
          <div>4:00 PM</div>
          <br/>
          <div className="button"><AddToCalendar event={event}/></div>
        </div>

        <div className="grid-cell">
          <Icon size="4rem">
            <FiMapPin />
          </Icon>
          <h1>Where</h1>
          <div>St. Francis Hall</div>
          <div>1340 Quincy St NE</div>
          <div>Washington, DC 20017</div>
          <br/>
          <a className="button" target="_blank" href="https://www.google.com/maps/place/St+Francis+Hall/@38.9375908,-76.9887057,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7c794b96249fd:0x1bfb320ff4f61bc3!8m2!3d38.9375908!4d-76.986517">View Map</a>
        </div>
      </div>

    </div>
  </Layout>
)


export default IndexPage
