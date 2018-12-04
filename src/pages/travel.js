import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"
import Header from "../components/header"
import '../styles/main.scss'
import TravelStarMap from "../../public/travel_star_map.png"

import { IoMdAirplane } from "react-icons/io"
import { IoMdTrain } from "react-icons/io"
import { IoIosBed } from "react-icons/io"

import "../styles/main.scss"


const Travel = () => (
  <Layout>
    <Header id="travel-pg" imgSrc={TravelStarMap} title="Travel"/>
    <div style={{height: "100vh"}} className="container">
      <div className="grid-title">
        <Icon size="5rem">
          <IoMdAirplane />
        </Icon>
        <h1>Airports</h1>
      </div>
      <div className="three info-grid">
        <div className="grid-cell">
          <h3>Reagan <br/> National (DCA)</h3>
          <p>
          The closest airport to Washington DC, National is just a 20 minute metro ride from
          downtown.
          </p>
        </div>
        <div className="grid-cell">
          <h3>Dulles International (IAD)</h3>
          <p>
          About 40 minutes outside the city, Dulles is a large airport servicing most of the
          United States.
          </p>
        </div>
        <div className="grid-cell">
          <h3>Baltimore-Washington (BWI)</h3>
          <p>
          Just south of Baltimore and about an hour from Washington, BWI is a major hub
          for Southwest Airlines.
          </p>
        </div>
      </div>


      <div className="grid-title">
        <Icon size="5rem">
          <IoMdTrain />
        </Icon>
        <h1>Transportation</h1>
      </div>
      <div className="two info-grid">
        <div className="grid-cell">
          <h3>Metro</h3>
          <p>
          The Washington Metro system stretches from Maryland down to the suburbs of
          Virginia. Visit the <a href="https://www.wmata.com/">WMATA website</a> for
          more information.
          </p>
        </div>
        <div className="grid-cell">
          <h3>Car Rental</h3>
          <p>
          All three airports listed above have car rentals on site. While parking can
          be difficult in DC, our venue has plenty of spaces!
          </p>
        </div>
      </div>

      <div className="grid-title">
        <Icon size="5rem">
          <IoIosBed />
        </Icon>
        <h1>Hotels</h1>
      </div>

      <div className="info-grid">
        <div className="grid-cell">
          <h2>More info on hotel blocks will be posted soon</h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default Travel
