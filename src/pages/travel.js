import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"
import PageTitle from "../components/pageTitle"
import Header from "../components/header"
import '../styles/main.scss'
import TravelStarMap from "../../public/travel_star_map.png"

import { IoMdAirplane } from "react-icons/io"
import { IoMdTrain } from "react-icons/io"
import { IoIosBed } from "react-icons/io"


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
          <h3>Reagan International (DCA)</h3>
          <p>
          Simple traveling adventure darn theme,
          darn blogger expedition travelblogger organized simple webdesign.
          </p>
          <button className="button">Book Flight</button>
        </div>
        <div className="grid-cell">
          <h3>Reagan International (DCA)</h3>
          <p>
          Simple traveling adventure darn theme,
          darn blogger expedition travelblogger organized simple webdesign.
          </p>
          <button className="button">Book Flight</button>
        </div>
        <div className="grid-cell">
          <h3>Reagan International (DCA)</h3>
          <p>
          Simple traveling adventure darn theme,
          darn blogger expedition travelblogger organized simple webdesign.
          </p>
          <button className="button">Book Flight</button>
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
          Simple traveling adventure darn theme,
          darn blogger expedition travelblogger organized simple webdesign.
          </p>
          <button className="button">Visit WMATA Website</button>
        </div>
        <div className="grid-cell">
          <h3>Car Rental</h3>
          <p>
          Simple traveling adventure darn theme,
          darn blogger expedition travelblogger organized simple webdesign.
          </p>
          <button className="button">Rent a Car</button>
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
