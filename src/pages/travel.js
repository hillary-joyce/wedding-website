import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icon"
import Header from "../components/header"
import '../styles/main.scss'

import { IoMdAirplane } from "react-icons/io"
import { IoMdTrain } from "react-icons/io"
import { IoIosBed } from "react-icons/io"

import "../styles/main.scss"


const Travel = () => (
  <Layout>
    <Header id="travel-pg" title="Travel"/>
    <div style={{height: "100vh"}} className="container">
      <div className="grid-title">
        <Icon size="5rem">
          <IoMdAirplane />
        </Icon>
        <h1 className="grid-cell-title">Airports</h1>
      </div>
      <div className="three info-grid">
        <div className="grid-cell">
          <h3 className="grid-cell-title sub-title">Reagan <br/> National (DCA)</h3>
          <p>
          The closest airport to Washington DC, National is just a 20 minute metro ride from
          downtown.
          </p>
        </div>
        <div className="grid-cell">
          <h3 className="grid-cell-title sub-title">Dulles International (IAD)</h3>
          <p>
          About 40 minutes outside the city, Dulles is a large airport servicing most of the
          United States.
          </p>
        </div>
        <div className="grid-cell">
          <h3 className="grid-cell-title sub-title">Baltimore-Washington (BWI)</h3>
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
        <h1 className="grid-cell-title">Transportation</h1>
      </div>
      <div className="two info-grid">
        <div className="grid-cell">
          <h3 className="grid-cell-title sub-title">Metro</h3>
          <p>
          The Washington Metro system stretches from Maryland down to the suburbs of
          Virginia. Visit the <a href="https://www.wmata.com/">WMATA website</a> for
          more information.
          </p>
        </div>
        <div className="grid-cell">
          <h3 className="grid-cell-title sub-title">Car Rental</h3>
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
        <h1 className="grid-cell-title">Hotel</h1>
      </div>

      <div className="info-grid">
        <div className="grid-cell">
          <h3 className="grid-cell-title sub-title">Kimpton Palomar</h3>
          <p> We have reserved a room block at the <a target="_blank" href="https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=2121%20P%20St%20NW,%20Washington,%20DC,%20US&qCiMy=82019&qCiD=27&qCoMy=82019&qCoD=29&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=TL9&qSlH=WDCPA&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505">
          Kimpton Palomar Hotel</a> in Washington, DC</p>
          <h3 className="grid-cell-title sub-title">Reservations</h3>
          <p> To reserve a room, you can call the Palomar at 877-866-3070 and make the reservation under <b>Scofield Seikaly Wedding Room Block</b></p>
          <a target="_blank" rel="noopener noreferrer" href="https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=2121%20P%20St%20NW,%20Washington,%20DC,%20US&qCiMy=82019&qCiD=27&qCoMy=82019&qCoD=29&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=TL9&qSlH=WDCPA&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505">
          Book your room online
          </a>
          <p> Make sure to book your room by <b>August 28th, 2019</b>!</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Travel
