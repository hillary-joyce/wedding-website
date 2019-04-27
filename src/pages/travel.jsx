import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridContainer from '../compartments/GridContainer'
import { GridCell } from '../compartments/GridCells'
import Icon from '../components/Icon';
import { IoMdAirplane, IoMdTrain, IoIosBed } from "react-icons/io";

const TravelPage = () => (
  <Layout title='travel'>
    <SEO title="Hillary and Mark - Travel" />
    <div className='index-header-text'>
      Travel
    </div>
    <div className="grid-title">
        <Icon size="5rem">
          <IoMdAirplane />
        </Icon>
        <h1 className="grid-cell-title">AIRPORTS</h1>
      </div>
    <GridContainer columns={3}>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Reagan <br/> National (DCA)</h3>
        <p className='grid-details'>
          The closest airport to Washington DC, National is just a 20 minute metro ride from
          downtown.
        </p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Dulles International (IAD)</h3>
        <p className='grid-details'>
        About 40 minutes outside the city, Dulles is a large airport servicing most of the
        United States and International locations.
        </p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Baltimore-Washington (BWI)</h3>
        <p className='grid-details'>
          Just south of Baltimore and about an hour from Washington, BWI is a major hub
          for Southwest Airlines.
        </p>
      </GridCell>
    </GridContainer>
    <div className="grid-title">
      <Icon size="5rem">
        <IoMdTrain />
      </Icon>
      <h1 className="grid-cell-title">TRANSPORTATION</h1>
    </div>
    <GridContainer columns={2}>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Metro</h3>
        <p className='grid-details'>
        The Washington Metro system stretches from Maryland down to the suburbs of
        Virginia. Visit the <a href="https://www.wmata.com/">WMATA website</a> for
        more information.
        </p>
      </GridCell>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Car Rental</h3>
        <p className='grid-details'>
        All three airports listed above have car rentals on site. While parking can
        be difficult in DC, our venue has plenty of spaces!
        </p>
      </GridCell>
    </GridContainer>
    <div className="grid-title">
      <Icon size="5rem">
        <IoIosBed />
      </Icon>
      <h1 className="grid-cell-title">HOTEL</h1>
    </div>
    <GridContainer columns={1}>
      <GridCell>
        <h3 className="grid-cell-title sub-title">Kimpton Palomar</h3>
        <p className='grid-details'> We have reserved a room block at the <a target="_blank" href="https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=2121%20P%20St%20NW,%20Washington,%20DC,%20US&qCiMy=82019&qCiD=27&qCoMy=82019&qCoD=29&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=TL9&qSlH=WDCPA&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505">
        Kimpton Palomar Hotel</a> in Washington, DC</p>
        <h3 className="grid-cell-title sub-title">Reservations</h3>
        <p className='grid-details'> To reserve a room, you can call the Palomar at 877-866-3070 and make the reservation under 'Scofield Seikaly Wedding Room Block'</p>
        <a className='grid-details' target="_blank" rel="noopener noreferrer" href="https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=2121%20P%20St%20NW,%20Washington,%20DC,%20US&qCiMy=82019&qCiD=27&qCoMy=82019&qCoD=29&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=TL9&qSlH=WDCPA&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505">
        Book your room online
        </a>
        <p className='grid-details'> Make sure to book your room by August 28th, 2019!</p>
      </GridCell>
    </GridContainer>
  </Layout>
)

export default TravelPage
